import { IReward } from "@/interfaces/reward";
import { get, post } from "@/lib/api";

export const getRewards = async (
  token: string
): Promise<{
  data: {
    rewards: IReward[];
  };
}> => {
  return (await get("/rewards", token)) as any;
};

export const claimReward = async (
  body: {
    userId: string;
    rewardId: string;
  },
  token: string
) => {
  return await post("/redemptions", body, token);
};
