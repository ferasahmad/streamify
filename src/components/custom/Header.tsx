import React from "react";
import Image from "next/image";
import { FilterData } from "./FilterData";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Image src={"/logo.png"} width={50} height={50} alt="Streamify Logo" />
        <p className={classes.title}>Streamify</p>
      </div>
      <FilterData />
    </header>
  );
}

const classes = {
  header:
    "w-full lg:px-20 md:px-10 sm:px-4 px-2 md:pt-12 pt-4 flex items-center justify-between",
  title: "ml-2 text-3xl text-white font-medium",
  logo: "flex items-center",
};
