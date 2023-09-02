import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

export default function Auth() {
  return (
    <main className="w-screen h-screen overflow-hidden">
      <Head>
        <title>Auth</title>
      </Head>
      <div className="h-3/5 bg-primary flex items-center justify-center">
      <Image src={logo} alt="Logo" className="mr-1 w-[50%] h-auto my-1" />
      </div>
      <div className="bg-white flex flex-col items-center justify-start relative before:w-[150%] before:aspect-square before:absolute before:bg-inherit before:rounded-full before:top-0 before:-translate-y-[15%]  ">
        <span className="font-bold text-black my-3 text-2xl z-10">
          Let&apos;s start Recycling
        </span>
        <Link
          href="/auth/login"
          className="my-3 bg-black text-white w-3/4 p-3 rounded-lg font-bold z-10 text-center"
        >
          SIGN IN
        </Link>
        <Link
          href="/auth/signup"
          className="my-3 bg-white w-3/4 rounded-lg p-3 font-bold border-2 border-black z-10 text-center"
        >
          SIGN UP
        </Link>
      </div>
    </main>
  );
}
