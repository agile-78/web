import Image from "next/image";
import liho from "../../../../public/liho.png";
import starbucks from "../../../../public/starbucks.png";
import burgerking from "../../../../public/burgerking.png";
import star from "../../../../public/star.png";
import backArrow from "../../../../public/backArrow.png";
import Link from "next/link";

export default function redeem() { 
    return ( 
    <main className="bg-white h-screen"> 
      <div className="pl-2 pt-2">
        <Link href="/profile"><Image src={backArrow} width={14} height={14} alt="Back" /></Link>
      </div>
      <div className="flex mt-2 w-screen h-[5%] justify-center items-center">
        <p className="text-center text-2xl pt-2 text-left mr-3 w-[50%]">My Rewards</p>
        <div className="bg-[#E498FF] flex justify-center text-white pl-4 rounded-lg shadow-md w-[35%] h-[100%]">
          <Image src={star} alt="star" className="mr-1 w-[20%] h-[60%] my-1"/>
          <p  className="mr-1 py-1 w-[80%]">50 points</p>
        </div>
      </div>            
      <div className="flex rounded-md justify-center my-4 h-[5%]">
        <div className="w-[90%] bg-[#EBF5FF] rounded-lg">
        <button type="button" className="w-[50%] h-[100%] p-1 text-xl font-bold focus:rounded-lg focus:bg-[#BC09FB] focus:text-white">
          Active
        </button>
        <button type="button" className="w-[50%] h-[100%] p-1 text-xl font-bold focus:rounded-lg focus:bg-[#BC09FB] focus:text-white">
          Expired
        </button>
        </div>
      </div>
            
     <div className="flex flex-col space-y-4 justify-center items-center">
        <div className="bg-[#FFB6B6] bg-opacity-50 w-[90%] rounded-lg p-4 text-black flex items-center justify-between py-4">
          <Image src={liho} alt="liho" className="w-1/4 h-1/3 p1-2 pt-2"/>
          <p className="font-bold">$5 voucher</p>
          <button className="bg-[#E498FF] py-2 px-4 rounded-xl">
            Redeem
          </button>
        </div>
        <div className="bg-[#FFB6B6] bg-opacity-50 w-[90%] rounded-lg p-4 text-black flex items-center justify-between py-4">
          <Image src={starbucks} alt="starbucks" className="w-1/4 h-1/3 p1-2 pt-2"/>
          <p className="font-bold">$5 voucher</p>
          <button className="bg-[#E498FF] py-2 px-4 rounded-xl">
          Redeem
          </button>
        </div>
        <div className="bg-[#FFB6B6] bg-opacity-50 w-[90%] rounded-lg p-4 text-black flex items-center justify-between py-4">
          <Image src={burgerking} alt="burgerking" className="w-1/4 h-1/3 p1-2 pt-2"/>
          <p className="font-bold">$5 voucher</p>
          <button className="bg-[#E498FF] py-2 px-4 rounded-xl">
          Redeem
          </button>
        </div>
      </div>
    </main> 
  ) 
}