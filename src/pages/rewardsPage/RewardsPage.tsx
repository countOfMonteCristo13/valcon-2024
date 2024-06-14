import RewardCard from "../../components/rewardCard/RewardCard";
import UseRewards from "../../hooks/useRewards";
import MenuBar from "../../layouts/menuBar/MenuBar";
import "./RewardsPage.css";

const RewardsPage = () => {

  const {
    rewards,
    isLoading: areRewardsLoading,
    hasError: hasRewardsError,
  } = UseRewards();

  return (
    <div className="rewards-page__layout">
      <MenuBar />
      <div className="rewards-page">
        {rewards && (
          <div className="rewards-page__all-rewards">
            {rewards.map((reward) => (
              <RewardCard reward={reward} />
            ))}
          </div>
        )}
        <div className="rewards-page__my-rewards">cao</div>
        <div className="rewards-page__some-rewards">hello</div>
      </div>
    </div>
  );
};

export default RewardsPage;
