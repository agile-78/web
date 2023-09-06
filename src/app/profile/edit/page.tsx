import Image from "next/image";
import { EditForm } from "@/components/form/edit";
import BackBtn from "@/components/backBtn";

export default function edit() {
  return (
    <main className="bg-white h-screen">
      <div className="pl-2 pt-2">
        <BackBtn />
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
        <EditForm />
      </div>
    </main>
  );
}
