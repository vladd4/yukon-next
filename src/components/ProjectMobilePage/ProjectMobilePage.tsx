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
                a: (chunks) => (
                  <a href={chunks as string} target="_blank" rel="noreferrer">
                    {chunks}
                  </a>
                ),
              })}
            </div>
            {!detail_item.description_2 || !detail_item.image_2 ? (
              <a
                target="_blank"
                rel="noreferrer"
                href={detail_item.href}
                className={styles.inner_href}
              >
                {t("projects.link_button")} <MoveRight />
              </a>
            ) : null}
          </div>
        </div>
        {detail_item.description_2 && (
          <div className={styles.group_block_text}>
            <div className={styles.text}>
              {detail_item.heading_2 && <h1>{t(detail_item.heading_2)}</h1>}
              <div className={styles.p}>
                {t.rich(detail_item.description_2, {
                  b: (chunks) => <b>{chunks}</b>,
                  p: (chunks) => <p>{chunks}</p>,
                  div: (chunks) => <div>{chunks}</div>,
                  a: (chunks) => (
                    <a href={chunks as string} target="_blank" rel="noreferrer">
                      {chunks}
                    </a>
                  ),
                })}
              </div>
            </div>
          </div>
        )}
        {detail_item.image_2 && detail_item.image_3 ? (
          <div className={styles.group_block_photo}>
            <Image
              alt="Project"
              width={1200}
              height={1200}
              src={detail_item.image_2}
              style={{
                width: `${
                  detail_item.image_width ? detail_item.image_width : ""
                }`,
              }}
            />
            <Image
              alt="Project"
              width={1200}
              height={1200}
              src={detail_item.image_3}
              style={{
                width: `${
                  detail_item.image_width ? detail_item.image_width : ""
                }`,
              }}
            />
          </div>
        ) : detail_item.image_2 ? (
          <div className={styles.group_block_photo}>
            <Image
              alt="Project"
              width={1200}
              height={1200}
              src={detail_item.image_2}
              style={{
                width: `${
                  detail_item.image_width ? detail_item.image_width : ""
                }`,
              }}
            />
          </div>
        ) : null}

        {detail_item.description_3 && (
          <div className={styles.group_block_text}>
            <div className={styles.text}>
              {detail_item.heading_3 && <h1>{t(detail_item.heading_3)}</h1>}
              <div className={styles.p}>
                {t.rich(detail_item.description_3, {
                  b: (chunks) => <b>{chunks}</b>,
                  p: (chunks) => <p>{chunks}</p>,
                  div: (chunks) => <div>{chunks}</div>,
                  a: (chunks) => (
                    <a href={chunks as string} target="_blank" rel="noreferrer">
                      {chunks}
                    </a>
                  ),
                })}
              </div>
            </div>
          </div>
        )}
        {detail_item.image_4 && detail_item.image_5 && (
          <div className={styles.group_block_photo}>
            <Image
              alt="Project"
              width={1200}
              height={1200}
              src={detail_item.image_4}
              style={{
                width: `${
                  detail_item.image_vertical_width
                    ? detail_item.image_vertical_width
                    : ""
                }`,
              }}
            />
            <Image
              alt="Project"
              width={1200}
              height={1200}
              src={detail_item.image_5}
              style={{
                width: `${
                  detail_item.image_vertical_width
                    ? detail_item.image_vertical_width
                    : ""
                }`,
              }}
            />
          </div>
        )}
        {detail_item.description_2 || detail_item.image_2
          ? detail_item.href && (
              <a
                target="_blank"
                rel="noreferrer"
                href={detail_item.href}
                className={styles.inner_href}
              >
                {t("projects.link_button")} <MoveRight />
              </a>
            )
          : null}
      </article>
    </section>
  ) : (
    <Loader />
  );
};

export default ProjectMobilePage;
