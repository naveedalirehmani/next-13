import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// import { isAuthenticated } from '@lib/auth'
function isAuthenticated(request:NextRequest){
    return false
}

export default function middleware(request: NextRequest) {
    console.log("called")
    if (!isAuthenticated(request)) {
        return new NextResponse(
            JSON.stringify({ success: false, message: 'authentication failed' }),
            { status: 401, headers: { 'content-type': 'application/json' } }
        )
    }
}

// // Limit the middleware to paths starting with `/api/`
// export const config = {
//  matcher: '/api/:function*',
// }

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith('/about')) {
//     return NextResponse.rewrite(new URL('/about-2', request.url))
//   }

//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     return NextResponse.rewrite(new URL('/dashboard/user', request.url))
//   }

//   return NextResponse.redirect(new URL('/home', request.url))

// }


// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/dashboard/:path*'],
}