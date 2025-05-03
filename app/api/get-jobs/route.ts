export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { getLatestJobs } from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const results = await getLatestJobs();
    return NextResponse.json(results);
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
