import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import backArrow from "../../../../public/backArrow.png";

export default function edit() {
  return (
    <main className="bg-white h-screen">
      <div className="pl-2 pt-2">
        <Link href="/profile"><Image src={backArrow} alt="Back" /></Link>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/profile.png"
          width={260}
          height={260}
          alt="Profile picture"
          className="pt-4 pb-4 mx-auto"
        />
      </div>

      <div className="h-3/5">
        <form className="mx-2">
          <div className="flex">
            <Input placeholder="Name" className="w-1/2 mr-2" />
            <Input placeholder="Surname" className="w-1/2 ml-2" />
          </div>
          <Input placeholder="Username" className="mt-4" />
          <Input placeholder="Email address" className="mt-4 mb-4" />
          <Button className="mt-4">Done</Button>
        </form>
      </div>
    </main>
  );
}
