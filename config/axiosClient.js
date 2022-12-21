import axios from "axios";

const AxiosClient = axios.create({
  baseURL: process.env.BASE_URL || "https://solance-api.herokuapp.com",
  timeout: 1000,
});

axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { AxiosClient };
