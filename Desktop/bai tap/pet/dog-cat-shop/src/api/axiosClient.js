import axios from 'axios';

const axiosClient = axios.create({
  baseURL: '/api', // proxy sẽ chuyển tiếp đến http://localhost:5000/api
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
