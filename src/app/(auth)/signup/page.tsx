import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Head from "next/head";

export default function signUp() {
  return (
    <main className="w-screen h-screen overflow-hidden">
      <Head>
        <title>Sign up</title>
      </Head>
      <div className="h-2/5 flex justify-center items-center relative before:content-[''] before:w-[150%] before:absolute before:top-0 before:left-0 before:-translate-x-1/4 before:-translate-y-1/2 before:aspect-square before:bg-primary before:rounded-full before:-z-10">
        <span className="text-white text-4xl">Sign up</span>
      </div>
      <div className=" h-3/5 bg-white">
        <form className="mx-2">
          <div className="flex">
            <Input placeholder="Name" className="w-1/2 mr-2" />
            <Input placeholder="Surname" className="w-1/2 ml-2" />
          </div>
          <Input placeholder="Username" className="mt-4" />
          <Input placeholder="Email address" className="mt-4" />
          <Input placeholder="Password" className="mt-4" />
          <Input placeholder="Referal Code" className="mt-4" />
          <Button className="mt-5">Sign up</Button>
        </form>
      </div>
    </main>
  );
}
