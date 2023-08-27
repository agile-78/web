import React from 'react';

const handleButtonClick = (buttonName: string) => {
  console.log(`Button ${buttonName} clicked`);
  // You can add your desired logic here for each button
};

const MyPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Button Page</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={() => handleButtonClick('Button 1')}
      >
        Button 1
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={() => handleButtonClick('Button 2')}
      >
        Button 2
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={() => handleButtonClick('Button 3')}
      >
        Button 3
      </button>
    </div>
  );
};

export default MyPage;
