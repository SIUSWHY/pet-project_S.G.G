import axios from 'axios';
const { VUE_APP_SERVER_URL } = process.env;

export const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:3000/users',
});
