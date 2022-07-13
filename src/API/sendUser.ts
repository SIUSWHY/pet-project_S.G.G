import { AxiosResponse } from 'axios';
import { axiosInstance } from '../../server/API';

const sendUser = (response: any): Promise<AxiosResponse<string[]>> =>
  axiosInstance.post('/createNewUser', response, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export default sendUser;
