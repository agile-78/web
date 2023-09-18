import Image from "next/image";
import { getMyRewards, getRewards } from "@/services/rewardService";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Reward } from "@/components/reward";
import BackBtn from "@/components/backBtn";
import { getPoints } from "@/services/userService";
import Head from "next/head";

export default async function rewards() {
  const session = (await getServerSession(authOptions)) as Session;

  const res = await getMyRewards(
    session?.user._id,
    session?.apiToken as string
  );
  const redemptions = res.data.redemptions;
  const { data } = await getPoints(
    session?.user._id,
    session?.apiToken as string
  );

  const rewards = redemptions.map((redemption) => {
    const { rewardId } = redemption;
    return {
      ...rewardId,
    };
  });

  return (
    <main className="bg-white h-screen">
      <Head>
        <title>Rewards</title>
      </Head>
      <div className="pl-2 pt-2">
        <BackBtn />
      </div>
      <div className="flex mt-2 w-screen h-[5%] justify-center items-center">
        <p className="text-center text-2xl pt-2 text-left mr-3 w-[50%]">
          My rewards
        </p>
        <div className="bg-[#E498FF] flex justify-center text-white pl-4 rounded-lg shadow-md w-[35%] h-[100%]">
          <Image
            src={"/star.png"}
            width={100}
            height={100}
            alt="star"
            className="mr-1 w-[20%] h-[60%] my-1"
          />
          <p className="mr-1 py-1 w-[80%]">{data.points} points</p>
        </div>
      </div>

      <div className="flex flex-col space-y-4 justify-center items-center">
        {rewards.length !== 0 ? (
          rewards.map((reward: any) => (
            <Reward
              title={reward.title}
              points={reward.points}
              src={reward.logo}
              alt="logo"
              _id={reward._id}
              key={reward._id}
              currentPoint={data.points}
              redemeed={true}
            />
          ))
        ) : (
          <div>No rewards are claimed at the moment</div>
        )}
      </div>
    </main>
  );
}
