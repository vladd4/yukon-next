"use client";

import styles from "./Projects.module.scss";

import { FC, useTransition } from "react";
import { MoveRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

type ProjectProps = {
  isNews: boolean;
  backImage: string;
  heading: string;
  description: string;
  href?: string;
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

  const locale = useLocale();

  const pathname = usePathname();

  const nextHref = pathname.includes("news")
    ? `news/new?id=${id}`
    : isNews
    ? `${locale}/news/new?id=${id}`
    : `${locale}/projects?id=${id}`;

  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleProjectClick = () => {
    startTransition(() => {
      router.push(nextHref);
    });
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
        {isPending ? (
          <p className={styles.a}>Loading...</p>
        ) : (
          <p className={styles.a} onClick={handleProjectClick}>
            {t("projects.more_button")} <MoveRight />
          </p>
        )}
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
