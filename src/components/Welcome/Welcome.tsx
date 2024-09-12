import styles from "./Welcome.module.scss";

import Arrow from "@/../public/arrow.png";

import Image from "next/image";
import { useTranslations } from "next-intl";

const Welcome = () => {
  const t = useTranslations();
  return (
    <section className={styles.root} id="main">
      <article className={styles.wrapper}>
        <div>
          <h1>{t("welcome_text")}</h1>
        </div>
      </article>
      <Image alt="Arrow" src={Arrow} width={36} height={21} />
    </section>
  );
};

export default Welcome;
