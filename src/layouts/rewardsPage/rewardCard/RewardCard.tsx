import { BiCoin } from "react-icons/bi";
import { Reward } from "../../../models/RewardsData";
import { PRIMARY_COLOR, TERTIARY_COLOR } from "../../../utils/constants";
import Button from "../../../components/button/Button";
import ElementContainer from "../../../components/elementContainer/ElementContainer";
import { LuGift } from "react-icons/lu";
import "./RewardCard.css";

type RewardCardProps = {
  reward: Reward;
  reedmeablePoints?: number;
  redeemReward: (id:number) => void;
};

const REWARD_IMAGE_BASE_URL = import.meta.env.VITE_REWARD_IMAGE_BASE_URL;

const RewardCard = ({ reward, reedmeablePoints, redeemReward }: RewardCardProps) => {
  const imgUrl = REWARD_IMAGE_BASE_URL + reward.imageReference;

  return (
    <ElementContainer className="reward-card">
      <div className="reward-card__img__container">
        {reward.imageReference ? (
          <img src={imgUrl} alt="reward-image" className="reward-card__img" />
        ) : (
          <LuGift
            className="reward-card__img-not-found"
            color={TERTIARY_COLOR}
          />
        )}
      </div>

      <div className="reward-card__description">
        <div className="reward-card__description__header">
          <h2 className="reward-card__description__header__title">
            {reward.name}
          </h2>
        </div>
        <p className="reward-card__description__text">{reward.description}</p>
        <div className="reward-card__footer">
          <div className="reward-card__description__footer__points">
            <h2 className="reward-card__description__footer__points__number">
              {reward.points}
            </h2>
            <BiCoin size={32} color={PRIMARY_COLOR} className="reward-card__description__footer__points__icon"/>
          </div>
          <Button
            title="Redeem"
            className="reward-card__footer__redeem-button"
            onClick={() => redeemReward(reward.id)}
            disabled={reedmeablePoints! < reward.points}
          />
        </div>
      </div>
    </ElementContainer>
  );
};

export default RewardCard;
