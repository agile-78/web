import Image from "next/image";
import React from "react";

const YourComponent: React.FC = () => (
  <div className="flex flex-col justify-center items-center min-h-screen p-10 pt-50">
    <div style={{ textAlign: "center", width: "80%" }}>
      <button
        className="bg-blue-600 text-white text-lg font-semibold py-6 sm:py-24 px-4 sm:px-20 rounded-lg hover:bg-blue-300 focus:bg-blue-600 relative w-full transition-all"
        style={{ width: "100%" }}
      >
        <div style={{ fontWeight: "bold", fontSize: "18%" }}>
          Scan to earn points
        </div>
        <Image
          src="/home-images/bin.png"
          alt="Bins"
          width={0}
          height={0}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center"></div>
      </button>
    </div>
    <br />
    <br />
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div style={{ textAlign: "center", width: "49%" }}>
        <button
          className="bg-purple-500 text-white text-lg font-semibold py-6 sm:py-24 px-4 sm:px-20 rounded-lg hover:bg-purple-600 focus:bg-purple-600 relative w-full transition-all"
          style={{ width: "100%" }}
        >
          <Image
            src="/home-images/reward.png"
            width={0}
            height={0}
            alt="Rewards"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center"></div>
        </button>
        <div style={{ fontSize: "30%" }}>Rewards</div>
      </div>
      <div style={{ textAlign: "center", width: "49%" }}>
        <button
          className="bg-green-500 text-white text-lg font-semibold py-6 sm:py-24 px-4 sm:px-20 rounded-lg hover:bg-green-600 focus:bg-green-600 relative w-full transition-all"
          style={{ width: "100%" }}
        >
          <Image
            src="/home-images/map.png"
            alt="Map"
            width={0}
            height={0}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center"></div>
        </button>
        <div style={{ fontSize: "30%" }}>Recycling Locations</div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
  </div>
);

export default YourComponent;
