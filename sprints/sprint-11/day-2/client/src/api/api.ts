import axios from 'axios';

// export const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

function createAxiosInstance() {
  if (!import.meta.env.VITE_API_URL) {
    console.log('VITE_API_URL is missing in .env file');
    console.log('VITE_API_URL', import.meta.env.VITE_API_URL);
  }

  return axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export const api = createAxiosInstance();
