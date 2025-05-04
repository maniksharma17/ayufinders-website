export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { getRelatedColleges } from "@/lib/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const state_id = searchParams.get("state_id")?.trim();
  const city_id = searchParams.get("city_id")?.trim();
  const category_id = searchParams.get("category_id")?.trim();
  
  try {
    const results = await getRelatedColleges(
      state_id as string,
      category_id as string,
      city_id as string
    );
    return NextResponse.json(results);
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
