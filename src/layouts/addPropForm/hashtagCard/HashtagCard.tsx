import { LuTrash2 } from "react-icons/lu";
import "./HashtagCard.css";

type HashtagCardProps = {
  name: string;
  onClick: (hashtagName: string) => void;
};

const HashtagCard = ({ name, onClick }: HashtagCardProps) => {
  return (
    <div className="hashtag-card">
        <div className="hashtag-card__name">
            <p className="hashtag-card__name__hashtag-sign">#</p>
            <p>{name}</p>
        </div>
        <LuTrash2
            color="#ff0000"
            size={20}
            onClick={() => onClick(name)}
            className="hashtag-card__button"
        />
    </div>
  );
};

export default HashtagCard;