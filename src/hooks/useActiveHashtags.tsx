import { useEffect, useState } from 'react';
import { PageableResponse } from '../models/response/PageableResponse';
import { Hashtag } from '../models/PropsData';
import { fetchActiveHashtags } from '../services/HashtagsService';

const useActiveHashtags = (page: number, size: number, sort: string, search:string) => {
  const [activeHashtagsList, setActiveHashtagsList] = useState<Hashtag[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchList = async () => {
      setIsLoading(true);
      try {
        const response: PageableResponse<Hashtag> = await fetchActiveHashtags({page, size, sort, search});
        if(page === 0){
          setActiveHashtagsList(response.content);
        }else{
          setActiveHashtagsList((prevList) => [...prevList,...response.content]);
        }
        setTotalPages(response.totalPages);
      } catch (_) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (search.length > 1) {
      fetchList();
    } else {
      setActiveHashtagsList([]);
    }
    
  }, [page, sort, size, search]); 

  return { activeHashtagsList, isLoading, hasError, totalPages };
};

export default useActiveHashtags;
