import { API_URI } from "@/constants";
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: API_URI,
});

export const post = async (url: string, body: any, token?: string) => {
  try {
    if (token) {
      return await axiosClient.post(url, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return await axiosClient.post(url, body);
  } catch (e) {
    console.log(e);
  }
};

export const get = async (url: string, token?: string) => {
  try {
    if (token) {
      return await axiosClient.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return await axiosClient.get(url);
  } catch (e) {
    console.log(e);
  }
};
