"use client";

import React, { useEffect } from "react";
import KeyMetrics from "@/components/sections/KeyMetrics";
import { useDataContext } from "@/context/DataContext";
import TopArtist from "@/components/sections/TopArtist";
import RevenueSourcesPieChart from "@/components/sections/RevenueSourcesPieChart";
import TopSongsBarChart from "@/components/sections/TopSongsBarChart";
import UserGrowthChart from "@/components/sections/UserGrowthChart";

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
    <div className="flex flex-wrap justify-center w-full gap-8">
      <div className="flex gap-8 w-full">
        <div className="lg:flex-1">
          <KeyMetrics metrics={metrics} />
        </div>
        <div className="relative lg:flex-1 overflow-hidden">
          <TopArtist
            artistImage={metrics.artistImage}
            topArtist={metrics.topArtist}
          />
        </div>
        <div className="lg:flex-1">
          <RevenueSourcesPieChart revenueSources={revenueSources} />
        </div>
      </div>
      <div className="flex gap-8 w-full">
        <div className="lg:flex-1">
          <TopSongsBarChart topSongs={topSongs} />
        </div>
        <div className="lg:flex-1">
          <UserGrowthChart userGrowth={userGrowth} />
        </div>
      </div>
    </div>
  );
}
