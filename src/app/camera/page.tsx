"use client";

// import { WebcamCapture } from "@/components/webcam";
import dynamic from "next/dynamic";

export default async function Camera() {
  const WebcamCapture = dynamic(
    () => import("@/components/webcam").then((mod) => mod.WebcamCapture),
    {
      ssr: false,
    }
  );
  return (
    <div>
      <WebcamCapture />
    </div>
  );
}
