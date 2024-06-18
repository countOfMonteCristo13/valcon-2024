import { PropsUser } from "../models/PropsData";
import { UserStats } from "../models/UserData";
import { GetUsersRequestQuery } from "../models/request/GetUsersRequest";
import { PageableResponse } from "../models/response/PageableResponse";
import { axiosInterceptor } from "./AxiosInterceptor";

export const fetchActiveUsers = async (params: GetUsersRequestQuery): Promise<PageableResponse<PropsUser>> => {
    const response = await axiosInterceptor.get<PageableResponse<PropsUser>>('/users', {
        params:{...params,active: 'ACTIVE'}
      });
      return response.data;
}

export const getUsersStats = async (): Promise<UserStats> => {
  const response = await axiosInterceptor.get<UserStats>('/user-stats');

  return response.data;
}