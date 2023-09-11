import { axiosClient } from "@/lib/api";

export const authenticate = async (email: string, password: string) => {
  try {
    return await axiosClient.post("/auth/login", { email, password });
  } catch (e) {
    throw e;
  }
};

export const register = async (credentials: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    return await axiosClient.post("/auth/register", credentials);
  } catch (e) {
    throw e;
  }
};
