import axios, { AxiosRequestConfig } from "axios";
import { storageService } from ".";

const main = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  // baseURL: "https://api-dev.inposery.com/api/v1",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "*/*",
    withCredentials: true,
  },
});

main.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    // const userToken = storageService.getToken() || "";
    config.headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJ0b3RhQG1haWxpbmF0b3IuY29tIiwicGFzc3dvcmQiOiIkMmIkMDgkTUgwdEJSemJsLlh4dEF2cFJleWEwdTkuYUMvMFVia2kwYm1pRDFpOWhYN0o4b2ZucmdqUmkiLCJyb2xlIjoiVXNlciIsImlhdCI6MTY1Mzk5NDA4NywiZXhwIjoxNjU0MDgwNDg3fQ.uXxSIbYCMN9C_z5Ez-6iIG9wFUzKKvV6rScGXDLB3no",
    };

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default main;
