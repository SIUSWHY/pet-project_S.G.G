import axios, { AxiosResponse } from 'axios';

const deleteUserById = (usersId: string[]): Promise<AxiosResponse<any>> =>
  axios.delete('http://127.0.0.1:3000/deleteUsers', { data: { _id: usersId } });

export default deleteUserById;
