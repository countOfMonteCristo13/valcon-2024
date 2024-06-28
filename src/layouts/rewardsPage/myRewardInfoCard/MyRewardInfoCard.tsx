import { BiCoin } from 'react-icons/bi';
import { MyReward } from '../../../models/RewardsData'
import { buildRewardImageURL } from '../../../utils/imageBuilder';
import { flex1, flexAlignCenter, fullHeight, gap0_3, justifyBetween, textColor } from '../../../styles/index.css';
import { cardContainer, cardDescription, cardImages, cardTextContainer } from '../RewardsCardStyle.css';
import { myRewardInfoCardDescriptionStyle, myRewardInfoCardImageStyle } from './MyRewardInfoCardStyle.css';
import { useTheme } from '../../../context/ThemeContext';

type MyRewardInfoCard = {
  reward: MyReward;
}

const MyRewardInfoCard = ({reward} : MyRewardInfoCard) => {
  const {theme} = useTheme();

  return (
    <div className={cardContainer}>
      <div className={`${flex1} ${fullHeight}`}>
        <img src={buildRewardImageURL(theme,reward.reward.imageReference)} alt="reward-image" className={`${cardImages} ${myRewardInfoCardImageStyle}`}/>
      </div>

      <div className={`${cardDescription} ${myRewardInfoCardDescriptionStyle}`}>
        <div className={cardTextContainer}>
          <h2>
            {reward.reward.name}
          </h2>
        </div>
        <p className={cardTextContainer}>{reward.reward.description}</p>
        <div className={`${cardTextContainer} ${flexAlignCenter} ${justifyBetween}`}>
          <div className={`${flexAlignCenter} ${gap0_3} ${textColor}`}>
            <h2>
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