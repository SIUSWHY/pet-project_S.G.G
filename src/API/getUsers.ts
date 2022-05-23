import axios from 'axios';

const getUsers = () => axios.get('http://127.0.0.1:3000/users');

export default getUsers;
