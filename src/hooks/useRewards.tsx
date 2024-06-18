import { useEffect, useState } from "react";
import { Reward } from "../models/RewardsData";
import { getRewards } from "../services/RewardsService";
import { GetRewardsResponse } from "../models/response/GetRewardsResponse";

const UseRewards = (sort:string[]) => {
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchRewards = async (sort:string[]) => {
      try {
        setIsLoading(true);
        const response: GetRewardsResponse = await getRewards(sort);
        setRewards(response.content);
      } catch (_) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRewards(sort);
  }, []);

  return { rewards, isLoading, hasError };
};

export default UseRewards;