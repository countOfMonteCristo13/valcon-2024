import { useEffect, useState } from 'react';
import { GetPropsResponse } from '../models/response/GetPropsResponse';
import { fetchProps } from '../services/PropsService';
import { PropModel } from '../models/PropsData';

const useProps = (page: number, size: number, sort: string) => {
  const [propsList, setPropsList] = useState<PropModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      setIsLoading(true);
      try {
        const response: GetPropsResponse = await fetchProps({page, size, sort});
        setPropsList(response.content);
        setTotalElements(response.totalElements);
      } catch (error:any) {
        setHasError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchList();

  }, [page, sort, size]); 

  return { propsList, isLoading, hasError, totalElements };
};

export default useProps;
