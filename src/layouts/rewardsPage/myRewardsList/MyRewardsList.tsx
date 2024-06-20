import { MyReward } from "../../../models/RewardsData";
import MyRewardCard from "../myRewardCard/MyRewardCard";

type MyRewardsListProps = {
  list: MyReward[];
  className?: string;
  theme:boolean;
};

const MyRewardsList = ({ list, className, theme }: MyRewardsListProps) => {
  return (
    <div className={className}>
      {list.map((card) => (
        <MyRewardCard myReward={card} key={card.id} theme={theme}/>
      ))}
    </div>
  );
};

export default MyRewardsList;
