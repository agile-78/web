import React from 'react';
import Image from "next/image";
import bin from "../../../../public/home-images/bin.png";
import rewards from "../../../../public/home-images/rewards.png";
import maps from "../../../../public/home-images/map.png";

const YourComponent: React.FC = () => (
  <div className="flex flex-col items-center justify-center w-screen h-screen">
    <div className='w-[90%] h-[50%]'>
      <button className="bg-gradient-to-b from-[#34BBFB] to-[#E8F6FD] w-[100%] h-[85%] rounded-xl">
        <div className="flex flex-col items-center justify-center w-[100%] h-[100%]">
          <p className='text-3xl font-bold h-[40%] flex items-center justify-center'>Scan to earn points</p>
          <Image src={bin} alt="Recycle Bin" className="h-[60%] w-auto" />
        </div>
      </button>
    </div>



    <div className='flex w-[90%] h-[40%]'>
      <div className='w-[45%] h-[55%] mr-[5%]'>
        <button className="bg-[#E498FF] w-[100%] h-[85%] rounded-xl">
          <div className="flex flex-col items-center justify-center w-[100%] h-[100%]">
            <Image src={rewards} alt="Rewards" className="h-[60%] w-auto" />
          </div>
        </button>
        <p className='text-lg font-bold mt-1 flex items-center justify-center'>Rewards</p>
      </div>

      <div className='w-[45%] h-[55%] ml-[5%]'>
        <button className="bg-[#E2FFB2] w-[100%] h-[85%] rounded-xl">
          <div className="flex flex-col items-center justify-center w-[100%] h-[100%]">
            <Image src={maps} alt="Map" className="h-[90%] w-auto" />
          </div>
        </button>
        <p className='text-lg font-bold mt-1 flex items-center justify-center text-center'>Recycling Locations</p>
      </div>
    </div>
  </div>
);

export default YourComponent;
