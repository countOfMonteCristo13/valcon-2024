import { RxAvatar } from "react-icons/rx"
import { PropModel } from "../../models/PropsData"
import { ACTIVE_COLOR, IMAGE_BASE_URL } from "../../utils/constants"
import './Prop.css'
import { BiCoin } from "react-icons/bi"
import { dateFormat } from "../../services/DateFormat"

type PropPostProps = {
  prop: PropModel
}

const Prop = ({ prop } : PropPostProps) => {

  const dateOfCreation = dateFormat(prop.creationTime);

  return (
    <div className="prop">

      <div className="prop__header">
        <div className="prop__header__to-user">
          {
            prop.toUser.profileImageReference ? 
            <img src={`${IMAGE_BASE_URL}${prop.toUser.profileImageReference}`} alt="profile-image" className="prop__header__to-user__img prop__img"/>
          :
            <RxAvatar size={32}/>
          }
          <p className="prop__header__to-user__name">{prop.toUser.firstName} {prop.toUser.lastName}</p>
        </div>
        <div className="prop__header__points">
          <h3 className="prop__header__points__number">{prop.propPoints}</h3>
          <BiCoin size={24} color={ACTIVE_COLOR}/>
        </div>
      </div>
      <div className="prop__body">
          <div className="prop__body__message">
            <div className="prop__body__message__title">
              <span>From: </span>
              {
                prop.fromUser.profileImageReference ? 
                <img src={`${IMAGE_BASE_URL}${prop.fromUser.profileImageReference}`} alt="profile-image" className="prop__body__message__img prop__img"/>
              :
                <RxAvatar size={32}/>
              }
              <span className="prop__body__message__sender__name">{prop.fromUser.firstName} {prop.fromUser.lastName}</span>
            </div>
            <p className="prop__body__message__description">
              {prop.message}
            </p>
          </div>
          <div className="prop__body__hashtags">
              {
                prop.hashtags.map((hashtag) => (
                  <p className="prop__body__hashtags__title"><span>#</span>{hashtag.name}</p>
                ))
              }
          </div>
      </div>
      <div className="prop__footer">
          <h3 className="prop__footer__date-of-creation">{dateOfCreation}</h3>
      </div>
    </div>
  )
}

export default Prop
