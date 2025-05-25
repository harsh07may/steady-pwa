import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

import { type Metadata } from "next";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Steady | Intelligent coach",
  description:
    "Set meaningful goals, stay consistent, and build momentum without burnout.",
  openGraph: {
    title: "Steady | Intelligent coach",
    description:
      "Set meaningful goals, stay consistent, and build momentum without burnout.",
    url: "https://lexia-lang.vercel.app",
  },
};

const font = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className="hydrated antialiased">
      <body className={cn(font.className)}>
        {children}
        <Toaster theme="light" richColors />
      </body>
    </html>
  );
}
