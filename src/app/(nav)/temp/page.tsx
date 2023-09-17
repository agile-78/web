const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
export default async function () {
  await delay(100000000);

  return <div>loading finished</div>;
}
