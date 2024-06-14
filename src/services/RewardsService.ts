import { RandomReward, Reward } from "../models/RewardsData";
import { GetRequestQuery } from "../models/request/GetRequestQuery";
import { GetRewardsResponse } from "../models/response/GetRewardsResponse";
import { axiosInterceptor } from "./AxiosInterceptor";

export const getRandomRewards = async (): Promise<RandomReward[]> => {
  const response = await axiosInterceptor.get<RandomReward[]>(
    "/rewards/random"
  );

  return response.data;
};

export const getRewards = async (sort:string[]): Promise<GetRewardsResponse> => {
  const response = await axiosInterceptor.get<GetRewardsResponse>("/rewards",
    {
      params:{
        sort,
        active: 'ACTIVE'
      }
    }
  );

  return response.data;
};


export const getMyRewards = async (params: GetRequestQuery): Promise<Reward> => {
  const response = await axiosInterceptor.get<Reward>('/my-rewards',{
    params
  })

  return response.data;
}