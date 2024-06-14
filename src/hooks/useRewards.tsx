import { useEffect, useState } from "react";
import { RandomReward } from "../models/RewardsData";
import { getRewards } from "../services/RewardsService";
import { GetRewardsResponse } from "../models/response/GetRewardsResponse";

const UseRewards = () => {
  const [rewards, setRewards] = useState<RandomReward[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        setIsLoading(true);
        const response: GetRewardsResponse = await getRewards();
        setRewards(response.content);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRewards();
  }, []);

  return { rewards, isLoading, hasError };
};

export default UseRewards;