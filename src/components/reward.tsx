import Image from "next/image";
import { ClaimBtn } from "./claimBtn";
import { API_URI, BASE_API_URI } from "@/constants";

interface IProp {
  _id: string;
  src: string;
  alt: string;
  title: string;
  points: number;
}

export function Reward({ src, alt, title, points, _id }: IProp) {
  return (
    <div className="bg-[#FFB6B6] bg-opacity-50 w-[90%] rounded-lg p-4 text-black flex items-center justify-between py-4">
      <Image
        src={`${BASE_API_URI}/${src}`}
        alt={alt}
        width={100}
        height={100}
        className="w-1/4 h-1/3 p1-2 pt-2"
      />
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-lg">{points} points</p>
      </div>
      <ClaimBtn _id={_id} />
    </div>
  );
}
