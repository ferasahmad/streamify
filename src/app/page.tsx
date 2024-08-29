"use client";

import React, { useEffect } from "react";
import KeyMetrics from "@/components/sections/KeyMetrics";
import { useDataContext } from "@/context/DataContext";

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
    <main>
      <KeyMetrics metrics={metrics} />
    </main>
  );
}
