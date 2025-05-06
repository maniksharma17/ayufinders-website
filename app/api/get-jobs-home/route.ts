
import { NextRequest, NextResponse } from 'next/server';
import { getJobUpdatesHome } from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const results = await getJobUpdatesHome();
    return NextResponse.json(results);
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
