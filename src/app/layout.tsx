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
          <header className={classes.header}>
            <Image
              src={"/logo.png"}
              width={50}
              height={50}
              alt="Streamify Logo"
            />
            <p className={classes.title}>Streamify</p>
          </header>
          <div className={classes.content}>{children}</div>
        </DataProvider>
      </body>
    </html>
  );
}

const classes = {
  header: "w-full lg:px-20 md:px-10 sm:px-4 px-2 pt-12 flex items-center",
  title: "ml-2 text-3xl text-white font-medium",
  content: "lg:px-20 md:px-10 sm:px-4 px-2 py-12",
};
