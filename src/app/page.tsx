"use client";
import { useEffect } from "react";

import {
  fetchMetrics,
  fetchRecentStreams,
  fetchRevenueSources,
  fetchTopSongs,
  fetchUserGrowth,
} from "@/services/apiService";

export default function Home() {
  useEffect(() => {
    const test = async () => {
      try {
        const metrics = await fetchMetrics();
        console.log(metrics);

        const recentStreams = await fetchRecentStreams();
        console.log(recentStreams);

        const revenueSources = await fetchRevenueSources();
        console.log(revenueSources);

        const topSongs = await fetchTopSongs();
        console.log(topSongs);

        const userGrowth = await fetchUserGrowth();
        console.log(userGrowth);
      } catch (error) {
        console.error(error);
      }
    };

    test();
  }, []);

  return <main>hellooo</main>;
}
