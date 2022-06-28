import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "./storage.service";

const main = axios.create({
  // baseURL: "http://localhost:4000/api/v1/",
  baseURL: "https://api-dev.inposery.com/api/v1/",
});

main.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    const userToken = getToken() || "";
    config.headers = {
      Authorization: userToken,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default main;
