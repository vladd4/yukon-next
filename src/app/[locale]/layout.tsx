import type { Metadata } from "next";
import "@/styles/globals.scss";
import ReduxProvider from "@/redux/Provider";

import { NextIntlClientProvider, useMessages } from "next-intl";
import AlertForm from "@/components/ContactForm/AlertForm";
import Script from "next/script";
import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";

import { Montserrat } from "next/font/google";
import Header from "@/components/Header/Header";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "ЮКОН – дистриб`ютор продуктів швидкого споживання на українському ринку",
  description:
    "Дистриб`ютор продуктів швидкого споживання в Україні з великим досвідом на ринку. Наша мета - забезпечити швидке сполучення покупця і виробника, надаючи широкий асортимент і високий рівень сервісу.",
  applicationName: "ЮКОН",
  alternates: {
    languages: {
      en: "/en",
      uk: "/uk",
    },
  },
  assets: ["https://jukon.com.ua"],
  openGraph: {
    title:
      "ЮКОН – дистриб`ютор продуктів швидкого споживання на українському ринку",
    description:
      "Дистриб`ютор продуктів швидкого споживання в Україні з великим досвідом на ринку. Наша мета - забезпечити швидке сполучення покупця і виробника, надаючи широкий асортимент і високий рівень сервісу.",
    type: "website",
    siteName: "ЮКОН",
  },
};

interface LayoutProps {
  params: {
    locale: string;
  };
  children: React.ReactNode;
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<LayoutProps>) {
  const messages = useMessages();
  unstable_setRequestLocale(locale);

  const canonical = `https://jukon.com.ua/${locale}`;
  return (
    <html lang={locale}>
      <head>
        <meta
          name="google-site-verification"
          content="WnnE-33pU4avcqD_KPKBShzllFpfUS-hgm4nxoYSCQA"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="canonical" href={canonical} />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.jukon.com.ua/en"
        />
        <link
          rel="alternate"
          hrefLang="uk"
          href="https://www.jukon.com.ua/uk"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.jukon.com.ua/uk"
        />
        <meta property="author" content="vladdonets" />
        <meta
          name="keywords"
          content="
            Карлгберг, Carlsberg, Львівське, пиво, обслуговування пивних установок, Пивний магазин Хміль, Рівне, Волинь, Пепсі, Сири, молокопродукти, холодні склади, Луцьк, Ковель, Комо, клуб сиру, Роллтон, АСП, Юкон-Волинь, крупи, Кегова продукція, Клепка, Вайцен, MilkStout, IPA, Golden Ale, Дольчеліні Ламбруско, Probably, Грінберген, Волинська область, Дистрибьютор Карлгберг(Carlsberg) у Волинській області, представник на Волині пива Львівське, обслуговування пивних установок, Пивний магазин Хміль, дистрибʼютор Рівне,Волинь, Дистрибʼютор Пепсі на Волині, представник Сирів та молокопродуктів,холодні склади Луцьк,Ковель,Представник Комо,клуб сиру,дистрибутор роллтон Волинська область, дистрибутор АСП Юкон-Волинь, Юкон-Волинь крупи, Кегова продукція, ТМ'Клепка'( Вайцен, MilkStout,IPA,Golden Ale), Дольчеліні Ламбруско, Probably, бельгійський Грінберген"
        />
        <link
          rel="icon"
          href="https://jukon.com.ua/favicon.ico"
          type="image/x-icon"
        />
        <Script type="application/ld+json">
          {` {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "ЮКОН – дистриб'ютор продуктів швидкого споживання на українському ринку",
        "image": "https://jukon.com.ua/favicon.ico",
        "description": "ЮКОН – дистрибуційна компанія, яка з 2000 року працює і успішно розвивається на українському ринку продуктів швидкого споживання.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.9,
          "reviewCount": 678
        }
      }  `}
        </Script>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J1820WRRC1"
        ></Script>
        <Script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());

          gtag("config", "G-J1820WRRC1");
          `}
        </Script>
      </head>
      <body className={mont.className}>
        <NextIntlClientProvider messages={messages}>
          <ReduxProvider>
            <AlertForm />
            <Header />
            {children}
            <ContactForm />
            <Footer />
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
