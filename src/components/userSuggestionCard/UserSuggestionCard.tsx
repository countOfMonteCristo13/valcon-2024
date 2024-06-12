import { PropsUser } from "../../models/PropsData"

type UserSuggestionCardProps = {
    user:PropsUser;
}

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

const UserSuggestionCard = ({user}:UserSuggestionCardProps) => {
  return (
    <div className='user-suggestion-card'>
      <img src={`${IMAGE_BASE_URL}${user.profileImageReference}`} alt="profile-image" className="user-suggestion-card__img"/>
      <p className="user-suggestion-card__name">{user.firstName} {user.lastName}</p>
    </div>
  )
}

export default UserSuggestionCard
