import { cn } from "@/lib/utils";
import React from "react";

function Header({ children }: React.PropsWithChildren) {
  return (
    <h1
      className={cn("font-extrabold tracking-tight text-black sm:text-[5rem]")}
    >
      {children}
    </h1>
  );
}

export default Header;
