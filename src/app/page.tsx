"use client";

import React, { useEffect } from "react";
import KeyMetrics from "@/components/sections/KeyMetrics";
import { useDataContext } from "@/context/DataContext";
import TopArtist from "@/components/sections/TopArtist";
import RevenueSources from "@/components/sections/RevenueSources";

export default function Home() {
  const {
    metrics,
    recentStreams,
    revenueSources,
    topSongs,
    userGrowth,
    loading,
    error,
  } = useDataContext();

  useEffect(() => {
    if (!loading && !error) {
      console.log(recentStreams);
      console.log(revenueSources);
      console.log(topSongs);
      console.log(userGrowth);
    }
  }, [
    loading,
    error,
    metrics,
    recentStreams,
    revenueSources,
    topSongs,
    userGrowth,
  ]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-wrap justify-center w-full gap-4">
      <div className="w-full lg:w-[30%]">
        <KeyMetrics metrics={metrics} />
      </div>
      <div className="relative w-full lg:w-[30%] overflow-hidden">
        <TopArtist
          artistImage={metrics.artistImage}
          topArtist={metrics.topArtist}
        />
      </div>
      <div className="w-full lg:w-[30%]">
        <RevenueSources revenueSources={revenueSources} />
      </div>
    </div>
  );
}
