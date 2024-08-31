"use client";

import React, { useEffect } from "react";
import KeyMetrics from "@/components/sections/KeyMetrics";
import { useDataContext } from "@/context/DataContext";
import TopArtist from "@/components/sections/TopArtist";
import RevenueSourcesPieChart from "@/components/sections/RevenueSourcesPieChart";
import TopSongsBarChart from "@/components/sections/TopSongsBarChart";
import UserGrowthChart from "@/components/sections/UserGrowthChart";
import RecentStreamsTable from "@/components/sections/RecemtStreamsTable";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-wrap justify-center w-full gap-2">
      <div className="flex md:flex-row flex-col gap-2 w-full">
        <div className="xl:flex-1 flex-1">
          <KeyMetrics metrics={metrics} />
        </div>
        <div className="flex relative xl:flex-1 flex-1 overflow-hidden">
          <TopArtist
            artistImage={metrics.artistImage}
            topArtist={metrics.topArtist}
          />
        </div>
        <div className="xl:flex-1 w-full flex-1">
          <RevenueSourcesPieChart revenueSources={revenueSources} />
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-2 w-full">
        <div className="flex-1">
          <TopSongsBarChart topSongs={topSongs} />
        </div>
        <div className="flex-1">
          <UserGrowthChart userGrowth={userGrowth} />
        </div>
      </div>
      <div className="flex-1">
        <RecentStreamsTable recentStreams={recentStreams} />
      </div>
    </div>
  );
}
