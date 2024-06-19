import { useState } from "react";
import { MyReward } from "../../../models/RewardsData";
import { LuInfo } from "react-icons/lu";
import Modal from "../../../components/modal/Modal";
import MyRewardInfoCard from "../myRewardInfoCard/MyRewardInfoCard";
import { buildRewardImageURL } from "../../../utils/imageBuilder";
import { backgroundSecondary, borderRadius0_5, borderRadius1, flexCenter, fullSize, fullWidth, textColor } from "../../../styles/index.css";
import { myRewardCardImageStyle, myRewardCardOverlayStyle, myRewardCardStyle } from "./MyRewardCard.css";


type MyRewardCardProps = {
  myReward: MyReward;
};

const MyRewardCard = ({ myReward }: MyRewardCardProps) => {
  const [showMyRewardModal, setShowMyRewardModal] = useState<boolean>(false);

  const closeModal = () => {
    setShowMyRewardModal(false);
  }

  const openModal = () => {
    setShowMyRewardModal(true)
  }

  return (
    <div className={`${borderRadius1} ${myRewardCardStyle}`} onClick={openModal}>
      {
        showMyRewardModal && 
        <Modal closeModal={closeModal}>
          <MyRewardInfoCard reward={myReward}/>
        </Modal>
      }
      <img 
        src={buildRewardImageURL(myReward.reward.imageReference)} 
        alt="reward-image" 
        className={`${borderRadius0_5} ${fullWidth} ${backgroundSecondary} ${myRewardCardImageStyle}`}
      />
      <div className={`${fullSize} ${flexCenter} ${textColor} ${myRewardCardOverlayStyle}`}>
        <LuInfo size={48}/>
      </div>
    </div>
  );
};

export default MyRewardCard;
