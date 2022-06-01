import axios, { AxiosResponse } from 'axios';

const getEvents = (): Promise<AxiosResponse<string[]>> => axios.get('http://127.0.0.1:3000/events');

export default getEvents;
