"use client";
import * as tf from "@tensorflow/tfjs";
import * as knnClassifier from "@tensorflow-models/knn-classifier";
import * as mobilenet from "@tensorflow-models/mobilenet";
import { useCallback, useEffect, useState } from "react";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { FC, useRef } from "react";
import Webcam from "react-webcam";
import { getMaterial } from "@/services/recycleService";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import NextImage from "next/image";
import { Loading } from "./loading";

export const WebcamCapture: FC = () => {
  const { width, height } = useWindowDimensions();
  const { data: session } = useSession();
  const [imageSrc, setImageSrc] = useState(null);
  const router = useRouter();
  const FACING_MODE_USER = "user";
  const FACING_MODE_ENVIRONMENT = "environment";
  type FacingMode = "user" | "environment";
  const [facingMode, setFacingMode] = useState<FacingMode>(FACING_MODE_USER);

  const isLandscape = height <= width;
  const ratio = isLandscape ? width / height : height / width;

  const videoConstraints = {
    facingMode,
    aspectRatio: ratio,
  };
  const webcamRef = useRef(null);
  const [material, setMaterial] = useState<{
    _id: string;
    name: string;
    points: number;
    probability: number;
  } | null>(null);

  const [model, setModel] = useState<{
    classifier: null | knnClassifier.KNNClassifier;
    net: null | mobilenet.MobileNet;
  }>({
    classifier: null,
    net: null,
  });

  const capture = useCallback(async () => {
    // @ts-ignore
    const imageSrc = webcamRef?.current?.getScreenshot();
    setImageSrc(imageSrc);
    const blob = await (await fetch(imageSrc)).blob();

    const tensors = tf.browser.fromPixels(await createImageBitmap(blob));
    console.log(model);

    if (model.classifier === null || model.net === null) {
      return;
    }

    try {
      await classifyImage(tensors, model.classifier, model.net);
    } catch (e) {
      console.log(e);
    } finally {
      tensors.dispose();
    }
  }, [webcamRef, model.classifier, model.net]);

  useEffect(() => {
    let classifier = knnClassifier.create();

    mobilenet.load().then((loadedNet) => {
      let tempNet = loadedNet;
      setModel({
        classifier,
        net: tempNet,
      });
      // Automatically load images from the /data folder and assign classId
      loadingImagesFromFolder("/data/plastic_bottles", 0);
      loadingImagesFromFolder("/data/aluminium_cans", 1);
      loadingImagesFromFolder("/data/paper", 2);

      async function loadingImagesFromFolder(
        folderName: string,
        classId: number
      ) {
        // Simulate loading images from a folder

        for (let i = 1; i <= 7; i++) {
          const imageUrl = `${folderName}/${i}.jpg`;
          const img = new Image();
          img.src = imageUrl;
          img.onload = async function () {
            const activation = tempNet.infer(img, true);
            classifier.addExample(activation, classId);
          };
        }
      }
    });

    return () => {
      classifier.dispose();
    };
  }, []);

  async function classifyImage(
    image: tf.Tensor3D,
    classifier: knnClassifier.KNNClassifier,
    net: mobilenet.MobileNet
  ) {
    const activation = net.infer(image, true);

    const result: any = await classifier.predictClass(activation);
    const classes = ["Plastic Bottle", "Aluminium Can", "Paper"];
    const materials = (
      await getMaterial(
        `name=${classes[result.label]}`,
        session?.apiToken as string
      )
    ).data.recyclingMaterials;
    const material = materials[0];

    setMaterial({
      ...material,
      probability: result.confidences[result.label],
    });
    console.log(`
        Prediction: ${classes[result.label]}\n
        Probability: ${result.confidences[result.label]}
      `);
  }

  console.log(model);

  if (model.net === null) {
    return <Loading />;
  }

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {imageSrc === null ? (
        <Webcam
          audio={false}
          width={width}
          height={height}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      ) : (
        <NextImage src={imageSrc} width={width} height={height} alt="pic" />
      )}
      {material === null ? (
        <>
          <button
            className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-full w-20 block text-2xl aspect-square bg-purple-600"
            onClick={() => {
              capture();
            }}
          >
            <i className="fa-solid fa-camera fa-2x text-white"></i>
          </button>
          <button
            type="button"
            onClick={() => {
              setFacingMode(
                facingMode === FACING_MODE_USER
                  ? FACING_MODE_ENVIRONMENT
                  : FACING_MODE_USER
              );
            }}
          >
            <i className="fa-solid fa-repeat fa-3x absolute bottom-10 left-[25%]"></i>
          </button>
        </>
      ) : (
        <div
          className={`absolute flex flex-col rounded-t-[20%]  items-center bottom-0 bg-gradient-to-b ${
            material.probability < 0.5 ? "from-red-600 " : "from-primary"
          } from-50% to-white w-full h-[70%]`}
        >
          <span className="text-5xl mt-20 mb-10">{material.name}</span>
          <span className="text-3xl mb-10">
            Number of points: {material.points}
          </span>
          <span className="text-3xl">Probability: {material?.probability}</span>
          {material.probability < 0.5 ? (
            <span className="text-2xl mt-10">
              Model thinks it is not recycleable. Please scan again
            </span>
          ) : null}
          <div className="absolute bottom-0 flex w-full justify-between px-5 mb-5">
            <button
              type="button"
              onClick={() => {
                setMaterial(null);
                setImageSrc(null);
              }}
              className="text-black flex flex-col"
            >
              <i className="fa-solid fa-arrow-left fa-3x"></i>
              <span>Back to Scan Again</span>
            </button>
            <button
              type="button"
              onClick={() => {
                router.push("/points/" + material._id);
              }}
              disabled={material.probability < 0.5}
              className={`text-black flex flex-col ${
                material.probability < 0.5
                  ? "cursor-not-allowed"
                  : "curosr-pointer"
              }`}
            >
              <i className="fa-solid fa-arrow-right fa-3x"></i>
              <span>Proceed</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
