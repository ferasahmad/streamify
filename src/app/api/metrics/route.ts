import { NextResponse } from "next/server";
import metrics from "@/mockData/metrics";

export async function GET() {
  return NextResponse.json(metrics);
}
