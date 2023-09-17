import React from "react";

import BackBtn from "@/components/backBtn";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

export default function maps() {
  const Map = dynamic(() => import("@/components/map"), { ssr: false });

  return (
    <div>
      <div className="flex justify-between h-[10%] mx-3">
        <BackBtn />
        <a href="/map">
          <button className="border w-[100%] h-[85%] rounded-xl">
            <p>More information</p>
          </button>
        </a>
      </div>
      <Map />
    </div>
  );
}
