import jwtDecode from "jwt-decode";

export const setToken = (token: string) =>
  localStorage.setItem("TOKEN", `Bearer ${token}`);

export const getToken = () => localStorage?.getItem("TOKEN");

export const removeToken = () => localStorage.removeItem("TOKEN");

// export const decodeToken = (token: string) => {
//   jwtDecode(token);
// };
