import { NextRequest, NextResponse } from "next/server";

// Define a type for subdomain and signup path mappings for type safety
type SubdomainSignupMap = {
  [subdomain: string]: string;
};

// Create a map of subdomains to their corresponding signup paths
const subdomainSignupMap: SubdomainSignupMap = {
  admin: "/admin/signup",
  emp: "/employee/signup",
  // Add more subdomains and signup paths as needed
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const searchParams = url.searchParams.toString()
  let hostname = req.headers

  const pathWithSearchParams = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ''
  }`

  //if subdomain exists
  // const customSubDomain = hostname
  //   .get('host')
  //   ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
  //   .filter(Boolean)[0]

  // // Check if the subdomain exists in the map
  // if (customSubDomain) {
  //   return NextResponse.rewrite(
  //     new URL(`/${customSubDomain}${pathWithSearchParams}`, req.url)
  //   )
  // }

  if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
    return NextResponse.redirect(new URL(`/agency/sign-in`, req.url))
  }

  if (
    url.pathname === '/' ||
    (url.pathname === '/site' && url.host === process.env.NEXT_PUBLIC_DOMAIN)
  ) {
    return NextResponse.rewrite(new URL('/site', req.url))
  }

  if (
    url.pathname.startsWith('/agency') ||
    url.pathname.startsWith('/subaccount')
  ) {
    return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, req.url))

  }
  if (
    url.pathname === "/" ||
    (url.pathname === "/site" && url.host === process.env.NEXT_PUBLIC_DOMAIN)
  )
    return NextResponse.rewrite(new URL("/site", req.url));
  // Options for handling no domain found:
  // - Redirect to a generic login page: return NextResponse.redirect(new URL('/login', req.url));
  // - Continue processing the request (if applicable): return NextResponse.next();
  // - Display an error message to the user: return NextResponse.json({ message: 'No matching subdomain found.' });

  // Choose the appropriate handling based on your application logic.

  // If no error handling is added here, consider using a default error handler
  // in your Next.js application to catch unhandled errors.
}

// Export the middleware for use in your Next.js application

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
