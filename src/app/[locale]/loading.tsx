import Loader from "@/components/Loader";
import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Loading() {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return <Loader />;
}
