import { Nav } from "@/components/nav";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <Nav />
    </div>
  );
}
