import Image from "next/image";
import recyclebin from "../../../../public/recycle-bin.png";
import warningsign from "../../../../public/warning-sign.png";

export default function unauthenticated() {
  return (
    <main className="w-screen h-screen bg-white">
      <div className="h-[15%] flex justify-center text-center pt-4">  
        <span className="text-4xl mt-4 mx-3">Unauthenticated access</span>
      </div>
      <div className="flex justify-center text-center py-4">  
      <Image src={warningsign} alt="Warning Sign" className="mr-1 w-auto h-auto my-4" />
      </div>
      <div className="flex m-4 text-center">
        <Image src={recyclebin} alt="Recycle Bin" className=" w-[100%] h-auto my-1" />
        <span className="text-xl mt-4 pt-4">To access this feature, please log in.</span>
      </div>
    </main>
  );
}
