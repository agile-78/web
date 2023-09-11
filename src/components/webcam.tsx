"use client";

import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { useCallback, useRef } from "react";
import Webcam from "react-webcam";

export const WebcamCapture = () => {
  const { width, height } = useWindowDimensions();

  const isLandscape = height <= width;
  const ratio = isLandscape ? width / height : height / width;
  console.log(ratio);

  const videoConstraints = {
    facingMode: "user",
    aspectRatio: ratio,
  };
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    // @ts-ignore
    const imageSrc = webcamRef?.current?.getScreenshot();
    console.log(imageSrc);
  }, [webcamRef]);
  return (
    <div className="w-full h-full">
      <Webcam
        audio={false}
        width={width}
        height={height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </div>
  );
};
