import { NextResponse } from "next/server"; //* custom next.js web api to responses with extra features
// import { headers } from 'next/headers' //* for working with headers
import type { NextRequest } from 'next/server'

// import { redirect } from 'next/navigation'
// export async function GET(request: Request) {
//   redirect('https://nextjs.org/')
// } //* for redirecting.

export async function GET(
  request: NextRequest,
  { params }: { params: { user: string } }
) {
  const { user } = params;
  return NextResponse.json(
    { message: `wellcome username : ${user} ${user}` },
    { status: 200 }
  );
}

export const fetchCache = 'force-no-store'
// 'auto' | 'default-cache' | 'only-cache'
// 'force-cache' | 'force-no-store' | 'default-no-store' | 'only-no-store'