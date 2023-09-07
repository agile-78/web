import { RecyclingInfo } from "@/interfaces/info";
import Image from "next/image";

export const RecyclingSection: React.FC<{
  title: string;
  recyclableItems: RecyclingInfo[];
  nonRecyclableItems: RecyclingInfo[];
  extraCan: string;
  extraNot: string;
}> = ({ title, recyclableItems, nonRecyclableItems, extraCan, extraNot }) => (
  <div className="mt-8 bg-gray-200 p-4 rounded-lg shadow-md">
    <div className="text-4xl sm:text-6xl font-semibold mb-2 text-center text-blue-500">
      {title}
    </div>
    <h2 className="text-3xl sm:text-5xl font-semibold mb-2 text-green-600">
      OK to recycle
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      {recyclableItems.map((recyclingInfo, index) => (
        <div key={index} className="bg-white p-4 sm:p-8 rounded-lg shadow-md">
          <div className="mb-2 sm:mb-4 flex items-center justify-center">
            <Image
              className="w-12 h-12 sm:w-16 sm:h-16 mr-2 sm:mr-4"
              width={100}
              height={100}
              src={recyclingInfo.imageUrl}
              alt={recyclingInfo.title}
            />
          </div>
          <div className="text-center">
            <h1 className="text-lg sm:text-xl font-semibold">
              {recyclingInfo.title}
            </h1>
          </div>
        </div>
      ))}
    </div>
    <p className="text-xl sm:text-2xl text-center mt-6 sm:mt-8">
      <b>
        <u>Other items that can be recycled:</u>
        <br />
        {extraCan}
      </b>
    </p>

    <br />

    <h2 className="text-3xl sm:text-5xl font-semibold mb-2 text-red-600">
      NOT OK to recycle
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      {nonRecyclableItems.map((recyclingInfo, index) => (
        <div key={index} className="bg-white p-4 sm:p-8 rounded-lg shadow-md">
          <div className="mb-2 sm:mb-4 flex items-center justify-center">
            <Image
              className="w-12 h-12 sm:w-16 sm:h-16 mr-2 sm:mr-4"
              src={recyclingInfo.imageUrl}
              alt={recyclingInfo.title}
              width={100}
              height={100}
            />
          </div>
          <div className="text-center">
            <h1 className="text-lg sm:text-xl font-semibold">
              {recyclingInfo.title}
            </h1>
          </div>
        </div>
      ))}
    </div>
    <p className="text-xl sm:text-2xl text-center mt-6 sm:mt-8">
      <b>
        <u>Other items that cannot be recycled:</u>
        <br />
        {extraNot}
      </b>
    </p>
  </div>
);
