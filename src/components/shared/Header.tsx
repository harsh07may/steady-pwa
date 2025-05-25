"use client";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "../ui/button";

function Header({ children }: React.PropsWithChildren) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="container mx-auto p-4">
      <section className="flex justify-between">
        <h1
          className={cn(
            "text-lg font-extrabold tracking-tight text-black md:text-2xl dark:text-white",
          )}
        >
          {children}
        </h1>
        <Button
          size="icon"
          className="cursor-pointer bg-neutral-100 text-black hover:bg-neutral-200 active:scale-90 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted ? (
            theme === "dark" ? (
              <SunIcon />
            ) : (
              <MoonIcon />
            )
          ) : (
            <MoonIcon />
          )}
        </Button>
      </section>
    </header>
  );
}

export default Header;
