import { useState } from "react";
import { MyReward } from "../../../models/RewardsData";
import { LuInfo } from "react-icons/lu";
import Modal from "../../../components/modal/Modal";
import MyRewardInfoCard from "../myRewardInfoCard/MyRewardInfoCard";
import { buildRewardImageURL } from "../../../utils/imageBuilder";
import { backgroundSecondary, borderRadius0_5, borderRadius1, cursorPointer, flexCenter, fullHeight, fullSize, fullWidth, textColor } from "../../../styles/index.css";
import { myRewardCardImageStyle, myRewardCardOverlayStyle, myRewardCardStyle } from "./MyRewardCard.css";


type MyRewardCardProps = {
  myReward: MyReward;
  theme:boolean
};

const MyRewardCard = ({ myReward,theme }: MyRewardCardProps) => {
  const [showMyRewardModal, setShowMyRewardModal] = useState<boolean>(false);

  const closeModal = () => {
    setShowMyRewardModal(false);
  }

  const openModal = () => {
    setShowMyRewardModal(true)
  }

  return (
    <div className={`${borderRadius1} ${cursorPointer} ${myRewardCardStyle}`} onClick={openModal}>
      {
        showMyRewardModal && 
        <Modal closeModal={closeModal}>
          <MyRewardInfoCard reward={myReward}/>
        </Modal>
      }
      <img 
        src={buildRewardImageURL(theme,myReward.reward.imageReference)} 
        alt="reward-image" 
        className={`${borderRadius0_5} ${fullWidth} ${backgroundSecondary} ${fullHeight} ${myRewardCardImageStyle}`}
      />
      <div className={`${fullSize} ${flexCenter} ${textColor} ${myRewardCardOverlayStyle}`}>
        <LuInfo size={48}/>
      </div>
    </div>
  );
};

export default MyRewardCard;
