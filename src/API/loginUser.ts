import { axiosInstance } from '../../server/API/index';

const loginUser = (user: any) => axiosInstance.post<{ token: string }>('/loginUser', user);

export default loginUser;
