import Image from "next/image";
import questionmark from "../../public/question-mark.png";
import recyclebin from "../../public/recycle-bin.png";
import Head from "next/head";

export default function notFound() {
  return (
    <main className="w-screen h-screen bg-[#FFFDE7]">
      <Head>
        <title>Not Found</title>
      </Head>
      <div className="h-[10%] flex justify-center text-center pt-4">
        <span className="text-4xl mt-4">Page Not Found</span>
      </div>
      <div className="h-[70%] flex items-center justify-center text-center">
        <div className="flex-col">
          <Image
            src={questionmark}
            alt="Question Marks"
            className="mr-1 w-auto h-auto mb-1 mt-4"
          />
          <Image
            src={recyclebin}
            alt="Recycle Bin"
            className="mr-1 w-auto h-auto my-1"
          />
        </div>
      </div>
    </main>
  );
}
