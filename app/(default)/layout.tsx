"use client";

import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  return (
    <body
      className={cn(
        "bg-primary-50 text-primary-950 antialiased transition dark:bg-primary-950 dark:text-primary-200",
        inter.variable,
      )}
    >
      <ThemeProvider defaultTheme="system" enableSystem disableTransitionOnChange>
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </body>
  );
}
