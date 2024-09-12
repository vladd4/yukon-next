import createMiddleWare from "next-intl/middleware";
import { locales } from "./config";

const nextIntlMiddleWare = createMiddleWare({
  locales,
  defaultLocale: "uk",
  localePrefix: "always",
  localeDetection: false,
});

export default function (req: any) {
  return nextIntlMiddleWare(req);
}

export const config = {
  matcher: ["/", "/(uk|en)/:path*"],
};
