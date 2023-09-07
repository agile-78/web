import Image from "next/image";
import { getRewards } from "@/services/rewardService";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Reward } from "@/components/reward";
import BackBtn from "@/components/backBtn";
import { getPoints } from "@/services/userService";
import Head from "next/head";

export default async function rewards() {
  const session = (await getServerSession(authOptions)) as Session;

  const res = await getRewards(session?.apiToken as string);
  const rewards = res.data.rewards;
  const { data } = await getPoints(
    session?.user._id,
    session?.apiToken as string
  );
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
          Rewards Redemption
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
      <div className="flex justify-center my-4 h-[5%]">
        <p className="text-center text mt-3 text-lg">View my rewards &gt;</p>
      </div>

      <div className="flex flex-col space-y-4 justify-center items-center">
        {rewards.length !== 0 ? (
          rewards.map((reward) => (
            <Reward
              title={reward.title}
              points={reward.points}
              src={reward.logo}
              alt="logo"
              _id={reward._id}
              key={reward._id}
            />
          ))
        ) : (
          <div>No rewards are available at the moment</div>
        )}
      </div>
    </main>
  );
}
