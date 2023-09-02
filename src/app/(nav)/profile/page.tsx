import Image from "next/image";
import Link from "next/link";

import profilepic from "../../../../public/profile.png";

export default function profile() {
  return (
    <main className="bg-white">
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <Image
          src={profilepic}
          alt="Profile picture"
          className="px-4 mx-auto w-auto h-[20%]"
        />
        <p className="text-2xl">User</p>
        <div className="bg-[#FBFDB9] w-[90%] p-4 mb-3 text-left rounded-lg h-[20%]">
          <p className="text-2xl font-bold">Your points </p>
          <p className="text-2xl pl-1 font-bold">50 points collected </p>
          <p className="text-l pt-3">
            You have a 10 days recycle streak, keep it up!
          </p>
        </div>
        <div className="w-[90%] py-2 pl-1 text-left  h-[10%]">
          <p className="text-2xl">Your statistics</p>
        </div>
        <div className="bg-[#FFD9EB] w-[90%] p-4 mb-2 text-left rounded-lg  h-[10%]">
          <p className="text-xl py-1 font-bold">Recycled 20 times</p>
        </div>
        <div className="w-[90%] py-2 pl-1 text-left h-[10%]">
          <Link href="/profile/edit">
            <p className="text-xl py-2">Edit Profile &gt;</p>
          </Link>
        </div>
        <div className="w-[90%] py-2 pl-1 text-left h-[10%]">
          <p className="text-xl py-2">Check Rewards &gt;</p>
        </div>
        <div className="w-[90%] py-2 pl-1 text-left h-[10%]">
          <Link href="/referral">
            <p className="text-xl py-2">My referral code &gt;</p>
          </Link>
        </div>
        <div className="h-[15%]"></div>
      </div>
    </main>
  );
}
