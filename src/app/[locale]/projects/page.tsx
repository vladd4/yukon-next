import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProjectMobilePage from "@/components/ProjectMobilePage/ProjectMobilePage";
import { projects } from "@/static_store/projects";
import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({ searchParams }: any) {
  const projectsId = searchParams.id;

  const project_item = projects.find((item) => item.id === projectsId);

  if (project_item) {
    return {
      title: `${project_item.heading} - ЮКОН`,
      description: project_item.meta_description,
      openGraph: {
        title: `${project_item.heading} - ЮКОН`,
        description: project_item.meta_description,
        images: [project_item.image],
      },
    };
  } else return null;
}

interface ProjectDetailsProps {
  searchParams: any;
}

export default function ProjectDetails({ searchParams }: ProjectDetailsProps) {
  const newsId = searchParams.id;
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return (
    <>
      <Header />
      <ProjectMobilePage id={newsId} />
      <ContactForm />
      <Footer />
    </>
  );
}
