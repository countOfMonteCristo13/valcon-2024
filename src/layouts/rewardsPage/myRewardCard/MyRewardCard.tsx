import { useState } from "react";
import { MyReward } from "../../../models/RewardsData";
import { LuGift, LuInfo } from "react-icons/lu";
import Modal from "../../../components/modal/Modal";
import MyRewardModal from "../myRewardModal/MyRewardModal";
import "./MyRewardCard.css";

type MyRewardCardProps = {
  myReward: MyReward;
};

const MY_REWARD_IMAGE_BASE_URL = import.meta.env.VITE_REWARD_IMAGE_BASE_URL;

const MyRewardCard = ({ myReward }: MyRewardCardProps) => {
  const imgUrl = MY_REWARD_IMAGE_BASE_URL + myReward.reward.imageReference;
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
      {myReward.reward.imageReference ? (
        <img src={imgUrl} alt="reward-image" className="my-reward-card__img"/>
         ) : (
          <div className="my-reward-card__img-not-found__wrapper">
            <LuGift
              className="my-reward-card__img-not-found"
            />
          </div>
        )
      }
      <div className="my-reward-card__overlay">
        <LuInfo size={48}/>
      </div>
    </div>
  );
};

export default MyRewardCard;
