import { SignupForm } from "@/components/auth/form/signup";
import Head from "next/head";

export default function signUp() {
  return (
    <main className="w-screen h-screen overflow-hidden">
      <Head>
        <title>Sign up</title>
      </Head>
      <div className="aspect-[1/0.8] flex justify-center items-center relative before:content-[''] before:w-[150%] before:absolute before:top-0 before:left-0 before:-translate-x-[30%] before:-translate-y-[50%] before:aspect-square before:bg-primary before:rounded-full before:-z-10">
        <span className="text-white text-4xl">Sign up</span>
      </div>
      <div className="bg-white">
        <SignupForm />
      </div>
    </main>
  );
}
