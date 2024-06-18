import { MyReward, RandomReward, Reward } from "../models/RewardsData";
import { GetRequestQuery } from "../models/request/GetRequestQuery";
import { PageableResponse } from "../models/response/PageableResponse";
import { axiosInterceptor } from "./AxiosInterceptor";

export const getRandomRewards = async (): Promise<RandomReward[]> => {
  const response = await axiosInterceptor.get<RandomReward[]>(
    "/rewards/random"
  );

  return response.data;
};

export const getRewards = async (sort:string[]): Promise<PageableResponse<Reward>> => {
  const spreadedSort = sort.join(',');

  const response = await axiosInterceptor.get<PageableResponse<Reward>>("/rewards",
    {
      params:{
        sort:spreadedSort,
        status: 'ACTIVE'
      }
    }
  );
  return response.data;
};


export const getMyRewards = async (params: GetRequestQuery): Promise<PageableResponse<MyReward>> => {
  const response = await axiosInterceptor.get<PageableResponse<MyReward>>('/my-rewards',{
    params
  })

  return response.data;
}

export const redeemReward = async (id:number): Promise<MyReward> => {
  const response = await axiosInterceptor.post<MyReward>(`/user-rewards/${id}/redeem`);
  return response.data;
}