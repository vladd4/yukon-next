import type { Metadata } from "next";
import "@/styles/globals.scss";
import ReduxProvider from "@/redux/Provider";

import { NextIntlClientProvider, useMessages } from "next-intl";
import AlertForm from "@/components/ContactForm/AlertForm";
import Script from "next/script";
import React from "react";
import { locales } from "@/config";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title:
    "ЮКОН – дистриб`ютор продуктів швидкого споживання на українському ринку",
  description:
    "Дистриб`ютор продуктів швидкого споживання в Україні з великим досвідом на ринку. Наша мета - забезпечити швидке сполучення покупця і виробника, надаючи широкий асортимент і високий рівень сервісу.",
  applicationName: "ЮКОН",
  alternates: {
    canonical: "/uk",
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
    images: [
      {
        url: "https://jukon.com.ua/yukon-og.png",
        width: 1920,
        height: 910,
      },
    ],
  },
};

interface LayoutProps {
  params: {
    locale: string;
  };
  children: React.ReactNode;
}

export function generateStaticParams() {
  return locales.map((locale) => {
    locale;
  });
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<LayoutProps>) {
  const messages = useMessages();
  unstable_setRequestLocale(locale);
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
        "image": "%PUBLIC_URL%/favicon.ico",
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
      <body>
        <NextIntlClientProvider messages={messages}>
          <ReduxProvider>
            <AlertForm />
            {children}
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
