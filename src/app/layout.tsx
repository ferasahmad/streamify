"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { DataProvider } from "@/context/DataContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>
          <header className="w-full p-4 pb-0 flex items-center">
            <Image
              src={"/logo.png"}
              width={50}
              height={50}
              alt="Streamify Logo"
            />
            <p className="ml-2 text-3xl text-white font-medium">Streamify</p>
          </header>
          <div className="lg:px-20 md:px-10 sm:px-4 px-2 py-12">{children}</div>
        </DataProvider>
      </body>
    </html>
  );
}
