import axios from 'axios';

const token = import.meta.env.VITE_SPOTIFY_TOKEN;

export const API = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  timeout: 5000,
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log({ error });
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    console.log('interceptor response');
    console.log({ response });

    const { url } = response.config;

    switch (url) {
      case '/posts':
        return {
          ...response,
          data: response.data.map((item: any) => ({
            id: item?.id,
            name: item?.title,
            body: item.body || null,
            releaseDate: Date.now(),
            artist: 'Unknown Artist',
          })),
        };
      case '/comments':
        return { ...response, data: response.data.slice(0, 5) };
      case '/todos':
        return { ...response, data: response.data.slice(0, 5) };
      case '/users':
        return { ...response, data: response.data.slice(0, 5) };
      default:
        return response;
    }
  },
  (error) => {
    console.log({ error });

    if (error.response?.status === 401) {
      console.log('unauthorized');
    }

    return Promise.reject(error);
  }
);
