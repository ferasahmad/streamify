"use client";

import React from "react";

interface TopArtistProps {
  artistImage: string;
  topArtist: string;
}

export default function TopArtist({ artistImage, topArtist }: TopArtistProps) {
  return (
    <div className="relative w-full h-48 lg:h-full">
      <img
        src={artistImage}
        alt="Artist"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute bottom-0 text-white p-4">
        <h3 className="text-xl font-bold">{topArtist}</h3>
        <p>Top artist this month.</p>
      </div>
    </div>
  );
}
