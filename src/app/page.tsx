"use client";

import React, { useEffect } from "react";
import KeyMetrics from "@/components/sections/KeyMetrics";
import { useDataContext } from "@/context/DataContext";
import TopArtist from "@/components/sections/TopArtist";
import RevenueSourcesPieChart from "@/components/sections/RevenueSourcesPieChart";
import TopSongsBarChart from "@/components/sections/TopSongsBarChart";
import UserGrowthChart from "@/components/sections/UserGrowthChart";
import RecentStreamsTable from "@/components/sections/RecemtStreamsTable";
import LoadingSpinner from "@/components/custom/LoadingSpinner";

export default function Home() {
  const {
    metrics,
    recentStreams,
    revenueSources,
    topSongs,
    userGrowth,
    loading,
    errors,
  } = useDataContext();

  useEffect(() => {
    const errorMessages = Object.entries(errors)
      .filter(([, error]) => error)
      .map(([key, error]) => `Error loading ${key}: ${error}`)
      .join("\n");

    if (errorMessages) {
      alert(errorMessages);
    }
  }, [errors]);

  if (loading)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.flexItem}>
          {!errors.metrics && <KeyMetrics metrics={metrics} />}
        </div>
        <div className={classes.topArtistContainer}>
          {!errors.metrics && (
            <TopArtist
              artistImage={metrics.artistImage}
              topArtist={metrics.topArtist}
            />
          )}
        </div>
        <div className={classes.revenueSourcesContainer}>
          {!errors.revenueSources && (
            <RevenueSourcesPieChart revenueSources={revenueSources} />
          )}
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.flexItem}>
          {!errors.topSongs && <TopSongsBarChart topSongs={topSongs} />}
        </div>
        <div className={classes.flexItem}>
          {!errors.userGrowth && <UserGrowthChart userGrowth={userGrowth} />}
        </div>
      </div>
      <div className={classes.flexItem}>
        {!errors.recentStreams && (
          <RecentStreamsTable recentStreams={recentStreams} />
        )}
      </div>
    </div>
  );
}

const classes = {
  container: "flex flex-wrap justify-center w-full gap-2 md:gap-4",
  row: "flex md:flex-row flex-col gap-2 md:gap-4 w-full",
  flexItem: "flex-1",
  topArtistContainer: "flex relative xl:flex-1 flex-1 overflow-hidden",
  revenueSourcesContainer: "xl:flex-1 w-full flex-1",
};
