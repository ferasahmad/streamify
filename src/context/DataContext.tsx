"use client";

import { Metrics, RevenueSource, Song, Stream, UserGrowth } from "@/types";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import { fetchWithCatch } from "@/utilities/fetchWithCatch";

interface DataContextType {
  metrics: Metrics;
  recentStreams: Stream[];
  revenueSources: RevenueSource[];
  topSongs: Song[];
  userGrowth: UserGrowth;
  loading: boolean;
  errors: Record<string, string | null>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<Record<string, string | null>>({
    metrics: null,
    recentStreams: null,
    revenueSources: null,
    topSongs: null,
    userGrowth: null,
  });

  const [data, setData] = useState<DataContextType>({
    metrics: {} as Metrics,
    recentStreams: [],
    revenueSources: [],
    topSongs: [],
    userGrowth: {} as UserGrowth,
    loading: true,
    errors: {
      metrics: null,
      recentStreams: null,
      revenueSources: null,
      topSongs: null,
      userGrowth: null,
    },
  });

  const fetchData = useCallback(async () => {
    setLoading(true);
    setErrors({
      metrics: null,
      recentStreams: null,
      revenueSources: null,
      topSongs: null,
      userGrowth: null,
    });

    const [metrics, recentStreams, revenueSources, topSongs, userGrowth] =
      await Promise.all([
        fetchWithCatch("/api/metrics", "metrics", setErrors),
        fetchWithCatch("/api/recent-streams", "recentStreams", setErrors),
        fetchWithCatch("/api/revenue-sources", "revenueSources", setErrors),
        fetchWithCatch("/api/top-songs", "topSongs", setErrors),
        fetchWithCatch("/api/user-growth", "userGrowth", setErrors),
      ]);

    setData((prevData) => ({
      ...prevData,
      metrics,
      recentStreams,
      revenueSources,
      topSongs,
      userGrowth,
    }));

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <DataContext.Provider value={{ ...data, loading, errors }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
