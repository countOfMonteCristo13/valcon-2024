import { RandomReward } from "../../models/RewardsData";
import "./RewardCard.css";

type RewardCardProps = {
  reward: RandomReward;
};

const REWARD_IMAGE_BASE_URL = import.meta.env.VITE_REWARD_IMAGE_BASE_URL;

const RewardCard = ({ reward }: RewardCardProps) => {
  const imgUrl = REWARD_IMAGE_BASE_URL + reward.imageReference;
  return (
    <div className="reward-card">
      <img src={imgUrl} alt="reward-image" className="reward-card__img" />
      <h2>{reward.name}</h2>
    </div>
  );
};

export default RewardCard;
