import { useTheme } from "../../context/ThemeContext";
import { PropsUser } from "../../models/PropsData"
import { backgroundSecondary, borderRadius0_5, flexAlignCenter, gap0_5, padding0_5 } from "../../styles/index.css";
import { buildImageURL } from "../../utils/imageBuilder";
import { userSuggestionCardImageStyle, userSuggestionCardStyle } from "./UserSuggestionCardStyle.css";

type UserSuggestionCardProps = {
    user:PropsUser;
    onClick: (userId: number, firstName: string, lastName: string) => void;
}

const UserSuggestionCard = ({user, onClick}:UserSuggestionCardProps) => {

  const {theme} = useTheme();
  return (
    <div className={`${flexAlignCenter} ${gap0_5} ${backgroundSecondary} ${padding0_5} ${borderRadius0_5} ${userSuggestionCardStyle}`} onClick={() => onClick(user.id, user.firstName, user.lastName)}>
      <img src={buildImageURL(theme,user.profileImageReference)} alt="profile-image" className={userSuggestionCardImageStyle} />
      <p>{user.firstName} {user.lastName}</p>
    </div>
  )
}

export default UserSuggestionCard
