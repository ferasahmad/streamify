import { NextResponse } from "next/server";
import recentStreams from "@/mockData/recent-streams";

export async function GET() {
  return NextResponse.json(recentStreams);
}
