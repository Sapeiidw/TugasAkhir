import jwtDecode from "jwt-decode";

const isServer = typeof window === "undefined";

export const setToken = (token: string) =>
  localStorage.setItem("TOKEN", `Bearer ${token}`);

export const getToken = () =>
  !isServer ? localStorage.getItem("TOKEN") : null;

export const removeToken = () => localStorage.removeItem("TOKEN");

export const decodeToken = (token: string) => {
  jwtDecode(token);
};
