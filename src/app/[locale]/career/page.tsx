import CareerBlock from "@/components/Сareer/CareerBlock";
import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function CareerPage() {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return <CareerBlock />;
}
