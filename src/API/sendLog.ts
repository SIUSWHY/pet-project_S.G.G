import { AxiosResponse } from 'axios';
import { axiosInstance } from '../../server/API';

const sendLog = (logData: any): Promise<AxiosResponse<string[]>> =>
  axiosInstance.post('/createLogs', logData);

export default sendLog;
