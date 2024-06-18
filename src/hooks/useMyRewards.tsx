import { useEffect, useState } from "react";
import { MyReward } from "../models/RewardsData";
import { getMyRewards } from "../services/RewardsService";
import { PageableResponse } from "../models/response/PageableResponse";

const UseMyRewards = () => {
  const [myRewards, setMyRewards] = useState<MyReward[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [fetchAgain,setFetchAgain] = useState<boolean>(false);


  useEffect(() => {
    const fetchRewards = async () => {
      try {
        setIsLoading(true);
        const response: PageableResponse<MyReward> = await getMyRewards({});
        setMyRewards(response.content);
      } catch (_) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRewards();
  }, [fetchAgain]);

  return { myRewards, isLoading, hasError, setFetchAgain};
};

export default UseMyRewards;
