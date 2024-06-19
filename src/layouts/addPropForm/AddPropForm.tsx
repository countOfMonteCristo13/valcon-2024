import { useState } from "react";
import Button from "../../components/button/Button";
import InputFormField from "../../components/inputFormField/InputFormField";
import { PostPropRequest } from "../../models/request/PostPropRequest";
import useActiveUsers from "../../hooks/useActiveUsers";
import UserSuggestionCard from "../../components/userSuggestionCard/UserSuggestionCard";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";
import HashtagCard from "./hashtagCard/HashtagCard";
import useActiveHashtags from "../../hooks/useActiveHashtags";
import SuggestedHashtags from "./suggestedHashtags/SuggestedHashtags";
import { addProp } from "../../services/PropsService";
import ErrorMessage from "./errorMessage/ErrorMessage";
import { addPropFormBodyStyle, addPropFormHashtagSign, addPropFormHashtags, addPropFormHashtagsCount, addPropFormMessageTextarea, addPropFormStyle, addPropFormUpperBodyStyle, errorAddPropFormMessageTextarea } from "./AddPropFormStyle.css";
import { borderRadius0_5, flexAlignCenter, flexColumn, fullWidth, gap0_5, justifyBetween, padding0_5, textColor } from "../../styles/index.css";
import "./AddPropForms.css";

type AddPropFormProps = {
  hideModal: (toggle: boolean) => void;
  giveablePoints: number;
  userId:number;
};

type AddPropFormErrors = {
  toUserIdError: string;
  messageError:string;
  hashtagsError:string;
  pointsError:string;
}

const initialAddPropFormErrosState = {
  toUserIdError: '',
  messageError:'',
  hashtagsError:'',
  pointsError:''
}

const initialFormData = {
  toUserId: 0,
  hashtags: [],
  points: 1,
  message: "",
  gifUrl: "",
};

const AddPropForm = ({ hideModal, giveablePoints, userId }: AddPropFormProps) => {
  const [formData, setFormData] = useState<PostPropRequest>(initialFormData);
  const [toUser, setToUser] = useState<string>("");
  const [isUserSelected, setIsUserSelected] = useState<boolean>(false);
  const [hashtag, setHashtag] = useState<string>("");
  const [hashtagsCount, setHashtagsCount] = useState<number>(0);
  const [errors, setErrors] = useState<AddPropFormErrors>(initialAddPropFormErrosState);
  const [error,setError] = useState('');

  const { usersList } = useActiveUsers(0,3,"asc",toUser);
  const { activeHashtagsList } = useActiveHashtags(0,5,"asc",hashtag);

  const handleInputsOnChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handlePointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(parseInt(e.target.value) > giveablePoints){
        setFormData(prevFormData => ({ ...prevFormData, points:  giveablePoints }));
      }else{
        setFormData(prevFormData => ({ ...prevFormData, points:  parseInt(e.target.value) }));
      }
  }

  const handleUserSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToUser(e.target.value);
    setIsUserSelected(false);
  };

  const handleSelectSuggestedUser = (userId: number, firstName: string, lastName: string) => {
    setFormData((prevData) => ({ ...prevData, toUserId: userId }));
    setToUser(`${firstName} ${lastName}`);
    setIsUserSelected(true);
  };

  const handleIncreasePoints = () => {
    if(formData.points >= giveablePoints){
      setFormData((prevFormData) => ({
        ...prevFormData,
        points: giveablePoints,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        points: prevFormData.points + 1,
      }));
    }
  };

  const handleDecreasePoints = () => {
    if(formData.points > giveablePoints){
      setFormData((prevFormData) => ({
        ...prevFormData,
        points: giveablePoints,
      }));
    } else if (formData.points > 1) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        points: prevFormData.points - 1,
      }));
    }
  };

  const handleAddHashtag = () => {
    if (hashtag) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        hashtags: [...prevFormData.hashtags, hashtag],
      }));
      setHashtag("");
      setHashtagsCount(prevCount => prevCount + 1);
    }
  };

  const handleSelectSuggestedHashtag = (name:string) => {

    if (!formData.hashtags.includes(name)) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        hashtags: [...prevFormData.hashtags, name],
      }));
      setHashtagsCount(prevCount => prevCount + 1); 
    }
    setHashtag("");
  }

  const handleDeleteHashtag = (hashtagName: string) => {
    const tempHashtagArray = [...formData.hashtags];
    const index = tempHashtagArray.indexOf(hashtagName);
    tempHashtagArray.splice(index, 1);

    setFormData((prevFormData) => ({
      ...prevFormData,
      hashtags: [...tempHashtagArray],
    }));

    setHashtagsCount(prevCount => prevCount - 1); 
  };

  const validateInputFields = (
    toUserId: number,
    points: number,
    message: string,
    hashtags: string[],
  ) => {

    if(!toUserId){
      setErrors(prevErrors => ({...prevErrors, toUserIdError:'Choose valid user'}))
    }

    if(userId === toUserId){
      setErrors(prevErrors => ({...prevErrors, toUserIdError:'You can not give props to yourself'}))
    }

    if(!points || points < 1 || points > giveablePoints){
      setErrors(prevErrors => ({...prevErrors, pointsError:`You can give 1 to ${giveablePoints} points`}))
    }

    if(!message.trim()){
      setErrors(prevErrors => ({...prevErrors, messageError:`You must send a message`}))
    }

    if(hashtags.length === 0){
      setErrors(prevErrors => ({...prevErrors, hashtagsError:`You can put 1 to 5 hashtags`}))
    }


    return (toUserId && points && points > 0 && points <= giveablePoints && message.trim() && hashtags.length !== 0);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(validateInputFields(formData.toUserId,formData.points,formData.message,formData.hashtags)){

      addProp(formData).then(() => {
        setFormData(initialFormData);
        setToUser("");
        hideModal(true);
      }).catch((err) => {
        setError(err.response.data[0]?.message || err.response.data?.message || 'Something went wrong');
      })

    }
  };


  return (
    <form className={addPropFormStyle} onSubmit={handleSubmit}>
      <div className={addPropFormBodyStyle}>
        <div className={addPropFormUpperBodyStyle}>
          <div className={`${flexColumn} ${textColor} ${gap0_5}`}>
            <InputFormField
              label="To:"
              id="toUserId"
              name="toUserId"
              value={toUser}
              onChange={handleUserSearchChange}
              className={textColor}
              hasError={errors.toUserIdError !== ''}
            />
            {usersList.length > 0 && !isUserSelected && (
              <div className={`${flexColumn} ${gap0_5}`}>
                {usersList.map((user) => (
                  <UserSuggestionCard
                    key={user.id}
                    user={user}
                    onClick={handleSelectSuggestedUser}
                  />
                ))}
              </div>
            )}
            {
              errors.toUserIdError && 
              <ErrorMessage name={errors.toUserIdError}/>
            }
          </div>
          <div className={`${flexColumn} ${textColor} ${gap0_5}`}>
            <label htmlFor="message">Message:</label>
            <textarea
              className={`${fullWidth} ${padding0_5} ${borderRadius0_5} ${textColor} ${addPropFormMessageTextarea} ${errors.messageError && errorAddPropFormMessageTextarea}`}
              name="message"
              value={formData.message}
              maxLength={150}
              onChange={handleInputsOnChange}
            />
            {
              errors.messageError && 
              <ErrorMessage name={errors.messageError}/>
            }
          </div>
          <div className={`${flexColumn} ${fullWidth} ${gap0_5} ${textColor}`}>
              <div className={`${flexAlignCenter} ${justifyBetween}`}>
                <p>Hashtags ( 1 to 5 ):</p>
                <p className={`${textColor} ${addPropFormHashtagsCount}`}>{hashtagsCount}</p>
              </div>
            <div className={`${flexAlignCenter} ${addPropFormHashtags}`}>
              <p className={`${textColor} ${addPropFormHashtagSign}`}>#</p>
              <InputFormField
                name="hashtag"
                value={hashtag}
                onChange={(e) => setHashtag(e.target.value)}
                className="add-prop-form__body__hashtags__input"
                hasError={errors.hashtagsError !== ''}
              />
              <Button
                title="Add"
                onClick={handleAddHashtag}
                className="add-prop-form__body__hashtags__add-button"
              />
            </div>
            {
              activeHashtagsList.length > 0 && <SuggestedHashtags list={activeHashtagsList} onClick={handleSelectSuggestedHashtag}/>
            }
            {formData.hashtags.length > 0 && (
              <div className="add-prop-form__body__selected__hashtags">
                {formData.hashtags.map((hashtag) => (
                  <HashtagCard key={hashtag} name={hashtag} onClick={handleDeleteHashtag} />
                ))}
              </div>
            )}
            {
              errors.hashtagsError && 
              <ErrorMessage name={errors.hashtagsError}/>
            }
          </div>
        </div>
        <div className="add-prop-form__body__container-2">
          <div className="add-prop-form__body__points">
            <LuMinusCircle
              size={32}
              onClick={handleDecreasePoints}
            />
            <InputFormField
              id="points"
              name="points"
              inputType="number"
              value={formData.points}
              onChange={handlePointsChange}
              className="add-prop-form__body__points__input"
            />
            <LuPlusCircle
              size={32}
              onClick={handleIncreasePoints}
            />
          </div>
            {
              errors.pointsError && 
              <ErrorMessage name={errors.pointsError}/>
            }
        </div>
      </div>
      <div className="add-prop-form__footer">
        <div className="add-prop-form__footer__buttons">
          <Button
            type="submit"
            title="Add Prop"
            className="add-prop-form__buttons__footer__button"
          />
          {
            error && 
            <ErrorMessage name={error}/>
          }
        </div>
      </div>
    </form>
  );
};

export default AddPropForm;

