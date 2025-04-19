"use client";

import Project from "../Projects/Project";
import styles from "./News.module.scss";

import { FC, useTransition } from "react";

import { news } from "../../static_store/news";
import { MoveRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

type NewsProps = {
  isAll: boolean;
};

const News: FC<NewsProps> = ({ isAll }) => {
  const t = useTranslations();

  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const locale = useLocale();

  const handleNewsClick = () => {
    startTransition(() => {
      router.push(`/${locale}/news`);
    });
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
          {!isAll &&
            (isPending ? (
              <p className={styles.a}>{t("loading_label")}</p>
            ) : (
              <p className={styles.a} onClick={handleNewsClick}>
                {t("news.all_news")} <MoveRight />
              </p>
            ))}
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
                    date={new_item.date}
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
                    date={new_item.date}
                  />
                );
              })}
        </div>
      </article>
    </section>
  );
};

export default News;
