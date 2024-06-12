import { PropsUser } from "../../models/PropsData"
import { IMAGE_BASE_URL } from "../../utils/constants";

type UserSuggestionCardProps = {
    user:PropsUser;
}

const UserSuggestionCard = ({user}:UserSuggestionCardProps) => {
  return (
    <div className='user-suggestion-card'>
      <img src={`${IMAGE_BASE_URL}${user.profileImageReference}`} alt="profile-image" className="user-suggestion-card__img"/>
      <p className="user-suggestion-card__name">{user.firstName} {user.lastName}</p>
    </div>
  )
}

export default UserSuggestionCard
