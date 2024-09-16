import ProjectMobilePage from "@/components/ProjectMobilePage/ProjectMobilePage";
import { projects } from "@/static_store/projects";
import { Metadata, ResolvingMetadata } from "next";
import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata(
  { searchParams }: { searchParams: { id: string } },
  parent: Promise<ResolvingMetadata>
): Promise<Metadata> {
  const projectsId = searchParams.id;

  const project_item = projects.find((item) => item.id === projectsId);

  if (!project_item) {
    return {
      title:
        "ЮКОН – дистриб`ютор продуктів швидкого споживання на українському ринку",
      description:
        "Дистриб`ютор продуктів швидкого споживання в Україні з великим досвідом на ринку. Наша мета - забезпечити швидке сполучення покупця і виробника, надаючи широкий асортимент і високий рівень сервісу.",
      openGraph: {
        title:
          "ЮКОН – дистриб`ютор продуктів швидкого споживання на українському ринку",
        description:
          "Дистриб`ютор продуктів швидкого споживання в Україні з великим досвідом на ринку. Наша мета - забезпечити швидке сполучення покупця і виробника, надаючи широкий асортимент і високий рівень сервісу.",
      },
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${project_item.heading} - ЮКОН`,
    description: project_item.meta_description,
    openGraph: {
      title: `${project_item.heading} - ЮКОН`,
      description: project_item.meta_description,
      images: [{ url: project_item.image.src }, ...previousImages],
    },
  };
}

interface ProjectDetailsProps {
  searchParams: any;
}

export default function ProjectDetails({ searchParams }: ProjectDetailsProps) {
  const newsId = searchParams.id;
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return <ProjectMobilePage id={newsId} />;
}
