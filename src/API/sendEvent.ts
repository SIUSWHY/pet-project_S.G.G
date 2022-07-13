import { AxiosResponse } from 'axios';
import { axiosInstance } from '../../server/API';

const sendEvent = (eventData: any): Promise<AxiosResponse<string[]>> =>
  axiosInstance.post('/createNewEvent', eventData);

export default sendEvent;
