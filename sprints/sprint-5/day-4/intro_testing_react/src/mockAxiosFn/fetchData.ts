import axios from "axios";

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default async function fetchData() {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data;
}