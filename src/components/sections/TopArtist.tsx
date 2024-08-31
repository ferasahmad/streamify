"use client";

import React from "react";
import CardTitleAndDescription from "../custom/CardTitleAndDescription";

interface TopArtistProps {
  artistImage: string;
  topArtist: string;
}

export default function TopArtist({ artistImage, topArtist }: TopArtistProps) {
  return (
    <div className={classes.container}>
      <img src={artistImage} alt="Artist" className={classes.artistImage} />
      <div className={classes.gradientOverlay} />
      <div className={classes.artistInfo}>
        <CardTitleAndDescription
          title={topArtist}
          description="Top artist this month."
        />
      </div>
    </div>
  );
}

const classes = {
  container: "relative w-full h-full",
  artistImage: "w-full h-full object-cover rounded-lg",
  gradientOverlay:
    "absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg",
  artistInfo: "absolute bottom-0 p-4",
};
