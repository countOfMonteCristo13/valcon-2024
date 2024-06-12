import { PropsUser } from "../models/PropsData";
import { GetUsersRequestQuery } from "../models/request/GetUsersRequest";
import { Response } from "../models/response/Response";
import { axiosInterceptor } from "./AxiosInterceptor";

export const fetchUsers = async ({page,size,sort,active,search}: GetUsersRequestQuery): Promise<Response<PropsUser>> => {
    const response = await axiosInterceptor.get<Response<PropsUser>>('/users', {
        params:{
        page,
        size,
        sort,
        active,
        search
        }
      });
      return response.data;
}