import CareerDetails from "@/components/CareerDetails/CareerDetails";

import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function CareerDetailsPage() {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return <CareerDetails />;
}
