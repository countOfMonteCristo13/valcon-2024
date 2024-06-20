import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import UseRewards from "../../hooks/useRewards";
import UseMyRewards from "../../hooks/useMyRewards";
import useUserStats from "../../hooks/useUserStats";
import RewardsList from "../../layouts/rewardsPage/rewardsList/RewardsList";
import MyRewardsList from "../../layouts/rewardsPage/myRewardsList/MyRewardsList";
import Header from "../../components/header/Header";
import Loader from "../../components/loader/Loader";
import ToggleThemeButton from "../../components/toggleThemeButton/ToggleThemeButton";
import { Toaster } from "react-hot-toast";
import { redeemReward } from "../../services/RewardsService";
import { BiCoin } from "react-icons/bi";
import { LuGift, LuX } from "react-icons/lu";
import { ToastType, handleToast } from "../../services/ToastService";
import { allRewardsHeaderButtonStyle, allRewardsHeaderStyle, rewardsHeaderTitleStyle, allRewardsListStyle, allRewardsStyle, headerButtonStyle, myRewardsHeaderStyle, myRewardsListStyle, myRewardsMobileStyle, myRewardsStyle, rewardsPageStyle } from "./RewardsPageStyle.css";
import { backgroundSecondary, backgroundTertiary, borderRadius1, box, directionColumn, flex, flex1, flexAlignCenter, flexWrap, gap0_3, gap0_5, gap1, heightScreen, hideScrollBar, justifyBetween, padding0_5_1, padding1, textColor, zIndex950 } from "../../styles/index.css";
import InfiniteScrollWrapper from "../../components/infiniteScrollWrapper/InfiniteScrollWrapper";

const RewardsPage = () => {
  const {theme, toggleTheme} = useTheme();
  const [page,setPage]= useState<number>(0)
  const size = 10;
  const { rewards, isLoading: areRewardsLoading, totalPages } = UseRewards(page, size);
  const { userStats } = useUserStats();
  const { myRewards, isLoading: areMyRewardsLoading, setFetchAgain } = UseMyRewards();
  const [showMyRewardsOnMobile, setShowMyRewardsOnMobile] =
    useState<boolean>(false);

    console.log(totalPages);

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
    <div className={`${flex1} ${rewardsPageStyle} ${textColor}`}>
      <Toaster position="top-center" reverseOrder={false} />

      <div className={`${hideScrollBar} ${allRewardsStyle} ${backgroundSecondary}`}>
        <Header className={`${flexAlignCenter} ${justifyBetween} ${padding1} ${allRewardsHeaderStyle}`}>
          <h2 className={rewardsHeaderTitleStyle}>
            Rewards
          </h2>
          <div className={`${flexAlignCenter} ${gap0_5}`}>
            <ToggleThemeButton theme={theme} toggleTheme={toggleTheme}/>
            <div
              className={`${box} ${headerButtonStyle} ${allRewardsHeaderButtonStyle}`}
              onClick={() => setShowMyRewardsOnMobile(true)}
            >
              <LuGift size={32} />
            </div>
            <div className={`${box} ${padding0_5_1} ${borderRadius1} ${flexAlignCenter} ${gap0_3}`}>
              <h2>
                {userStats?.redeemablePoints}
              </h2>
              <BiCoin size={32} />
            </div>
          </div>
        </Header>
          <>
            {showMyRewardsOnMobile && (
              <div className={`${backgroundSecondary} ${zIndex950} ${myRewardsMobileStyle}`}>
                <Header className={`${flexAlignCenter} ${padding1} ${justifyBetween}`}>
                  <h2 className={rewardsHeaderTitleStyle}>My Rewards</h2>
                    <div
                      className={`${box} ${headerButtonStyle}`}
                      onClick={() => setShowMyRewardsOnMobile(false)}
                    >
                      <LuX size={32} />
                    </div>
                </Header>
                {areMyRewardsLoading ? (
                  <Loader />
                ) : (
                  <MyRewardsList
                    list={myRewards}
                    className={`${flex} ${flexWrap} ${gap1} ${padding1} ${backgroundTertiary}`}
                  />
                )}
              </div>
            )}
            <InfiniteScrollWrapper 
              listLength={rewards.length} 
              nextFuntion={() => setPage(prevPage => prevPage + 1)} 
              hasMore={page < totalPages}
              refreshFuntion={() => setPage(0)}
            >
              <RewardsList
                list={rewards}
                className={`${flex} ${directionColumn} ${gap1} ${allRewardsListStyle} ${backgroundSecondary}`}
                rewardCardRedeemReward={handleRedeem}
                redeemablePoints={userStats?.redeemablePoints}
              />
            </InfiniteScrollWrapper>
          </>
      </div>
      <div className={`${hideScrollBar} ${myRewardsStyle}`}>
        <div className={myRewardsHeaderStyle}>
          <h2>My Rewards</h2>
        </div>
        {
          areMyRewardsLoading ?
            <Loader />
            :
            <MyRewardsList
              list={myRewards}
              className={`${flex} ${flexWrap} ${gap1} ${myRewardsListStyle}`}
            />
        }
      </div>
    </div>
  );
};

export default RewardsPage;
