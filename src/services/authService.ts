import { axiosClient } from "@/lib/api";

export const authenticate = async (email: string, password: string) => {
  try {
    return await axiosClient.post("/auth/login", { email, password });
  } catch (e) {
    console.log(e);
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
    console.log(e);
  }
};
