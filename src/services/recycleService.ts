import { get, post } from "@/lib/api";

export const recycle = async (
  body: {
    userId: string;
    materialId: string;
  },
  token: string
) => {
  return await post("/activities", body, token);
};

export const getMaterial = async (query: string, token: string) => {
  return await get(`/materials?${query}`, token);
};
