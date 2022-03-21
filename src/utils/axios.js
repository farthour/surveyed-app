import axios from "axios";

const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${process.env.NEXT_PUBLIC_SERVER_BASE_API_URL}`,
  withCredentials: true,
});

export default apiClient;
