"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";

interface DataContextType {
  metrics: any;
  recentStreams: any;
  revenueSources: any;
  topSongs: any;
  userGrowth: any;
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
  const [data, setData] = useState({
    metrics: null,
    recentStreams: null,
    revenueSources: null,
    topSongs: null,
    userGrowth: null,
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

    const fetchWithCatch = async (url: string, key: string) => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch ${url}`);
        return await response.json();
      } catch (err: any) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [key]: err.message || "Failed to fetch data",
        }));
        console.error(err);
        return null;
      }
    };

    const [metrics, recentStreams, revenueSources, topSongs, userGrowth] =
      await Promise.all([
        fetchWithCatch("/api/metrics", "metrics"),
        fetchWithCatch("/api/recent-streams", "recentStreams"),
        fetchWithCatch("/api/revenue-sources", "revenueSources"),
        fetchWithCatch("/api/top-songs", "topSongs"),
        fetchWithCatch("/api/user-growth", "userGrowth"),
      ]);

    setData({
      metrics,
      recentStreams,
      revenueSources,
      topSongs,
      userGrowth,
    });

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
