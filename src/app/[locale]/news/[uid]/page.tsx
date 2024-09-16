import ProjectMobilePage from "@/components/ProjectMobilePage/ProjectMobilePage";

import { news } from "@/static_store/news";
import { Metadata, ResolvingMetadata } from "next";
import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata(
  { searchParams }: { searchParams: { id: string } },
  parent: Promise<ResolvingMetadata>
): Promise<Metadata> {
  const newsId = searchParams.id;

  const news_item = news.find((item) => item.id === newsId);

  if (!news_item) {
    return {
      title:
        "Останні новини – ЮКОН, дистриб`ютор продуктів швидкого споживання на українському ринку",
      description:
        "Дізнайтеся про найсвіжіші новини та події компанії ЮКОН, провідного дистриб`ютора продуктів швидкого споживання на українському ринку. Слідкуйте за оновленнями та дізнавайтеся про нові продукти, партнерства та досягнення.",
      openGraph: {
        title:
          "Останні новини – ЮКОН, дистриб`ютор продуктів швидкого споживання на українському ринку",
        description:
          "Дізнайтеся про найсвіжіші новини та події компанії ЮКОН, провідного дистриб`ютора продуктів швидкого споживання на українському ринку. Слідкуйте за оновленнями та дізнавайтеся про нові продукти, партнерства та досягнення.",
        images: [
          {
            url: "https://jukon.com.ua/og-news.webp",
          },
        ],
      },
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: news_item.meta_heading,
    description: news_item.meta_description,
    openGraph: {
      title: news_item.meta_heading,
      description: news_item.meta_description,
      images: [{ url: news_item.image.src }, ...previousImages],
    },
  };
}

interface NewsDetailsProps {
  searchParams: any;
}

export default function NewsDetails({ searchParams }: NewsDetailsProps) {
  const newsId = searchParams.id;
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return <ProjectMobilePage id={newsId} isNews />;
}
