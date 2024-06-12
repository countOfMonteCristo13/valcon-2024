import { PropsUser } from "../models/PropsData";
import { GetUsersRequestQuery } from "../models/request/GetUsersRequest";
import { Response } from "../models/response/Response";
import { axiosInterceptor } from "./AxiosInterceptor";

export const fetchActiveUsers = async ({page,size,sort,search}: GetUsersRequestQuery): Promise<Response<PropsUser>> => {
    const response = await axiosInterceptor.get<Response<PropsUser>>('/users', {
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