import NotFound from "@/components/NotFound/NotFound";
import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function NotFoundPage() {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return <NotFound />;
}
