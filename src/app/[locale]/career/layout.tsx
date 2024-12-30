import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Head from "next/head";

export const metadata = {
  title:
    "Приєднуйтесь до нашої команди – ЮКОН, дистриб`ютор продуктів швидкого споживання на українському ринку",
  description:
    "Шукаємо на роботу амбітних фахівців, які прагнуть розвиватися разом з нами. Якщо ви готові до нових викликів, постійного навчання та поділяєте наші цінності – переглядайте вільні вакансії та приєднуйтесь до команди, де ваш потенціал розкриється повною мірою.",
  openGraph: {
    title:
      "Приєднуйтесь до нашої команди – ЮКОН, дистриб`ютор продуктів швидкого споживання на українському ринку",
    description:
      "Шукаємо на роботу амбітних фахівців, які прагнуть розвиватися разом з нами. Якщо ви готові до нових викликів, постійного навчання та поділяєте наші цінності – переглядайте вільні вакансії та приєднуйтесь до команди, де ваш потенціал розкриється повною мірою.",
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
