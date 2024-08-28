const BASE_URL = "/api";

export async function fetchMetrics() {
  const response = await fetch(`${BASE_URL}/metrics`);
  if (!response.ok) {
    throw new Error("Failed to fetch metrics");
  }
  return response.json();
}

export async function fetchRecentStreams() {
  const response = await fetch(`${BASE_URL}/recent-streams`);
  if (!response.ok) {
    throw new Error("Failed to fetch recent streams");
  }
  return response.json();
}

export async function fetchRevenueSources() {
  const response = await fetch(`${BASE_URL}/revenue-sources`);
  if (!response.ok) {
    throw new Error("Failed to fetch revenue sources");
  }
  return response.json();
}

export async function fetchTopSongs() {
  const response = await fetch(`${BASE_URL}/top-songs`);
  if (!response.ok) {
    throw new Error("Failed to fetch top songs");
  }
  return response.json();
}

export async function fetchUserGrowth() {
  const response = await fetch(`${BASE_URL}/user-growth`);
  if (!response.ok) {
    throw new Error("Failed to fetch user growth");
  }
  return response.json();
}
