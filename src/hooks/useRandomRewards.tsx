import { useEffect, useState } from "react";
import { RandomReward } from "../models/RewardsData";
import { getRandomRewards } from "../services/RewardsService";

const UseRandomRewards = () => {
  const [randomRewards, setRandomRewards] = useState<RandomReward[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchRandomRewards = async () => {
      try {
        setIsLoading(true);
        const response: RandomReward[] = await getRandomRewards();
        setRandomRewards(response);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRandomRewards();
  }, []);

  return { randomRewards, isLoading, hasError };
};

export default UseRandomRewards;