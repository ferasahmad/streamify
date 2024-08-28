import { NextResponse } from "next/server";
import userGrowth from "@/mockData/user-growth";

export async function GET() {
  return NextResponse.json(userGrowth);
}
