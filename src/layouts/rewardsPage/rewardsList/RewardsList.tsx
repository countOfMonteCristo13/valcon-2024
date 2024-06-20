import { Reward } from "../../../models/RewardsData";
import RewardCard from "../rewardCard/RewardCard";

type RewardsListProps = {
  list: Reward[];
  className?: string;
  redeemablePoints?: number;
  rewardCardRedeemReward: (id:number) => void;
  theme:boolean,
};

const RewardsList = ({
  list,
  className,
  redeemablePoints,
  rewardCardRedeemReward,
  theme
}: RewardsListProps) => {
  return (
    <div className={className}>
      {list.map((card) => (
        <RewardCard
          reward={card}
          key={card.id}
          reedmeablePoints={redeemablePoints}
          redeemReward={rewardCardRedeemReward}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default RewardsList;
