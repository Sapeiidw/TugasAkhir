import axios, { AxiosRequestConfig } from "axios";
import { storageService } from ".";

const main = axios.create({
  baseURL: "http://localhost:4000/api/v1/",
  // baseURL: "https://api-dev.inposery.com/api/v1/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

main.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    const userToken = storageService.getToken() || "";
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
