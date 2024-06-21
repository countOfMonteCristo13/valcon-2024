import { useEffect, useState } from 'react';
import { TrendingHashtag } from '../models/PropsData';
import { getTrendingHashtags } from '../services/HashtagsService';
import { GetTrendingHashtagsResponse } from '../models/response/GetTrendingHashtags';

const useTrendingHashtags = () => {
  const [trendingHashtagsList, setTrendingHashtagsList] = useState<TrendingHashtag[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchList = async () => {
      setIsLoading(true);
      try {
        const response: GetTrendingHashtagsResponse[] = await getTrendingHashtags();
        setTrendingHashtagsList(response)
      } catch (_) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchList();
    
  }, []); 

  return { trendingHashtagsList, isLoading, hasError };
};

export default useTrendingHashtags;
