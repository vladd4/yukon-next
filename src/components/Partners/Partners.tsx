import styles from "./Partners.module.scss";

import { FC } from "react";

import Map from "@/../public/part-map.png";
import PartnersSlider from "./PartnersSlider";

import Image from "next/image";
import { useTranslations } from "next-intl";

const Partners: FC = () => {
  const t = useTranslations();
  return (
    <section className={styles.root} id="partners">
      <article className={styles.wrapper}>
        <h2>{t("partners.heading")}</h2>
        <PartnersSlider />
        <div className={styles.map_section}>
          <div className={styles.text_block}>
            <p className="aos-init" data-aos="zoom-in">
              {t("partners.paragraph")}
            </p>
            <p className="aos-init" data-aos="zoom-in">
              {t("partners.paragraph_2")}
            </p>
            <div
              className={`${styles.number_block} aos-init`}
              data-aos="zoom-in"
            >
              <div>
                <span>65+</span> {t("partners.official_partners")}
              </div>
              <div>
                <span>150+</span> {t("partners.predstavnik")}
              </div>
              <div>
                <span>500+</span> {t("partners.working_space")}
              </div>
              <div>
                <span>30+</span> {t("partners.lorry_cars")}
              </div>
              <div>
                <span>10 000+</span> м&#178; {t("partners.space")}
              </div>
              <div>
                <span>2500+</span> {t("partners.clients")}
              </div>
            </div>
          </div>
          <Image alt="Map" src={Map} width={1438} height={861} />
        </div>
      </article>
    </section>
  );
};

export default Partners;
