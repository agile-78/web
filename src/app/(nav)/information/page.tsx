import Image from "next/image";
import React, { useState } from "react";

interface RecyclingInfo {
  imageUrl: string;
  title: string;
}

const PlasticInfos: RecyclingInfo[] = [
  {
    imageUrl: "/info-images/beverage.png",
    title: "Beverage bottles",
  },
  {
    imageUrl: "/info-images/detergent.png",
    title: "Detergent bottles",
  },
  {
    imageUrl: "/info-images/bag.png",
    title: "Plastic bags",
  },
  {
    imageUrl: "/info-images/shampoo.png",
    title: "Shampoo bottles",
  },
  {
    imageUrl: "/info-images/packWfoil.png",
    title: "Packaging with foil",
  },
  {
    imageUrl: "/info-images/mel.jpeg",
    title: "Melamine products",
  },
  {
    imageUrl: "/info-images/card.png",
    title: "Expired credit card",
  },
  {
    imageUrl: "/info-images/toys.png",
    title: "Toys",
  },
];

const AluminiumInfos: RecyclingInfo[] = [
  {
    imageUrl: "/info-images/cans.png",
    title: "Aluminum cans",
  },
  {
    imageUrl: "/info-images/foil.png",
    title: "Aluminum foil",
  },
  {
    imageUrl: "/info-images/tray.png",
    title: "Aluminum trays",
  },
  {
    imageUrl: "/info-images/aluBot.jpeg",
    title: "Aluminum bottles",
  },
  {
    imageUrl: "/info-images/aluCon.png",
    title: "Aluminum containers",
  },
  {
    imageUrl: "/info-images/lids.png",
    title: "Aluminum lids",
  },
  {
    imageUrl: "/info-images/tubes.png",
    title: "Aluminum tubes",
  },
  {
    imageUrl: "/info-images/package.png",
    title: "Aluminum packaging",
  },
];

const PaperInfos: RecyclingInfo[] = [
  {
    imageUrl: "/info-images/news.png",
    title: "Newspapers",
  },
  {
    imageUrl: "/info-images/box.png",
    title: "Cardboard boxes",
  },
  {
    imageUrl: "/info-images/maga.png",
    title: "Magazines",
  },
  {
    imageUrl: "/info-images/office.png",
    title: "Office paper",
  },
  {
    imageUrl: "/info-images/junk.png",
    title: "Junk mail",
  },
  {
    imageUrl: "/info-images/Pbag.png",
    title: "Paper bags",
  },
  {
    imageUrl: "/info-images/cereal.png",
    title: "Cereal boxes",
  },
  {
    imageUrl: "/info-images/phone.png",
    title: "Phone books",
  },
];

const RecyclingSection: React.FC<{
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
              width={0}
              height={0}
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
              width={0}
              height={0}
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

const YourComponent: React.FC = () => (
  <div>
    <RecyclingSection
      title="PLASTIC"
      recyclableItems={PlasticInfos.slice(0, 4)}
      nonRecyclableItems={PlasticInfos.slice(4, 8)}
      extraCan={
        "Ziplock bags, bubble wraps, egg trays, fruit box and film packagings"
      }
      extraNot={"Plastic packaging contaminated with food"}
    />

    <RecyclingSection
      title="ALUMINIUM"
      recyclableItems={AluminiumInfos.slice(0, 4)}
      nonRecyclableItems={AluminiumInfos.slice(4, 8)}
      extraCan={"Aluminum cans, foil, pie tins"}
      extraNot={"Foil with food residue, aluminum cans with hazardous waste"}
    />

    <RecyclingSection
      title="PAPER"
      recyclableItems={PaperInfos.slice(0, 4)}
      nonRecyclableItems={PaperInfos.slice(4, 8)}
      extraCan={"Clean paper, cardboard, newspapers"}
      extraNot={"Greasy or food-soiled paper, laminated paper, tissues"}
    />

    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
);

export default YourComponent;
