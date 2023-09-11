import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export function Nav() {
  return (
    <nav className="fixed bottom-0 left-0">
      <ul className="relative flex pb-5 items-center justify-around w-screen">
        <li>
          <Link href="/home">
            <FontAwesomeIcon icon={["fas", "home"]} size="xl" />
          </Link>
        </li>
        <li className="absolute top-0 -translate-y-1/2">
          <Link href="/camera">
            <div className="rounded-full aspect-square bg-purple-600 p-5">
              <FontAwesomeIcon
                icon={["fas", "camera-retro"]}
                className="text-white"
                size="2xl"
              />
            </div>
            {/* <div className=" w-16 rounded-full aspect-square relative bg-purple-700 before:content-[''] before:absolute before:top-1/2 before:w-1/2 before:aspect-square before:border-black before:border-2 before:left-1/2 before:rounded-lg before:-translate-x-1/2 before:-translate-y-1/2 "></div> */}
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <FontAwesomeIcon icon={["fas", "user"]} size="xl" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
