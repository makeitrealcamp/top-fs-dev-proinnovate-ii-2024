import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export const tasksAPI = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
  },
  timeout: 10000,
});
