import BackBtn from "@/components/backBtn";
import Head from "next/head";

export default function referral() {
  return (
    <main className="bg-white">
      <Head>
        <title>Referral</title>
      </Head>
      <div className="pl-2 pt-2">
        <BackBtn />
      </div>

      <div className="flex flex-col justify-center items-center w-screen h-screen p-2">
        <div className="bg-[#9BE8D8] w-[90%] h-[30%] p-4 text-left rounded-lg">
          <p className="text-2xl pt-3 pb-3">Your referral code:</p>
          <h1 className="text-5xl pt-3">RCF213</h1>
        </div>

        <div className="w-[90%] h-[70%] p-4 text-left">
          <p className="text-2xl pt-3 pb-3">
            Invite your friends and receive 10 points for each invitee
          </p>
          <p className="text-2xl pt-3">Number of people you invited: 0</p>
        </div>
      </div>
    </main>
  );
}
