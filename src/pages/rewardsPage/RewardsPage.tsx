import { useState } from "react";
import ElementContainer from "../../components/elementContainer/ElementContainer";
import RewardsList from "../../layouts/rewardsPage/rewardsList/RewardsList";
import MyRewardsList from "../../layouts/rewardsPage/myRewardsList/MyRewardsList";
import Header from "../../components/header/Header";
import UseRewards from "../../hooks/useRewards";
import UseMyRewards from "../../hooks/useMyRewards";
import useUserStats from "../../hooks/useUserStats";
import { redeemReward } from "../../services/RewardsService";
import { BiCoin } from "react-icons/bi";
import { LuGift, LuX } from "react-icons/lu";
import Loader from "../../components/loader/Loader";
import { Toaster } from "react-hot-toast";
import { ToastType, handleToast } from "../../services/ToastService";
import "./RewardsPage.css";

const RewardsPage = () => {
  const { rewards, isLoading: areRewardsLoading } = UseRewards(["points"]);
  const { userStats } = useUserStats();
  const { myRewards, isLoading: areMyRewardsLoading, setFetchAgain } = UseMyRewards();
  const [showMyRewardsOnMobile, setShowMyRewardsOnMobile] =
    useState<boolean>(false);

  const handleRedeem = async (id: number) => {
    try {
      await redeemReward(id);
      handleToast(ToastType.Success, 'Reward successfully redeemed!', 2000)
      setFetchAgain(prevState => !prevState)
    } catch (error) {
      handleToast(ToastType.Error, 'Something went wrong! Try again later.', 2000)
    }
  };

  return (
    <div className="rewards-page">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="rewards-page__all-rewards">
        <Header className="rewards-page__all-rewards__header">
          <h2 className="rewards-page__all-rewards__header__title">
            Rewards
          </h2>
          <div className="rewards-page__all-rewards__header__container">
            <ElementContainer
              className="rewards-page__all-rewards__header__container__my-rewards-button"
              onClick={() => setShowMyRewardsOnMobile(true)}
            >
              <LuGift size={32} />
            </ElementContainer>
            <ElementContainer className="rewards-page__all-rewards__header__container__redeem-points">
              <h2 className="rewards-page__all-rewards__header__container__redeem-points__count">
                {userStats?.redeemablePoints}
              </h2>
              <BiCoin size={32} />
            </ElementContainer>
          </div>
        </Header>

        {(!rewards || areRewardsLoading) ? (
          <Loader />
        ) : (
          <>
            {showMyRewardsOnMobile && (
              <div className="rewards-page__my-rewards__mobile">
                <Header className="rewards-page__my-rewards__mobile__header">
                  <h2 className="rewards-page__my-rewards__mobile__header__title">My Rewards</h2>
                  <ElementContainer
                    className="rewards-page__my-rewards__mobile__header__close-button"
                    onClick={() => setShowMyRewardsOnMobile(false)}
                  >
                    <LuX size={32} />
                  </ElementContainer>
                </Header>
                {areMyRewardsLoading ? (
                  <Loader />
                ) : (
                  <MyRewardsList
                    list={myRewards}
                    className="rewards-page__my-rewards__list__mobile"
                  />
                )}
              </div>
            )}
            <RewardsList
              list={rewards}
              className="rewards-page__all-rewards__list"
              rewardCardRedeemReward={handleRedeem}
              redeemablePoints={userStats?.redeemablePoints}
            />
          </>
        )}
      </div>
      <div className="rewards-page__my-rewards">
        <ElementContainer className="rewards-page__my-rewards__header">
          <h2>My Rewards</h2>
        </ElementContainer>
        {
          areMyRewardsLoading ?
            <Loader />
            :
            <MyRewardsList
              list={myRewards}
              className="rewards-page__my-rewards__list"
            />
        }
      </div>
    </div>
  );
};

export default RewardsPage;
