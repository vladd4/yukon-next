import styles from "./About.module.scss";

import { FC } from "react";

import Car from "@/../public/1.jpg";
import Background from "@/../public/transparent-back.webp";
import { li_items } from "../../static_store/about";
import Image from "next/image";
import { useTranslations } from "next-intl";

const About: FC = () => {
  const t = useTranslations();
  return (
    <section className={styles.root} id="about">
      <article className={styles.wrapper}>
        <div className={styles.text_block}>
          <div className={`${styles.heading} aos-init`} data-aos="zoom-in">
            <span>{t("about.span")}</span>
            <h2>{t("about.heading")}</h2>
          </div>
          <p className="aos-init" data-aos="zoom-in">
            {t("about.paragraph_1")}
          </p>
          <p className="aos-init" data-aos="zoom-in">
            {t("about.paragraph_2")}
          </p>
          <p className="aos-init" data-aos="zoom-in">
            {t("about.paragraph_3")}
          </p>
          <p className="aos-init" data-aos="zoom-in">
            {" "}
            {t("about.paragraph_4")}
          </p>
          <ul className="aos-init" data-aos="zoom-in">
            {li_items.map((item) => {
              return <li key={item}>{t(item)}</li>;
            })}
          </ul>
          <p className="aos-init" data-aos="zoom-in">
            {t("about.paragraph_5")}
          </p>
          <p className="aos-init" data-aos="zoom-in">
            {" "}
            {t("about.paragraph_6")}
          </p>
          <div className={`${styles.exp_block} aos-init`} data-aos="zoom-in">
            <span>24</span>
            <h2>{t("about.experience")}</h2>
          </div>
        </div>
        <div className={`${styles.image_block} aos-init`} data-aos="zoom-in">
          <Image alt="Yukon Company" width={1200} height={1000} src={Car} />
          <Image
            alt="Background"
            width={525}
            height={750}
            src={Background}
            className={styles.background}
          />
        </div>
      </article>
    </section>
  );
};

export default About;
