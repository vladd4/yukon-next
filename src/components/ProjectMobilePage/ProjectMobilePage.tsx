import { MoveRight } from "lucide-react";
import styles from "./MobilePage.module.scss";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { news } from "@/static_store/news";
import { projects } from "@/static_store/projects";
import Loader from "../Loader";

interface MobileProps {
  id: string;
  isNews?: boolean;
}

const ProjectMobilePage = ({ id, isNews }: MobileProps) => {
  const t = useTranslations();

  const detail_item = isNews
    ? news.find((item) => item.id === id)
    : projects.find((item) => item.id === id);

  return detail_item ? (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <div className={styles.group_block}>
          <Image
            alt="Project"
            width={1200}
            height={1200}
            src={detail_item.image}
          />
          <div className={styles.text}>
            <h1>{t(detail_item.heading)}</h1>
            <div className={styles.p}>
              {t.rich(detail_item.description, {
                b: (chunks) => <b>{chunks}</b>,
                p: (chunks) => <p>{chunks}</p>,
                div: (chunks) => <div>{chunks}</div>,
              })}
            </div>
            <a target="_blank" rel="noreferrer" href={detail_item.href}>
              {t("projects.link_button")} <MoveRight />
            </a>
          </div>
        </div>
        <div className={styles.group_block_text}>
          <div className={styles.text}>
            <h1>{t(detail_item.heading)}</h1>
            <div className={styles.p}>
              {t.rich(detail_item.description, {
                b: (chunks) => <b>{chunks}</b>,
                p: (chunks) => <p>{chunks}</p>,
                div: (chunks) => <div>{chunks}</div>,
              })}
            </div>
          </div>
        </div>
        <div className={styles.group_block_photo}>
          <Image
            alt="Project"
            width={1200}
            height={1200}
            src={detail_item.image}
          />
          <Image
            alt="Project"
            width={1200}
            height={1200}
            src={detail_item.image}
          />
        </div>
        {detail_item.date && (
          <p className={styles.author}>Admin, {detail_item.date}</p>
        )}
      </article>
    </section>
  ) : (
    <Loader />
  );
};

export default ProjectMobilePage;
