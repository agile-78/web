import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Image from "next/image";
import backArrow from "../../../public/backArrow.png";
import profile from "../../../public/profile.png";

export default function edit() { 
    return ( 
    <main className="bg-white h-screen">
      <div className="pl-2 pt-2">
        <Image src={backArrow} alt="Back" />
      </div>
  
      <div className="flex justify-center items-center">
        <Image src={profile} alt="Profile picture" className="pt-4 pb-4 mx-auto scale-90" />
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
    ) 
}