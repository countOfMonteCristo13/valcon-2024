import { Reward } from '../../../models/RewardsData'
import RewardCard from '../rewardCard/RewardCard';
import './RewardsList.css'

type RewardsListProps = {
    list: Reward[];
    className?: string;
    isMyRewardCard?:boolean;
    reedemablePoints?:number;
}

const RewardsList = ({list, className, isMyRewardCard = false, reedemablePoints}: RewardsListProps) => {
  return (
    <div className={className}>
      {
        list.map(card => (
            <RewardCard reward={card} key={card.id} isMyReward={isMyRewardCard} reedmeablePoints={reedemablePoints}/>
        ))
      }
    </div>
  )
}

export default RewardsList
