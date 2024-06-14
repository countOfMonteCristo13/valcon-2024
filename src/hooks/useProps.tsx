import { useEffect, useState } from 'react';
import { PageableResponse } from '../models/response/PageableResponse';
import { fetchProps } from '../services/PropsService';
import { PropModel } from '../models/PropsData';

const useProps = (page: number, size: number, sort: string) => {
  const [propsList, setPropsList] = useState<PropModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      setIsLoading(true);
      try {
        const response: PageableResponse<PropModel> = await fetchProps({page, size, sort});
        setPropsList((prevList) => page === 0 ? response.content : [...prevList,...response.content]);
        setTotalPages(response.totalPages);
      } catch (error:any) {
        setHasError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchList();

  }, [page, sort, size]); 

  return { propsList, isLoading, hasError, totalPages };
};

export default useProps;
