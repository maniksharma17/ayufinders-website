export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { searchColleges } from '@/lib/db';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get('q')?.trim();

  if (!search || search.length < 2) {
    return NextResponse.json([]); 
  }

  try {
    const results = await searchColleges(`%${search}%`);
    return NextResponse.json(results);
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
