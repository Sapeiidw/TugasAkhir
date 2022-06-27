import jwtDecode from "jwt-decode";

const isServer = typeof window === "undefined";

export const setToken = (token: string) =>
  localStorage.setItem("TOKEN", `Bearer ${token}`);

export const getToken = () =>
  typeof window !== "undefined" ? localStorage.getItem("TOKEN") : "";

export const removeToken = () => localStorage.removeItem("TOKEN");

export const decodeToken = (token: string) => {
  return jwtDecode(token);
};
