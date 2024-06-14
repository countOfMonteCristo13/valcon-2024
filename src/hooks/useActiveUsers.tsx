import { useEffect, useState } from 'react';
import { PageableResponse } from '../models/response/Response';
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
        const response: PageableResponse<PropsUser> = await fetchActiveUsers({page, size, sort, search});
          setUsersList((prevList) => page === 0 ? response.content : [...prevList,...response.content]);
        setTotalPages(response.totalPages);
      } catch (error:any) {
        setHasError(error);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (search.length > 1) {
      fetchList();
    } else {
      setUsersList([]);
    }
    
  }, [page, sort, size, search]); 

  return { usersList, isLoading, hasError, totalPages };
};

export default useActiveUsers;
