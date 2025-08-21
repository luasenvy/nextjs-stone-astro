import "@/styles/tailwind.css";

export const metadata = {
  title: "Stone Astro",
  description: "Stone Astro Theme",
  generator: "Next.js",
  icons: {
    icon: [{ url: "/favicon-32x32.png" }, { url: "/favicon-16x16.png" }],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      {children}
    </html>
  );
}
