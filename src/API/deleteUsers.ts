import { AxiosResponse } from 'axios';
import { axiosInstance } from '../../server/API';

const deleteUserById = (usersId: string[]): Promise<AxiosResponse<any>> =>
  axiosInstance.delete('/deleteUsers', { data: { _id: usersId } });

export default deleteUserById;
