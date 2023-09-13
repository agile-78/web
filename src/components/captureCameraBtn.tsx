"use client";

import Link from "next/link";
import { FC, ReactNode } from "react";

interface IProps {
  getScreenShot?: () => void;
  children: ReactNode;
}

export const CaptureCameraBtn: FC<IProps> = ({ getScreenShot, children }) => {
  return getScreenShot ? (
    <div>
      <button
        onClick={getScreenShot}
        className="rounded-full aspect-square bg-purple-600 p-5"
      >
        {children}
      </button>
    </div>
  ) : (
    <Link href="/camera">
      <div className="rounded-full aspect-square bg-purple-600 p-5">
        {children}
      </div>
    </Link>
  );
};
