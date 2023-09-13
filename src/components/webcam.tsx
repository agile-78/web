"use client";

import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { classifyImage } from "@/services/mlService";
import { useSession } from "next-auth/react";
import { useCallback, useRef } from "react";
import Webcam from "react-webcam";

export const WebcamCapture = () => {
  const { data: session } = useSession();
  const { width, height } = useWindowDimensions();

  const isLandscape = height <= width;
  const ratio = isLandscape ? width / height : height / width;

  const videoConstraints = {
    facingMode: "user",
    aspectRatio: ratio,
  };
  const webcamRef = useRef(null);
  const capture = useCallback(async () => {
    // @ts-ignore
    const imageSrc = webcamRef?.current?.getScreenshot();
    const blob = await (await fetch(imageSrc)).blob();
    const formData = new FormData();
    formData.append("image", blob);
    const res = await classifyImage(formData, session?.apiToken || "");
  }, [webcamRef]);
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <Webcam
        audio={false}
        width={width}
        height={height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <button
        className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full aspect-square bg-purple-600"
        onClick={capture}
      >
        take photo
      </button>
    </div>
  );
};
