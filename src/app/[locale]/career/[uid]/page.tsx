import CareerDetails from "@/components/CareerDetails/CareerDetails";
import CareerForm from "@/components/ContactForm/CareerForm";
import { vacancies } from "@/static_store/vacancies";

import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

interface CareerDetailsProps {
  searchParams: any;
}

export default function CareerDetailsPage({
  searchParams,
}: CareerDetailsProps) {
  const locale = useLocale();
  unstable_setRequestLocale(locale);

  const vacancyId = searchParams.id;
  const vacancy = vacancies.find((item) => item.id === vacancyId);

  return (
    <>
      <CareerDetails vacancy={vacancy} />
      <CareerForm vacancy={vacancy} />
    </>
  );
}
