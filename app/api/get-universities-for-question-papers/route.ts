import { NextRequest, NextResponse } from 'next/server';
import { getUniversitiesForQuestionPapers } from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const results = await getUniversitiesForQuestionPapers();
    return NextResponse.json(results);
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
