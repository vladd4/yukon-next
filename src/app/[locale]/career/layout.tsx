import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Head from "next/head";

export const metadata = {
  title:
    "Останні новини – ЮКОН, дистриб`ютор продуктів швидкого споживання на українському ринку",
  description:
    "Дізнайтеся про найсвіжіші новини та події компанії ЮКОН, провідного дистриб`ютора продуктів швидкого споживання на українському ринку. Слідкуйте за оновленнями та дізнавайтеся про нові продукти, партнерства та досягнення.",
  openGraph: {
    title:
      "Останні новини – ЮКОН, дистриб`ютор продуктів швидкого споживання на українському ринку",
    description:
      "Дізнайтеся про найсвіжіші новини та події компанії ЮКОН, провідного дистриб`ютора продуктів швидкого споживання на українському ринку. Слідкуйте за оновленнями та дізнавайтеся про нові продукти, партнерства та досягнення.",
    type: "website",
    siteName: "ЮКОН",
    images: [
      {
        url: "https://jukon.com.ua/og-news.webp",
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
