import Image from "next/image";

export function Loading() {
  return (
    <div
      id="loading"
      className="h-screen w-screen flex flex-col justify-center items-center"
    >
      <p className="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white">
        Loading
      </p>
      <Image
        src="/bt21-koya.gif"
        width={100}
        height={100}
        alt="loading animation"
        className="mx-auto"
      />
    </div>
  );
}
