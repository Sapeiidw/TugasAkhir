import api from "./api.service";

export const GetAllCategories = async () => {
  return await api.get("categories");
};
