import { useEffect, useState } from "react";
import { Reward } from "../models/RewardsData";
import { getRewards } from "../services/RewardsService";
import { GetRewardsResponse } from "../models/response/GetRewardsResponse";

const UseRewards = (page:number, size:number) => {
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0)

  useEffect(() => {
    const fetchRewards = async () => {
      setIsLoading(true);
      try {
        const response: GetRewardsResponse = await getRewards({page,size});
        setRewards((prevList) => page === 0 ? response.content : [...prevList,...response.content]);
        setTotalPages(response.totalPages);
      } catch (_) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRewards();
  }, [page,size]);

  return { rewards, isLoading, hasError, totalPages };
};

export default UseRewards;