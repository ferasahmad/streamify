import { NextResponse } from "next/server";
import revenueSources from "@/mockData/revenue-sources";

export async function GET() {
  return NextResponse.json(revenueSources);
}
