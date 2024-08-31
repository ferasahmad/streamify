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
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.flexItem}>
          <KeyMetrics metrics={metrics} />
        </div>
        <div className={classes.topArtistContainer}>
          <TopArtist
            artistImage={metrics.artistImage}
            topArtist={metrics.topArtist}
          />
        </div>
        <div className={classes.revenueSourcesContainer}>
          <RevenueSourcesPieChart revenueSources={revenueSources} />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.flexItem}>
          <TopSongsBarChart topSongs={topSongs} />
        </div>
        <div className={classes.flexItem}>
          <UserGrowthChart userGrowth={userGrowth} />
        </div>
      </div>
      <div className={classes.flexItem}>
        <RecentStreamsTable recentStreams={recentStreams} />
      </div>
    </div>
  );
}

const classes = {
  container: "flex flex-wrap justify-center w-full gap-2",
  row: "flex md:flex-row flex-col gap-2 w-full",
  flexItem: "flex-1",
  topArtistContainer: "flex relative xl:flex-1 flex-1 overflow-hidden",
  revenueSourcesContainer: "xl:flex-1 w-full flex-1",
};
