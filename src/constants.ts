export const API_URI = process.env.NEXT_PUBLIC_API_URI || "";

if (!API_URI) {
  throw new Error("env variable NEXT_PUBLIC_API_URI is not given");
}
