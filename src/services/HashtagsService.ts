import { Hashtag } from "../models/PropsData";
import { GetHashtagsRequestQuery } from "../models/request/GetHashtagsRequest";
import { GetTrendingHashtagsResponse } from "../models/response/GetTrendingHashtags";
import { PageableResponse } from "../models/response/PageableResponse";
import { axiosInterceptor } from "./AxiosInterceptor";

export const fetchActiveHashtags = async ({page,size,sort,search}: GetHashtagsRequestQuery): Promise<PageableResponse<Hashtag>> => {
    const response = await axiosInterceptor.get<PageableResponse<Hashtag>>('/hashtags', {
        params:{
        page,
        size,
        sort,
        active: 'ACTIVE',
        search
        }
      });
      return response.data;
}

export const getTrendingHashtags = async ():Promise<GetTrendingHashtagsResponse[]> => {
  const response = await axiosInterceptor.get<GetTrendingHashtagsResponse[]>('/hashtags/trending');

  return response.data;
}