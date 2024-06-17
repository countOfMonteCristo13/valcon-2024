import { Reward } from "../../../models/RewardsData";
import RewardCard from "../rewardCard/RewardCard";
import "./RewardsList.css";

type RewardsListProps = {
  list: Reward[];
  className?: string;
  redeemablePoints?: number;
  rewardCardRedeemReward: (id:number) => void;
};

const RewardsList = ({
  list,
  className,
  redeemablePoints,rewardCardRedeemReward
}: RewardsListProps) => {
  return (
    <div className={className}>
      {list.map((card) => (
        <RewardCard
          reward={card}
          key={card.id}
          reedmeablePoints={redeemablePoints}
          redeemReward={rewardCardRedeemReward}
          
        />
      ))}
    </div>
  );
};

export default RewardsList;
