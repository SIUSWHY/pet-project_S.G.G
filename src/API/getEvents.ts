import axios, { AxiosResponse } from 'axios';
import { axiosInstance } from '../../server/API';

const getEvents = (): Promise<AxiosResponse<string[]>> => axiosInstance.get('/events');

export default getEvents;
