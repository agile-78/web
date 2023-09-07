"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();

  const onClick = () => {
    router.back();
  };

  return (
    <button type="button" onClick={onClick}>
      <Image
        src="/backArrow.png"
        alt="back arrow pic"
        width={15}
        height={15}
        className="h-auto w-auto"
      />
    </button>
  );
}
