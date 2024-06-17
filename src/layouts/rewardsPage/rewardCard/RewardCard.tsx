import { BiCoin } from "react-icons/bi";
import { Reward } from "../../../models/RewardsData";
import Button from "../../../components/button/Button";
import ElementContainer from "../../../components/elementContainer/ElementContainer";
import "./RewardCard.css";
import { buildRewardImageURL } from "../../../utils/imageBuilder";

type RewardCardProps = {
  reward: Reward;
  reedmeablePoints?: number;
  redeemReward: (id:number) => void;
};

const RewardCard = ({ reward, reedmeablePoints, redeemReward }: RewardCardProps) => {

  return (
    <ElementContainer className="reward-card">
      <div className="reward-card__img__container">
      <img src={buildRewardImageURL(reward.imageReference)} alt="reward-image" className="reward-card__img" />
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
            <BiCoin size={32} className="reward-card__description__footer__points__icon"/>
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
