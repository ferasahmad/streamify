import { NextResponse } from "next/server";
import topSongs from "@/mockData/top-songs";

export async function GET() {
  return NextResponse.json(topSongs);
}
