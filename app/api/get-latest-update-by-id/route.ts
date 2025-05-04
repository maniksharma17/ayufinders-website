export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { getLatestUpdatesById } from "@/lib/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id")?.trim();
  
  try {
    const results = await getLatestUpdatesById(
      id as string
    );
    console.log(id)
    return NextResponse.json(results);
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
