import UseRewards from "../../hooks/useRewards";
import MenuBar from "../../layouts/menuBar/MenuBar";
import "./RewardsPage.css";
import RewardsList from "../../layouts/rewardsPage/rewardsList/RewardsList";
import { BiCoin } from "react-icons/bi";
import { PRIMARY_COLOR } from "../../utils/constants";
import useUserStats from "../../hooks/useUserStats";
import ElementContainer from "../../components/elementContainer/ElementContainer";
import UseMyRewards from "../../hooks/useMyRewards";
import { reedemReward } from "../../services/RewardsService";

const RewardsPage = () => {

  const {
    rewards,
    isLoading: areRewardsLoading,
    hasError: hasRewardsError,
  } = UseRewards(['points']);
  const {userStats} = useUserStats();
  const {myRewards} = UseMyRewards();

  const handleReedem = async () => {
    try {
      await reedemReward(10);

    } catch (error) {
      console.log('something went wrong!')
    }
  }

  return (
    <div className="rewards-page__layout">
      <MenuBar />
      <div className="rewards-page">
        {
          rewards && 
            <div className="rewards-page__all-rewards">
              <div className="rewards-page__all-rewards__header">
                <h2 className="rewards-page__all-rewards__header__title">Rewards</h2>
                <ElementContainer className="rewards-page__all-rewards__header__reedem-points">
                  <h2 className="rewards-page__all-rewards__header__reedem-points__count">{userStats?.redeemablePoints}</h2>
                  <BiCoin size={32} color={PRIMARY_COLOR}/>
                </ElementContainer>
              </div>
              <RewardsList list={rewards} className="rewards-page__all-rewards__list"/>
            </div>
        }
        <div className="rewards-page__my-rewards">
          <ElementContainer className="rewards-page__my-rewards__header">
            <h2>My Rewards</h2>
          </ElementContainer>
          <RewardsList list={myRewards} className="rewards-page__my-rewards__list" isMyRewardCard reedemablePoints={userStats?.redeemablePoints}/>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
