import { UserStats } from "../models/UserData";
import { axiosInterceptor } from "./AxiosInterceptor";

export const fetchUserStats = async (): Promise<UserStats> => {
  const response = await axiosInterceptor.get<UserStats>("/user-stats");

  return response.data;
};