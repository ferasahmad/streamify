export type Metrics = {
  totalUsers: number;
  activeUsers: number;
  totalStreams: number;
  totalRevenue: number;
  topArtist: string;
  artistImage: string;
};

export type Stream = {
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
  albumCover: string;
  artistImage: string;
};

export type RevenueSource = {
  source: string;
  amount: number;
};

export type Song = {
  songName: string;
  artist: string;
  streamCount: number;
  albumCover: string;
  artistImage: string;
};

export type UserGrowth = {
  months: string[];
  totalUsers: number[];
  activeUsers: number[];
};
