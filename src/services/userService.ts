import { get, patch } from "@/lib/api";

export const editProfile = async (id: string, body: any, token?: string) => {
  return await patch(`/users/${id}`, body, token);
};

export const getPoints = async (id: string, token?: string) => {
  return await get(`/users/${id}/points`, token);
};
