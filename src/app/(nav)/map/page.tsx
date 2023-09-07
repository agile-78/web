import Head from "next/head";
import Image from "next/image";
import React from "react";

const FindRecyclingBins: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Location</title>
      </Head>
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Finding Recycling Bins Near You
        </h1>

        {/* Category: Locate Recycling Bins Near You */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <Image
            className="w-100 h-100 mb-4"
            width={100}
            height={100}
            src="/info-images/main_bin.png" // Add the path to your image
            alt="Main Bin Icon"
          />
          <h2 className="text-2xl font-semibold text-gray-700">
            Main Recycling Bin
          </h2>
          <p className="text-gray-600">
            To find the main recycling bin in your area, follow these steps:
          </p>
          <ol className="list-decimal mt-4 ml-6">
            <li className="mb-2">
              <span className="font-semibold">Check with Your Neighbors:</span>{" "}
              Ask your neighbors how they locate the main recycling bin in your
              neighborhood. They might have useful information to share.
            </li>
            <li className="mb-2">
              <span className="font-semibold">
                Visit Your Neighborhood Hub:
              </span>{" "}
              Many neighborhoods have a central hub where the main recycling bin
              is located. Explore your neighborhood to find it.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Check Local Supermarkets:</span>{" "}
              Some supermarkets also have information about the location of the
              main recycling bin in your area. You can inquire at the customer
              service desk.
            </li>
          </ol>
        </div>

        {/* Category: Recycling Guidelines */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <Image
            className="w-100 h-100 mb-4"
            width={100}
            height={100}
            src="/info-images/battery_bin.png" // Add the path to your image
            alt="Bulb Bin Icon"
          />
          <h2 className="text-2xl font-semibold text-gray-700">
            Light Bulb Recycling Bin
          </h2>
          <p className="text-gray-600">
            It&apos;s essential to follow recycling guidelines to ensure that
            your recyclables are properly processed. Here are some general
            guidelines for the light bulb recycling bin:
          </p>
          <ul className="list-disc mt-4 ml-6">
            <li className="mb-2">
              <span className="font-semibold">Check with Your Neighbors:</span>{" "}
              Ask your neighbors how they locate the light bulb recycling bin in
              your neighborhood. They might have useful information to share.
            </li>
            <li className="mb-2">
              <span className="font-semibold">
                Visit Your Local Supermarket:
              </span>{" "}
              Many supermarkets have a dedicated area for recycling light bulbs.
              Check with your local supermarket for the exact location.
            </li>
            <li className="mb-2">
              <span className="font-semibold">
                Recycle at Collection Events:
              </span>{" "}
              Some communities organize collection events for light bulbs. Keep
              an eye out for such events in your area.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FindRecyclingBins;
