"use client";

import { claimReward } from "@/services/rewardService";
import { useSession } from "next-auth/react";

interface IProp {
  _id: string;
  canClaim: boolean;
}

export function ClaimBtn({ _id, canClaim }: IProp) {
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
      disabled={!canClaim}
      className={`${
        canClaim ? "bg-[#E498FF]" : "bg-gray-700 text-white cursor-not-allowed"
      } py-2 px-4 rounded-xl`}
    >
      Exchange
    </button>
  );
}
