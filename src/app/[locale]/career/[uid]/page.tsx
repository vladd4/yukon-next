import CareerDetails from "@/components/CareerDetails/CareerDetails";
import CareerForm from "@/components/ContactForm/CareerForm";
import { vacancies } from "@/static_store/vacancies";
import { Metadata } from "next";

import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { id: string };
}): Promise<Metadata> {
  const vacancyId = searchParams.id;
  const vacancy = vacancies.find((item) => item.id === vacancyId);

  if (!vacancy) {
    return {
      title:
        "Приєднуйтесь до нашої команди – ЮКОН, дистриб`ютор продуктів швидкого споживання на українському ринку",
      description:
        "Ми шукаємо талановитих та мотивованих спеціалістів, які прагнуть професійного розвитку і готові розвиватися разом з нами. Якщо ви маєте бажання вчитися, брати на себе нові виклики та поділяєте наші цінності та корпоративну культуру, ми раді запропонувати вам можливість для професійного та особистісного зростання.",
      openGraph: {
        title:
          "Приєднуйтесь до нашої команди – ЮКОН, дистриб`ютор продуктів швидкого споживання на українському ринку",
        description:
          "Ми шукаємо талановитих та мотивованих спеціалістів, які прагнуть професійного розвитку і готові розвиватися разом з нами. Якщо ви маєте бажання вчитися, брати на себе нові виклики та поділяєте наші цінності та корпоративну культуру, ми раді запропонувати вам можливість для професійного та особистісного зростання.",
        type: "website",
        siteName: "ЮКОН",
        images: [
          {
            url: "https://jukon.com.ua/og-career.webp",
            width: 1920,
            height: 910,
          },
        ],
      },
    };
  }

  return {
    title: `${vacancy.heading}, м. ${vacancy.location}`,
    description:
      "Ми шукаємо талановитих та мотивованих спеціалістів, які прагнуть професійного розвитку і готові розвиватися разом з нами. Якщо ви маєте бажання вчитися, брати на себе нові виклики та поділяєте наші цінності та корпоративну культуру, ми раді запропонувати вам можливість для професійного та особистісного зростання.",
    openGraph: {
      title: `${vacancy.heading}, м. ${vacancy.location}`,
      description:
        "Ми шукаємо талановитих та мотивованих спеціалістів, які прагнуть професійного розвитку і готові розвиватися разом з нами. Якщо ви маєте бажання вчитися, брати на себе нові виклики та поділяєте наші цінності та корпоративну культуру, ми раді запропонувати вам можливість для професійного та особистісного зростання.",
      images: ["https://jukon.com.ua/og-career.webp"],
    },
  };
}

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
