import { useEffect, useState } from 'react';
import { Response } from '../models/response/Response';
import { PropsUser } from '../models/PropsData';
import { fetchActiveUsers } from '../services/UsersService';

const useActiveUsers = (page: number, size: number, sort: string, search:string) => {
  const [usersList, setUsersList] = useState<PropsUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      setIsLoading(true);
      try {
        const response: Response<PropsUser> = await fetchActiveUsers({page, size, sort, search});
        if(page === 0){
          setUsersList(response.content);
        }else{
          setUsersList((prevList) => [...prevList,...response.content]);
        }
        setTotalPages(response.totalPages);
      } catch (error:any) {
        setHasError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchList();

  }, [page, sort, size]); 

  return { usersList, isLoading, hasError, totalPages };
};

export default useActiveUsers;
