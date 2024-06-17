import { useEffect, useState } from "react";
import { MyReward, Reward } from "../models/RewardsData";
import { getMyRewards } from "../services/RewardsService";
import { PageableResponse } from "../models/response/PageableResponse";

const UseMyRewards = () => {
  const [myRewardsResponse, setMyRewardsResponse] = useState<MyReward[]>([])
  const [myRewards, setMyRewards] = useState<Reward[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        setIsLoading(true);
        const response: PageableResponse<MyReward>  = await getMyRewards({});
        setMyRewardsResponse(response.content);
        setMyRewards(myRewardsResponse.map(reward => reward.reward));
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRewards();
  }, []);

  return { myRewards, isLoading, hasError };
};

export default UseMyRewards;