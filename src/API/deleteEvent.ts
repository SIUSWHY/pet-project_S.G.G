import axios, { AxiosResponse } from 'axios';

const deleteEvent = (id: string): Promise<AxiosResponse<any>> =>
  axios.delete('http://127.0.0.1:3000/deleteEvent', { data: { _id: id } });

export default deleteEvent;
