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

export const WebcamCapture: FC = () => {
  const { width, height } = useWindowDimensions();
  const { data: session } = useSession();
  const router = useRouter();

  const isLandscape = height <= width;
  const ratio = isLandscape ? width / height : height / width;

  const videoConstraints = {
    facingMode: "user",
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
      {material === null ? (
        <button
          className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full w-20 block text-2xl aspect-square bg-purple-600"
          onClick={() => {
            capture();
          }}
        >
          <i className="fa-solid fa-camera fa-2x text-white"></i>
        </button>
      ) : (
        <div>
          <h1>{material.name}</h1>
          <span>Number of points: {material.points}</span>
          <div>
            <button
              onClick={() => {
                setMaterial(null);
              }}
            >
              Back to Scan Again
            </button>
            <button
              onClick={() => {
                router.push("/points/" + material._id);
              }}
            >
              Proceed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
