import { useEffect, useState } from 'react';
import { getUsersStats } from '../services/UsersService';
import { UserStats } from '../models/UserData';

const useUserStats = () => {
  const [userStats, setUserStats] = useState<UserStats>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserStats = async () => {
        setIsLoading(true);
        try {
          const response:UserStats = await getUsersStats();
          setUserStats(response);
        } catch (error) {
            setHasError(true);
        }finally{
            setIsLoading(false);
        }
    }

    fetchUserStats();
  },[])

  return { userStats, isLoading, hasError };
};

export default useUserStats;
