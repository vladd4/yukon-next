import News from "@/components/NewsBlock/News";
import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function NewsPage() {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return <News isAll />;
}
