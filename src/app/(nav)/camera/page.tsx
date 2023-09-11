import { WebcamCapture } from "@/components/webcam";

export default async function Camera() {
  return (
    <main className="w-screen h-screen">
      <WebcamCapture></WebcamCapture>
    </main>
  );
}
