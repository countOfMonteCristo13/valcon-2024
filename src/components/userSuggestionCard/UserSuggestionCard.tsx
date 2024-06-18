import { PropsUser } from "../../models/PropsData"
import { buildImageURL } from "../../utils/imageBuilder";
import './UserSuggestionCard.css'

type UserSuggestionCardProps = {
    user:PropsUser;
    onClick: (userId: number, firstName: string, lastName: string) => void;
}

const UserSuggestionCard = ({user, onClick}:UserSuggestionCardProps) => {
  return (
    <div className='user-suggestion-card' onClick={() => onClick(user.id, user.firstName, user.lastName)}>
      <img src={buildImageURL(user.profileImageReference)} alt="profile-image" className="user-suggestion-card__img" />
      <p className="user-suggestion-card__name">{user.firstName} {user.lastName}</p>
    </div>
  )
}

export default UserSuggestionCard
