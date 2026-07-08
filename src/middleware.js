import { NextResponse } from "next/server";

export function middleware(request) {
  const sessionToken = request.cookies.get("studio_session")?.value;
  const { pathname } = request.nextUrl;

  // 1. Protect Dashboard: Redirect to login if not authenticated
  if (pathname.startsWith("/admin/dashboard")) {
    if (!sessionToken || sessionToken !== "authenticated") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  // 2. Prevent Login page access: Redirect already logged-in users to dashboard
  if (pathname === "/admin") {
    if (sessionToken === "authenticated") {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

// Specify matching routes to optimize middleware execution
export const config = {
  matcher: ["/admin", "/admin/dashboard/:path*"],
};
