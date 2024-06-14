import { RandomReward } from "../models/RewardsData";
import { GetRewardsResponse } from "../models/response/GetRewardsResponse";
import { axiosInterceptor } from "./AxiosInterceptor";

export const getRandomRewards = async (): Promise<RandomReward[]> => {
  const response = await axiosInterceptor.get<RandomReward[]>(
    "/rewards/random"
  );

  return response.data;
};

export const getRewards = async (): Promise<GetRewardsResponse> => {
  const response = await axiosInterceptor.get<GetRewardsResponse>("/rewards");

  return response.data;
};