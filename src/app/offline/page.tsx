import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <Head>
        <title>Home</title>
      </Head>
      <div className="w-[90%] h-[45%]">
        <Link href="/offline/camera">
          <button className="bg-gradient-to-b from-[#34BBFB] to-[#E8F6FD] w-[100%] h-[90%] rounded-xl">
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
        </Link>
      </div>

      <div className="flex w-[90%] h-[20%]">
        <div className="w-[45%] h-[90%] mr-[5%]">
          <Link href="offline/rewards">
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
          </Link>
          <p className="text-lg font-bold mt-1 flex items-center justify-center">
            Rewards
          </p>
        </div>

        <div className="w-[45%] h-[90%] ml-[5%]">
          <Link href="/maps">
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
          </Link>
          <p className="text-lg font-bold mt-1 flex items-center justify-center text-center">
            Bins location
          </p>
        </div>
      </div>

      <div className="w-[90%] h-[30%]">
        <Link href="/information">
          <button className="mt-4 bg-gradient-to-b from-[#F7FA43] to-[#FFFFE9] w-[100%] h-[60%] rounded-xl">
            <div className="flex items-center justify-center w-[100%] h-[100%]">
              <Image
                src="/recycle-bin.png"
                alt="Recycle Bin"
                width={100}
                height={100}
                className="h-[60%] w-auto"
              />
              <p className="text-xl font-bold h-[40%] flex items-center justify-center">
                Recycling Information
              </p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
