import { useState } from "react";
import { MyReward } from "../../../models/RewardsData";
import { LuInfo } from "react-icons/lu";
import Modal from "../../../components/modal/Modal";
import MyRewardModal from "../myRewardModal/MyRewardModal";
import { buildRewardImageURL } from "../../../utils/imageBuilder";
import "./MyRewardCard.css";

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
    <div className="my-reward-card" onClick={openModal}>
      {
        showMyRewardModal && 
        <Modal closeModal={closeModal}>
          <MyRewardModal reward={myReward}/>
        </Modal>
      }
      <img src={buildRewardImageURL(myReward.reward.imageReference)} alt="reward-img" className="my-reward-card__img"/>
      <div className="my-reward-card__overlay">
        <LuInfo size={48}/>
      </div>
    </div>
  );
};

export default MyRewardCard;
