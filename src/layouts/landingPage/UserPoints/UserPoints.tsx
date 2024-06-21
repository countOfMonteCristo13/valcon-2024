import Accordion from "../../../components/accordion/Accordion";
import useUserStats from "../../../hooks/useUserStats"


const UserPoints = () => {

    const {userStats} = useUserStats();

  return (
    <Accordion title="Your Points">
        <div>
            {userStats?.totalRedeemablePoints}
        </div>
    </Accordion>
  )
}

export default UserPoints
