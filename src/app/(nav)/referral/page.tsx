import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import BackBtn from "@/components/backBtn";
import { getReferredCount } from "@/services/userService";
import { getServerSession } from "next-auth";
import Head from "next/head";

export default async function referral() {
  const session = await getServerSession(authOptions);

  const id = session?.user._id as string;

  const res = await getReferredCount(id, session?.apiToken);

  return (
    <main className="bg-white">
      <Head>
        <title>Referral</title>
      </Head>
      <div className="pl-2 pt-2">
        <BackBtn />
      </div>

      <div className="flex flex-col justify-center items-center w-screen h-screen p-2">
        <div className="bg-[#9BE8D8] break-words w-[90%] h-[30%] p-4 text-left rounded-lg">
          <p className="text-2xl pt-3 pb-3">Your referral code:</p>
          <h1 className="text-5xl pt-3">{id}</h1>
        </div>

        <div className="w-[90%] h-[70%] p-4 text-left">
          <p className="text-2xl pt-3 pb-3">
            Invite your friends and receive 10 points for each invitee
          </p>
          <p className="text-2xl pt-3">
            Number of people you invited: {res.data.count}
          </p>
        </div>
      </div>
    </main>
  );
}
