import { NextResponse } from "next/server";
import recentStreams from "@/mockData/recent-streams";

export async function GET() {
  const sortedStreams = recentStreams.sort(
    (a, b) =>
      new Date(b.dateStreamed).getTime() - new Date(a.dateStreamed).getTime()
  );

  return NextResponse.json(sortedStreams);
}
