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
