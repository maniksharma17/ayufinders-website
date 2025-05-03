export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { getQuestionPapersByFilters } from "@/lib/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const university_id = searchParams.get("university_id")?.trim();
  const year = searchParams.get("year")?.trim();
  const year_of_study = searchParams.get("year_of_study")?.trim();
  const subject_id = searchParams.get("subject_id")?.trim();

  
  try {
    const results = await getQuestionPapersByFilters(
      university_id,
      year,
      year_of_study,
      subject_id,
    );
    return NextResponse.json(results);
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
