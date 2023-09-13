import { post } from "@/lib/api";

export const classifyImage = async (body: FormData, token: string) => {
  return await post("/classify", body, token);
};
