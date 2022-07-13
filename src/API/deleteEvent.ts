import { AxiosResponse } from 'axios';
import { axiosInstance } from '../../server/API/index';

const deleteEvent = (id: string): Promise<AxiosResponse<any>> =>
  axiosInstance.delete('/deleteEvent', { data: { _id: id } });

export default deleteEvent;
