import { BiCoin } from 'react-icons/bi';
import { MyReward } from '../../../models/RewardsData'
import { buildRewardImageURL } from '../../../utils/imageBuilder';
import './MyRewardInfoCard.css'

type MyRewardInfoCard = {
  reward: MyReward;
}

const MyRewardInfoCard = ({reward} : MyRewardInfoCard) => {

  return (
    <div className='my-reward-info-card'>
      <div className="my-reward-info-card__img__container">
        <img src={buildRewardImageURL(reward.reward.imageReference)} alt="reward-image" className='my-reward-info-card__img'/>
      </div>

      <div className="my-reward-info-card__description">
        <div className="my-reward-info-card__description__header">
          <h2 className="my-reward-info-card__description__header__title">
            {reward.reward.name}
          </h2>
        </div>
        <p className="my-reward-info-card__description__text">{reward.reward.description}</p>
        <div className="my-reward-info-card__footer">
          <div className="my-reward-info-card__description__footer__points">
            <h2 className="my-reward-info-card__description__footer__points__number">
              {reward.reward.points}
            </h2>
            <BiCoin size={32} />
          </div>
          <div>
            {reward.status}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyRewardInfoCard