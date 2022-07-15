import { AxiosResponse } from 'axios';
import { axiosInstance } from '../../server/API';

const getLogs = (): Promise<AxiosResponse<string[]>> => axiosInstance.get('/logs');

export default getLogs;
