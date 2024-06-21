import { useTheme } from "../../../context/ThemeContext";
import { BiCoin } from "react-icons/bi";
import { Reward } from "../../../models/RewardsData";
import Button from "../../../components/button/Button";
import { buildRewardImageURL } from "../../../utils/imageBuilder";
import { backgroundSecondary, borderRadius0_5, borderRadius1, box, flex, flex1, flexAlignCenter, fullHeight, fullWidth, gap0_3, justifyBetween, lineHeight1_2, padding0_5, padding1, textColor } from "../../../styles/index.css";
import { cardContainer, cardDescription, cardImages } from "../RewardsCardStyle.css";
import { rewardCardDescriptionHeaderTitleStyle, rewardCardPointsIcon, rewardCardPointsNumber, rewardCardRedeemButton, rewardCardStyle } from "./RewardCardStyle.css";

type RewardCardProps = {
  reward: Reward;
  reedmeablePoints?: number;
  redeemReward: (id:number) => void;
};

const RewardCard = ({ reward, reedmeablePoints, redeemReward }: RewardCardProps) => {
  const {theme} = useTheme();

  return (
    <div className={`${box} ${padding1} ${borderRadius1} ${cardContainer} ${rewardCardStyle} ${fullWidth}`}>
      <div className={flex1}>
      <img src={buildRewardImageURL(theme, reward.imageReference)} alt="reward-image" className={cardImages} />
      </div>

      <div className={`${cardDescription} ${justifyBetween} ${fullHeight}`}>
        <div className={`${flexAlignCenter} ${justifyBetween} ${fullWidth} ${padding1} ${backgroundSecondary} ${borderRadius0_5}`}>
          <h2 className={rewardCardDescriptionHeaderTitleStyle}>
            {reward.name}
          </h2>
        </div>
        <p className={`${padding1} ${backgroundSecondary} ${borderRadius0_5}`}>{reward.description}</p>
        <div className={`${flex} ${justifyBetween}`}>
          <div className={`${flexAlignCenter} ${lineHeight1_2} ${backgroundSecondary} ${padding0_5} ${borderRadius0_5} ${textColor} ${gap0_3}`}>
            <h2 className={rewardCardPointsNumber}>
              {reward.points}
            </h2>
            <BiCoin size={32} className={rewardCardPointsIcon}/>
          </div>
          <Button
            title="Redeem"
            className={rewardCardRedeemButton}
            onClick={() => redeemReward(reward.id)}
            disabled={reedmeablePoints! < reward.points}
          />
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
