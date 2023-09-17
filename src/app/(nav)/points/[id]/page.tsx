import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getMaterial, recycle } from "@/services/recycleService";
import { getPoints } from "@/services/userService";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function Points() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/unauthenticated");
  }
  const materials = (await getMaterial("name=Paper", session.apiToken)).data
    .recyclingMaterials;

  const material = materials[0];

  await recycle(
    {
      userId: session.user._id,
      materialId: material._id,
    },
    session.apiToken
  );
  const { points } = (await getPoints(session.user._id, session.apiToken)).data;

  return (
    <div className="w-screen flex flex-col my-4 justify-center items-center">
      <p className="text-lg my-4">Thank you for recycling!</p>
      <p className="text-sm my-4">You earn:</p>
      <div className="w-1/3 aspect-square my-4 rounded-full bg-blue-500 flex flex-col items-center justify-center">
        <p className="text-white font-bold text-6xl">{material.points}</p>
        <span className="text-white font-bold text-xl">points</span>
      </div>
      <p className="w-4/5 my-4">
        Congratz! You have earn extra {material.points} points for have 7 days
        recycle streak
      </p>
      <p className="w-4/5 my-4">
        Total amount of points received : {material.points}
      </p>
      <p className="w-4/5 my-4">You have: {points} points</p>
    </div>
  );
}
