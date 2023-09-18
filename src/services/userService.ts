import { get, patch } from "@/lib/api";
import { AxiosResponse } from "axios";

export const editProfile = async (id: string, body: any, token?: string) => {
  return await patch(`/users/${id}`, body, token);
};

export const getUser = async (id: string, token: string) => {
  return await get(`/users/${id}`, token);
};

export const getPoints = async (
  id: string,
  token?: string
): Promise<
  AxiosResponse<{
    points: number;
  }>
> => {
  return await get(`/users/${id}/points`, token);
};

export const getReferredCount = async (id: string, token?: string) => {
  return await get(`/users/${id}/referralcount`, token);
};

export const getRecycleCount = async (
  id: string,
  token?: string
): Promise<
  AxiosResponse<{
    count: number;
  }>
> => {
  try {
    return await get(`/users/${id}/recyclecount`, token);
  } catch (e) {
    console.log(e);
    throw e;
  }
};
