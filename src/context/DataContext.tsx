"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface DataContextType {
  metrics: any;
  recentStreams: any;
  revenueSources: any;
  topSongs: any;
  userGrowth: any;
  loading: boolean;
  error: string | null;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState({
    metrics: null,
    recentStreams: null,
    revenueSources: null,
    topSongs: null,
    userGrowth: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [metrics, recentStreams, revenueSources, topSongs, userGrowth] =
          await Promise.all([
            fetch("/api/metrics").then((res) => res.json()),
            fetch("/api/recent-streams").then((res) => res.json()),
            fetch("/api/revenue-sources").then((res) => res.json()),
            fetch("/api/top-songs").then((res) => res.json()),
            fetch("/api/user-growth").then((res) => res.json()),
          ]);

        setData({
          metrics,
          recentStreams,
          revenueSources,
          topSongs,
          userGrowth,
        });
      } catch (err: any) {
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ ...data, loading, error }}>
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
