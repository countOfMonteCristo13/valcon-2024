import Accordion from "../../../components/accordion/Accordion";
import Loader from "../../../components/loader/Loader";
import useUserStats from "../../../hooks/useUserStats"
import { flexColumn, fullWidth, gap0_5, paddingTop0_5 } from "../../../styles/index.css";
import UserPointsCard from "./UserPointsCard/UserPointsCard";


const UserPoints = () => {

    const {userStats, isLoading} = useUserStats();

  return (
    <Accordion title="Your Points">
            <div className={`${flexColumn} ${gap0_5} ${paddingTop0_5} ${fullWidth}`}>
              {isLoading ? 
                <Loader/> 
                : 
                <>
                  <UserPointsCard title="Redeemable points" points={userStats?.redeemablePoints!} />
                  <UserPointsCard title="Total redeemable points" points={userStats?.totalRedeemablePoints!} />
                  <UserPointsCard title="Giveable points" points={userStats?.giveablePoints!} />
                  <UserPointsCard title="Total giveable points" points={userStats?.totalGiveablePoints!} />
                  <UserPointsCard title="Total giveable unused points" points={userStats?.totalGiveableUnusedPoints!} />
                </>
            }
            </div>
    </Accordion>
  )
}

export default UserPoints
