import { useEffect, useState } from "react";
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
import { PRIMARY_COLOR, TABLET_WIDTH_SIZE } from "../../utils/constants";
import "./RewardsPage.css";
import Loader from "../../components/loader/Loader";

const RewardsPage = () => {
  const { rewards, isLoading: areRewardsLoading } = UseRewards(["points"]);
  const { userStats } = useUserStats();
  const { myRewards,isLoading: areMyRewardsLoading, setFetchAgain } = UseMyRewards();
  const [showMyRewardsOnMobile, setShowMyRewardsOnMobile] =
    useState<boolean>(false);
  const [redeemError, setRedeemError] = useState<boolean>(false);
  

  useEffect(() => {
    const handleResize = () => {
        if(window.innerWidth > TABLET_WIDTH_SIZE){
            setShowMyRewardsOnMobile(false)
        }
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

  const handleRedeem = async (id:number) => {
    try {
      await redeemReward(id);
      setFetchAgain(prevState => !prevState)
    } catch (error) {
      setRedeemError(true);
    }
  };


  if (showMyRewardsOnMobile) {
    return (
      <div className="rewards-page__my-rewards__mobile">
        <Header className="rewards-page__my-rewards__mobile__header">
          <h2 className="rewards-page__my-rewards__mobile__header__title">
            My Rewards
          </h2>
          <ElementContainer
            className="rewards-page__my-rewards__mobile__header__close-button"
            onClick={() => setShowMyRewardsOnMobile(false)}
          >
            <LuX size={32} color={PRIMARY_COLOR} />
          </ElementContainer>
        </Header>
        {
          areMyRewardsLoading ? 
          <Loader/>
          :
          <MyRewardsList
            list={myRewards}
            className="rewards-page__my-rewards__list__mobile"
          />
        }
      </div>
    );
  }

  return (
    <div className="rewards-page">
      {rewards && (
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
                <LuGift size={32} color={PRIMARY_COLOR} />
              </ElementContainer>
              <ElementContainer className="rewards-page__all-rewards__header__container__redeem-points">
                <h2 className="rewards-page__all-rewards__header__container__redeem-points__count">
                  {userStats?.redeemablePoints}
                </h2>
                <BiCoin size={32} color={PRIMARY_COLOR} />
              </ElementContainer>
            </div>
          </Header>
          {
            areRewardsLoading ? 
            <Loader/>
            :
            <RewardsList
              list={rewards}
              className="rewards-page__all-rewards__list"
              rewardCardRedeemReward={handleRedeem}
              redeemablePoints={userStats?.redeemablePoints}
            />
          }
        </div>
      )}
      <div className="rewards-page__my-rewards">
        <ElementContainer className="rewards-page__my-rewards__header">
          <h2>My Rewards</h2>
        </ElementContainer>
        {
          areMyRewardsLoading ? 
          <Loader/>
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
