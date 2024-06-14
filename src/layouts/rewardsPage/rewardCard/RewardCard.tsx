import { BiCoin, BiGift } from "react-icons/bi";
import { Reward } from "../../../models/RewardsData";
import { PRIMARY_COLOR } from "../../../utils/constants";
import Button from "../../../components/button/Button";
import ElementContainer from "../../../components/elementContainer/ElementContainer";
import "./RewardCard.css";

type RewardCardProps = {
  isMyReward?: boolean;
  reward: Reward;
  reedmeablePoints?:number;
};

const REWARD_IMAGE_BASE_URL = import.meta.env.VITE_REWARD_IMAGE_BASE_URL;

const RewardCard = ({ reward, isMyReward = false, reedmeablePoints }: RewardCardProps) => {
  const imgUrl = REWARD_IMAGE_BASE_URL + reward.imageReference;
  return (
    <ElementContainer className="reward-card">
      <div className={!isMyReward ? 'reward-card__img__container' : 'my-reward-card__img__container'}>
        {
          reward.imageReference ?
            <img src={imgUrl} alt="reward-image" className="reward-card__img" />
            :
            <BiGift className="reward-card__img-not-found" />
        }
      </div>

      <div className="reward-card__description">
        {
          isMyReward ?
            <>
              <h2 className="my-reward-card__description__reward-name">
                {reward.name}
              </h2>
              <div className="my-reward-card__description__points">
                <h2 className="my-reward-card__description__points__number">{reward.points}</h2>
                <BiCoin size={24} color={PRIMARY_COLOR} />
              </div>
            </>
            :
            <>
              <div className="reward-card__description__header">
                <h2 className="reward-card__description__header__title">{reward.name}</h2>
                <div className="reward-card__description__header__points">
                  <h2 className="reward-card__description__header__points__number">{reward.points}</h2>
                  <BiCoin size={32} color={PRIMARY_COLOR} />
                </div>
              </div>
              <p className="reward-card__description__text">{reward.description}</p>
              <div className="reward-card__footer">
                <Button title="Reedem" className="reward-card__footer__reedem-button" />
              </div>
            </>
        }
      </div>
    </ElementContainer>

  );
};

export default RewardCard;
