import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // The maps prefix is the live-map proxy and carries no locale
  matcher: ["/((?!api|maps|_next|_vercel|.*\\..*).*)"],
};
