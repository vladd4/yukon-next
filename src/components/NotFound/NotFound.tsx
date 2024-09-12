import styles from "./NotFound.module.scss";

import { FC } from "react";

import ImageSrc from "@/../public/404.png";
import { Link } from "@/navigation";

import Image from "next/image";
import { useTranslations } from "next-intl";

const NotFound: FC = () => {
  const t = useTranslations();
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <Image alt="Not Found" src={ImageSrc} />
        <p>{t("not_found")}</p>
        <Link href="/">{t("not_found_btn")}</Link>
      </article>
    </section>
  );
};

export default NotFound;
