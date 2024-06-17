import { BiCoin } from 'react-icons/bi';
import { LuGift } from 'react-icons/lu';
import { MyReward } from '../../../models/RewardsData'
import { PRIMARY_COLOR, TERTIARY_COLOR } from '../../../utils/constants';
import './MyRewardModal.css'

type MyRewardModalProps = {
  reward: MyReward;
}

const MY_REWARD_IMAGE_BASE_URL = import.meta.env.VITE_REWARD_IMAGE_BASE_URL;

const MyRewardModal = ({reward} : MyRewardModalProps) => {
  const imgUrl = MY_REWARD_IMAGE_BASE_URL + reward.reward.imageReference;

  return (
    <div className='my-reward-modal'>
      <div className="my-reward-modal__img__container">
        {reward.reward.imageReference ? (
          <img src={imgUrl} alt="reward-image" className="my-reward-modal__img" />
        ) : (
          <LuGift
            size={250}
            className="my-reward-modal__img-not-found"
            color={TERTIARY_COLOR}
          />
        )}
      </div>

      <div className="my-reward-modal__description">
        <div className="my-reward-modal__description__header">
          <h2 className="my-reward-modal__description__header__title">
            {reward.reward.name}
          </h2>
        </div>
        <p className="my-reward-modal__description__text">{reward.reward.description}</p>
        <div className="my-reward-modal__footer">
          <div className="my-reward-modal__description__footer__points">
            <h2 className="my-reward-modal__description__footer__points__number">
              {reward.reward.points}
            </h2>
            <BiCoin size={32} color={PRIMARY_COLOR} />
          </div>
          <div>
            {reward.reward.status}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyRewardModal