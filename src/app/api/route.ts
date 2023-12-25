import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  
  return NextResponse.json({
    message: body
  });
}

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({
    message: 'Hi'
  });
}


