import { Button } from "@/components/button";
import Head from "next/head";

export default function login() {
  return (
    <main className="h-screen overflow-hidden">
      <Head>
        <title>Login</title>
      </Head>
      <div className="aspect-[1/1] flex bg-white items-center justify-center relative before:content-[''] before:absolute before:w-[150%] before:aspect-square before:rounded-full before:bg-primary before:top-0 before:left-0 before:-translate-x-[30%] before:-translate-y-1/3 ">
        <span className="text-white z-10 text-4xl">Login</span>
      </div>
      <div className=" px-5 pt-3 bg-white flex flex-col justify-center">
        <span>Welcome back!</span>
        <input
          type="text"
          className="text-gray-500 px-3 py-2 border border-gray-400 rounded-lg my-5"
          placeholder="Username"
        />
        <input
          type="text"
          className="text-gray-500 px-3 py-2 border border-gray-400 rounded-lg mb-5"
          placeholder="Password"
        />
        <Button>Sign In</Button>
      </div>
    </main>
  );
}
