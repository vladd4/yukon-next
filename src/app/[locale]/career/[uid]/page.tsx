import CareerDetails from "@/components/CareerDetails/CareerDetails";
import CareerForm from "@/components/ContactForm/CareerForm";
import Loader from "@/components/Loader";
import { vacancies } from "@/static_store/vacancies";
import { Metadata } from "next";

import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Suspense } from "react";

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
      "Шукаємо на роботу амбітних фахівців, які прагнуть розвиватися разом з нами. Якщо ви готові до нових викликів, постійного навчання та поділяєте наші цінності – переглядайте вільні вакансії та приєднуйтесь до команди, де ваш потенціал розкриється повною мірою.",
    openGraph: {
      title: `${vacancy.heading}, м. ${vacancy.location}`,
      description:
        "Шукаємо на роботу амбітних фахівців, які прагнуть розвиватися разом з нами. Якщо ви готові до нових викликів, постійного навчання та поділяєте наші цінності – переглядайте вільні вакансії та приєднуйтесь до команди, де ваш потенціал розкриється повною мірою.",
      images: ["https://jukon.com.ua/og-career.webp"],
    },
  };
}

export async function generateStaticParams() {
  return vacancies.map((vacancy) => ({
    uid: vacancy.id,
  }));
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
