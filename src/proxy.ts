import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, localizedHref } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const destination = request.nextUrl.clone();

  destination.pathname = localizedHref(defaultLocale, destination.pathname);

  return NextResponse.redirect(destination);
}

export const config = {
  matcher: ["/", "/about", "/project/:path*"],
};
