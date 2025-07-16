"use client";

import { Inter } from "next/font/google";

import { useEffect } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import getTheme from "@/lib/getTheme";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  useEffect(() => {
    const isDark = "dark" === getTheme();
    localStorage.theme = isDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  return (
    <body
      className={cn(
        "bg-primary-50 text-primary-950 antialiased transition dark:bg-primary-950 dark:text-primary-200",
        inter.variable,
      )}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  );
}
