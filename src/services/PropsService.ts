import { PropModel } from "../models/PropsData";
import { GetPropsRequestQuery } from "../models/request/GetPropsRequest";
import { PostPropRequest } from "../models/request/PostPropRequest";
import { PostPropResponse } from "../models/response/PostPropResponse";
import { PageableResponse } from "../models/response/Response";
import { axiosInterceptor } from "./AxiosInterceptor";

export const fetchProps = async (params: GetPropsRequestQuery): Promise<PageableResponse<PropModel>> => {
  const response = await axiosInterceptor.get<PageableResponse<PropModel>>('/props', {
    params
  });
  return response.data;
};

export const addProp = async (newPropRequestBody: PostPropRequest): Promise<PostPropResponse> => {
  const response = await axiosInterceptor.post<PostPropResponse>('/props',newPropRequestBody);

  return response.data;
}