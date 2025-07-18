// import { NextRequest } from 'next/server'

import { NextRequest, NextResponse } from 'next/server'

// export function middleware(request: NextRequest) {
//   console.log('@@@', request.nextUrl.pathname)
// }

// export const config = {
//   matcher: ['/About/:path*', '/Dashboard'],
// }

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/About')) {
    return NextResponse.rewrite(new URL('About-2', request.url))
  }
  if (request.nextUrl.pathname.startsWith('/Dashboard')) {
    return NextResponse.rewrite(new URL('Dashboard/user', request.url))
  }
}
