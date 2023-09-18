import React from "react";
import Link from "next/link"

export default function Points() {
  return (
    <div className="w-screen flex flex-col my-4 justify-center items-center">
      <p className="text-lg my-4">Thank you for recycling!</p>
      <p className="text-sm my-4">You earn:</p>
      <div className="w-1/3 aspect-square my-4 rounded-full bg-blue-500 flex flex-col items-center justify-center">
        <p className="text-white font-bold text-6xl">2</p>
        <span className="text-white font-bold text-xl">points</span>
      </div>
      <p className="w-4/5 my-4">Congratz! You have earn extra 2 points for have 7 days recycle streak</p>
      <p className="w-4/5 my-4">Total amount of points received : 4</p>
      <p className="w-4/5 my-4">You have: 50 points</p>
      <Link href="/offline">
        <span>Back to home</span>
      </Link>
    </div>
  );
}