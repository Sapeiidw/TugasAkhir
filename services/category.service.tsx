import api from "./api.service";

export const categories = async () => {
  return await api.get("categories");
};
