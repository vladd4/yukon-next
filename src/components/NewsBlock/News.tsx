"use client";

import Project from "../Projects/Project";
import styles from "./News.module.scss";

import { FC } from "react";

import { news } from "../../static_store/news";
import { MoveRight } from "lucide-react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

type NewsProps = {
  isAll: boolean;
};

const News: FC<NewsProps> = ({ isAll }) => {
  const t = useTranslations();

  const handleNewsClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

  return (
    <section
      className={`${styles.root} ${isAll && styles.news_root}`}
      id="news"
    >
      <article className={styles.wrapper}>
        <div className={styles.heading_block}>
          <div className={styles.heading}>
            <span>{t("news.span")}</span>
            <h2>{t("news.heading")}</h2>
          </div>
          {!isAll && (
            <Link href={`/news`} onClick={handleNewsClick}>
              {t("news.all_news")} <MoveRight />
            </Link>
          )}
        </div>
        <div className={styles.news_block}>
          {isAll
            ? news.map((new_item) => {
                return (
                  <Project
                    key={new_item.id}
                    isNews
                    id={new_item.id}
                    backImage={new_item.image.src}
                    heading={new_item.heading}
                    description={new_item.description}
                    href={new_item.href}
                    isBlured={new_item.isBlured}
                  />
                );
              })
            : news.slice(0, 3).map((new_item) => {
                return (
                  <Project
                    key={new_item.id}
                    isNews
                    id={new_item.id}
                    backImage={new_item.image.src}
                    heading={new_item.heading}
                    description={new_item.description}
                    href={new_item.href}
                    isBlured={new_item.isBlured}
                  />
                );
              })}
        </div>
      </article>
    </section>
  );
};

export default News;
