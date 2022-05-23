import axios, { AxiosResponse } from 'axios';

const getUsers = (): Promise<AxiosResponse<string[]>> => axios.get('http://127.0.0.1:3000/users');

export default getUsers;
