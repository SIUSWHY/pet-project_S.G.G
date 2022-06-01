import axios, { AxiosResponse } from 'axios';

const sendEvent = (eventData: any): Promise<AxiosResponse<string[]>> =>
  axios.post('http://127.0.0.1:3000/createNewEvent', eventData);

export default sendEvent;
