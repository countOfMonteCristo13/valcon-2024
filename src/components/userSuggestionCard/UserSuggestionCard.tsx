import { PropsUser } from "../../models/PropsData"
import { buildImageURL } from "../../utils/imageBuilder";
import { userSuggestionCardImageStyle, userSuggestionCardStyle } from "./UserSuggestionCardStyle.css";

type UserSuggestionCardProps = {
    user:PropsUser;
    onClick: (userId: number, firstName: string, lastName: string) => void;
}

const UserSuggestionCard = ({user, onClick}:UserSuggestionCardProps) => {
  return (
    <div className={userSuggestionCardStyle} onClick={() => onClick(user.id, user.firstName, user.lastName)}>
      <img src={buildImageURL(user.profileImageReference)} alt="profile-image" className={userSuggestionCardImageStyle} />
      <p>{user.firstName} {user.lastName}</p>
    </div>
  )
}

export default UserSuggestionCard
