"use client";

import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { useCallback, useRef } from "react";
import Webcam from "react-webcam";

export const WebcamCapture = () => {
  const { width, height } = useWindowDimensions();

  const videoConstraints = {
    width,
    height,
    facingMode: "user",
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
        height={height}
        minScreenshotHeight={height}
        minScreenshotWidth={width}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={width}
        videoConstraints={videoConstraints}
        className="w-full h-full bg-black"
      />
      <button onClick={capture}>Capture photo</button>
    </div>
  );
};
