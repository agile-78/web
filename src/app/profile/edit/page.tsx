import Image from "next/image";
import { EditForm } from "@/components/form/edit";
import Head from "next/head";
import Link from "next/link";

export default function edit() {
  return (
    <main className="bg-white h-screen">
      <Head>
        <title>Profile Edit</title>
      </Head>
      <div className="pl-2 pt-2">
        <Link href="/profile">
          <Image
            src="/backArrow.png"
            alt="back arrow pic"
            width={15}
            height={15}
            className="h-auto w-auto"
          />
        </Link>
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
