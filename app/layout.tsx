import type { Metadata } from "next";
import { Inter as FontSans, Chakra_Petch } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Benmrad Bilel | Portfolio",
  description:
    "Benmrad Bilel's Portfolio, a software developer based in Tunisia, passionate about web development, and open-source.",
  icons: {
    icon: "/images/avatar-removebg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-slate-950 font-sans antialiased dark bg-dot-primaryColor/[0.3]",
          fontSans.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
