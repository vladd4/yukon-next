import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Head from "next/head";

export const metadata = {
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

export default function CareerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`https://www.jukon.com.ua/${locale}/career`}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.jukon.com.ua/en/career"
        />
        <link
          rel="alternate"
          hrefLang="uk"
          href="https://www.jukon.com.ua/uk/career"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.jukon.com.ua/uk/career"
        />
      </Head>
      <main>{children}</main>
    </>
  );
}
