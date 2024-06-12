import { GetPropsRequestBody } from "../models/request/GetPropsRequest";
import { PostPropRequest } from "../models/request/PostPropRequest";
import { GetPropsResponse } from "../models/response/GetPropsResponse";
import { PostPropResponse } from "../models/response/PostPropResponse";
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

export const addProp = async (newPropRequestBody: PostPropRequest): Promise<PostPropResponse> => {
  const response = await axiosInterceptor.post<PostPropResponse>('/props',newPropRequestBody);

  return response.data;
}