import { GetPropsRequestBody } from "../models/request/GetPropsRequest";
import { GetPropsResponse } from "../models/response/GetPropsResponse";
import { axiosInterceptor } from "./AxiosInterceptor";

export const fetchProps = async ({page,size,sort}: GetPropsRequestBody): Promise<GetPropsResponse> => {
  const response = await axiosInterceptor.get<GetPropsResponse>('/props', {
    params:{
    page,
    size,
    sort,
    }
  });
  return response.data;
};