import { RxAvatar } from "react-icons/rx";
import { PropsUser } from "../../models/PropsData"
import { IMAGE_BASE_URL } from "../../utils/constants";
import './UserSuggestionCard.css'

type UserSuggestionCardProps = {
    user:PropsUser;
    onClick: (userId: number, firstName: string, lastName: string) => void;
}

const UserSuggestionCard = ({user, onClick}:UserSuggestionCardProps) => {
  return (
    <div className='user-suggestion-card' onClick={() => onClick(user.id, user.firstName, user.lastName)}>
      {
        user.profileImageReference ?
      <img src={`${IMAGE_BASE_URL}${user.profileImageReference}`} alt="profile-image" className="user-suggestion-card__img"/>
      :
      <RxAvatar size={32}/>
      }
      <p className="user-suggestion-card__name">{user.firstName} {user.lastName}</p>
    </div>
  )
}

export default UserSuggestionCard
