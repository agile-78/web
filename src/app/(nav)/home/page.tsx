import React from "react";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <Head>
        <title>Home</title>
      </Head>
      <div className="w-[90%] h-[50%]">
        <button className="bg-gradient-to-b from-[#34BBFB] to-[#E8F6FD] w-[100%] h-[85%] rounded-xl">
          <div className="flex flex-col items-center justify-center w-[100%] h-[100%]">
            <p className="text-3xl font-bold h-[40%] flex items-center justify-center">
              Scan to earn points
            </p>
            <Image
              src="/home-images/bin.png"
              alt="Recycle Bin"
              width={100}
              height={100}
              className="h-[60%] w-auto"
            />
          </div>
        </button>
      </div>

      <div className="flex w-[90%] h-[40%]">
        <div className="w-[45%] h-[55%] mr-[5%]">
          <button className="bg-[#E498FF] w-[100%] h-[85%] rounded-xl">
            <div className="flex flex-col items-center justify-center w-[100%] h-[100%]">
              <Image
                src="/home-images/rewards.png"
                alt="Rewards"
                className="h-[60%] w-auto"
                width={100}
                height={100}
              />
            </div>
          </button>
          <p className="text-lg font-bold mt-1 flex items-center justify-center">
            Rewards
          </p>
        </div>

        <div className="w-[45%] h-[55%] ml-[5%]">
          <button className="bg-[#E2FFB2] w-[100%] h-[85%] rounded-xl">
            <div className="flex flex-col items-center justify-center w-[100%] h-[100%]">
              <Image
                src="/home-images/map.png"
                alt="Map"
                width={100}
                height={100}
                className="h-[90%] w-auto"
              />
            </div>
          </button>
          <p className="text-lg font-bold mt-1 flex items-center justify-center text-center">
            Recycling Locations
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
