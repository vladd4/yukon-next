import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

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

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return <main>{children}</main>;
}
