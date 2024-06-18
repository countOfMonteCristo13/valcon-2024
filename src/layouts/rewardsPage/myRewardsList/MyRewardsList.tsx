import { MyReward } from "../../../models/RewardsData";
import MyRewardCard from "../myRewardCard/MyRewardCard";

type MyRewardsListProps = {
  list: MyReward[];
  className?: string;
};

const MyRewardsList = ({ list, className }: MyRewardsListProps) => {
  return (
    <div className={className}>
      {list.map((card) => (
        <MyRewardCard myReward={card} key={card.id} />
      ))}
    </div>
  );
};

export default MyRewardsList;
