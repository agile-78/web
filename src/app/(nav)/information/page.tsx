import React, { useState } from 'react';

interface RecyclingInfo {
  imageUrl: string;
  title: string;
}

const PlasticInfos: RecyclingInfo[] = [
  {
    imageUrl: 'url1',
    title: 'Beverage bottles'
  },
  {
    imageUrl: 'url2',
    title: 'Detergent bottles',
  },
  {
    imageUrl: 'url3',
    title: 'Plastic bags',
  },
  {
    imageUrl: 'plasticurl4',
    title: 'Shampoo bottles',
  },
  {
    imageUrl: 'url5',
    title: 'Packaging with foil',
  },
  {
    imageUrl: 'url6',
    title: 'Melamine products',
  },
  {
    imageUrl: 'url7',
    title: 'Expired credit card',
  },
  {
    imageUrl: 'url8',
    title: 'Toys',
  },
  {
    imageUrl: 'url9',
    title: 'Ziplock bags, bubble wraps, egg trays, fruit box and film packagings'
  },
  {
    imageUrl: 'url10',
    title: 'Plastic packaging contaminated with food'
  }
];

const AluminiumInfos: RecyclingInfo[] = [
    {
      imageUrl: 'alu_url1',
      title: 'Aluminum cans',
    },
    {
      imageUrl: 'alu_url2',
      title: 'Aluminum foil',
    },
    {
      imageUrl: 'alu_url3',
      title: 'Aluminum trays',
    },
    {
      imageUrl: 'alu_url4',
      title: 'Aluminum bottles',
    },
    {
      imageUrl: 'alu_url5',
      title: 'Aluminum containers',
    },
    {
      imageUrl: 'alu_url6',
      title: 'Aluminum lids',
    },
    {
      imageUrl: 'alu_url7',
      title: 'Aluminum tubes',
    },
    {
      imageUrl: 'alu_url8',
      title: 'Aluminum packaging',
    },
  ];
  
  const PaperInfos: RecyclingInfo[] = [
    {
      imageUrl: 'paper_url1',
      title: 'Newspapers',
    },
    {
      imageUrl: 'paper_url2',
      title: 'Cardboard boxes',
    },
    {
      imageUrl: 'paper_url3',
      title: 'Magazines',
    },
    {
      imageUrl: 'paper_url4',
      title: 'Office paper',
    },
    {
      imageUrl: 'paper_url5',
      title: 'Junk mail',
    },
    {
      imageUrl: 'paper_url6',
      title: 'Paper bags',
    },
    {
      imageUrl: 'paper_url7',
      title: 'Cereal boxes',
    },
    {
      imageUrl: 'paper_url8',
      title: 'Phone books',
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
      <div className="text-6xl font-semibold mb-2 text-center text-blue-500">{title}</div>
      <h2 className="text-5xl font-semibold mb-2 text-green-600">OK to recycle</h2>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {recyclableItems.map((recyclingInfo, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4 flex items-center justify-center">
              <img
                className="w-16 h-16 rounded-full mr-4"
                src={recyclingInfo.imageUrl}
                alt={recyclingInfo.title}
              />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-semibold">{recyclingInfo.title}</h1>
            </div>
          </div>
        ))}
      </div>
      <p className="text-2xl text-center mt-8">
        <b>
          <u>Other items that can be recycled:</u><br />{extraCan}
        </b>
      </p>
  
      <br />
  
      <h2 className="text-5xl font-semibold mb-2 text-red-600">NOT OK to recycle</h2>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {nonRecyclableItems.map((recyclingInfo, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4 flex items-center justify-center">
              <img
                className="w-16 h-16 rounded-full mr-4"
                src={recyclingInfo.imageUrl}
                alt={recyclingInfo.title}
              />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-semibold">{recyclingInfo.title}</h1>
            </div>
          </div>
        ))}
      </div>
      <p className="text-2xl text-center mt-8">
        <b>
          <u>Other items that cannot be recycled:</u><br />{extraNot}
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
        extraCan={'Ziplock bags, bubble wraps, egg trays, fruit box and film packagings'}
        extraNot={'Plastic packaging contaminated with food'}
        />
  
      <RecyclingSection
        title="ALUMINIUM"
        recyclableItems={AluminiumInfos.slice(0, 4)}
        nonRecyclableItems={AluminiumInfos.slice(4, 8)}
        extraCan={'Aluminum cans, foil, pie tins'}
        extraNot={'Foil with food residue, aluminum cans with hazardous waste'}
      />
  
      <RecyclingSection
        title="PAPER"
        recyclableItems={PaperInfos.slice(0, 4)}
        nonRecyclableItems={PaperInfos.slice(4, 8)}
        extraCan={'Clean paper, cardboard, newspapers'}
        extraNot={'Greasy or food-soiled paper, laminated paper, tissues'}
      />
  
      <br /><br /><br /><br /><br />
    </div>
  );
  
  export default YourComponent;







//         PLASTIC
//               extraCan={Ziplock bags, bubble wraps, egg trays, fruit box and film packagings}
//               extraNot={Plastic packaging contaminated with food}

//           ALUMINIUM
//               extraCan={Aluminum cans, foil, pie tins}
//               extraNot={Foil with food residue, aluminum cans with hazardous waste}

//           PAPER
//               extraCan={Clean paper, cardboard, newspapers}
//               extraNot={Greasy or food-soiled paper, laminated paper, tissues}

  
  