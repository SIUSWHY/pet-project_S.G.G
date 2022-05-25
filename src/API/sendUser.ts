import axios, { AxiosResponse } from 'axios';

const sendUser = (response: any): Promise<AxiosResponse<string[]>> =>
  axios.post('http://127.0.0.1:3000/createNewUser', response, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export default sendUser;
