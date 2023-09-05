"use client";

import { claimReward } from "@/services/rewardService";
import { useSession } from "next-auth/react";

interface IProp {
  _id: string;
}

export function ClaimBtn({ _id }: IProp) {
  const { data: session } = useSession();

  const claim = async () => {
    await claimReward(
      {
        userId: session?.user._id as string,
        rewardId: _id,
      },
      session?.apiToken as string
    );
  };
  return (
    <button
      type="button"
      onClick={claim}
      className="bg-[#E498FF] py-2 px-4 rounded-xl"
    >
      Exchange
    </button>
  );
}
