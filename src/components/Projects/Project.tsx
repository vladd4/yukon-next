"use client";

import styles from "./Projects.module.scss";

import { FC } from "react";
import { MoveRight } from "lucide-react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

type ProjectProps = {
  isNews: boolean;
  backImage: string;
  heading: string;
  description: string;
  href: string;
  isBlured?: boolean;
  id: string;
};

const Project: FC<ProjectProps> = ({
  backImage,
  isNews,
  heading,
  description,
  href,
  isBlured,
  id,
}) => {
  const t = useTranslations();

  const nextHref = isNews ? `/news/new?id=${id}` : `/projects?id=${id}`;

  const handleProjectClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

  return (
    <article
      className={`${styles.card_root} ${isNews ? styles.card_root_news : ""}`}
      style={{ backgroundImage: `url(${backImage})` }}
    >
      <div
        className={`${styles.card_text} ${isBlured ? styles.blured_text : ""}`}
      >
        <p className={styles.h3}>{t(heading)}</p>
        <Link
          href={nextHref}
          className={styles.hide}
          onClick={handleProjectClick}
        >
          {t("projects.more_button")} <MoveRight />
        </Link>
      </div>
      <div className={styles.hovered_block}>
        <p className={styles.h3}>{t(heading)}</p>
        <p className={styles.hover_p}>{t(description)}</p>
        <a target="_blank" rel="noreferrer" href={href} className={styles.hide}>
          {t("projects.more_button")} <MoveRight />
        </a>
      </div>
    </article>
  );
};

export default Project;
