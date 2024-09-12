import Header from "@/components/Header/Header";
import ProjectMobilePage from "@/components/ProjectMobilePage/ProjectMobilePage";

import { news } from "@/static_store/news";

export async function generateMetadata({ searchParams }: any) {
  const newsId = searchParams.id;

  const news_item = news.find((item) => item.id === newsId);

  if (news_item) {
    return {
      title: news_item.meta_heading,
      description: news_item.meta_description,
      openGraph: {
        title: news_item.meta_heading,
        description: news_item.meta_description,
        images: [news_item.image],
      },
    };
  } else return null;
}

interface NewsDetailsProps {
  searchParams: any;
}

export default function NewsDetails({ searchParams }: NewsDetailsProps) {
  const newsId = searchParams.id;
  return (
    <>
      <Header />
      <ProjectMobilePage id={newsId} isNews />
    </>
  );
}
