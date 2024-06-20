import { LuTrash2 } from "react-icons/lu";
import { backgroundSecondary, borderRadius0_5, cursorPointer, flexAlignCenter, gap0_5, textColor, textError } from "../../../styles/index.css";
import { hashtagCardNameStyle, hashtagCardStyle } from "./HashtagCard.css";

type HashtagCardProps = {
  name: string;
  onClick: (hashtagName: string) => void;
};

const HashtagCard = ({ name, onClick }: HashtagCardProps) => {
  return (
    <div className={`${flexAlignCenter} ${gap0_5} ${backgroundSecondary} ${borderRadius0_5} ${hashtagCardStyle}`}>
        <div className={`${flexAlignCenter} ${hashtagCardNameStyle}`}>
            <p className={textColor}>#</p>
            <p>{name}</p>
        </div>
        <LuTrash2
            size={20}
            onClick={() => onClick(name)}
            className={`${cursorPointer} ${textError}`}
        />
    </div>
  );
};

export default HashtagCard;