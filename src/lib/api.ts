import { API_URI } from "@/constants";
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: API_URI,
});
