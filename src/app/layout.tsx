import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { DataProvider } from "@/context/DataContext";
import { Metadata } from "next";
import Header from "@/components/custom/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Streamify - Analytics",
  description:
    "Streamify - A comprehensive dashboard for analyzing Streamify's music streams, top songs, revenue, and user growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>
          <Header />
          <div className={classes.content}>{children}</div>
        </DataProvider>
      </body>
    </html>
  );
}

const classes = {
  content: "lg:px-20 md:px-10 sm:px-4 px-2 py-12",
};
