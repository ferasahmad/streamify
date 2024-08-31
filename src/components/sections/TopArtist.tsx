"use client";

import React from "react";
import CardTitleAndDescription from "../custom/CardTitleAndDescription";

interface TopArtistProps {
  artistImage: string;
  topArtist: string;
}

export default function TopArtist({ artistImage, topArtist }: TopArtistProps) {
  return (
    <div className="relative w-full h-full">
      <img
        src={artistImage}
        alt="Artist"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg" />
      <div className="absolute bottom-0 p-4">
        <CardTitleAndDescription
          title={topArtist}
          description="Top artist this month."
        />
      </div>
    </div>
  );
}
