import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { NavigationMenuDemo } from "@/components/custom/navbar";
import clsx from "clsx";
const inter = Inter({ subsets: ["latin"] });
import StoreProvider from "@/store/index";

export const metadata: Metadata = {
  title: "Next Practice",
  description: "React-hook-forms | Framer-Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx({
          "container": true,
        })}
      >
        <ThemeProvider attribute="class">
          <NavigationMenuDemo></NavigationMenuDemo>
          <StoreProvider>{children}</StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
