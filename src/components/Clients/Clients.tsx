"use client";

import styles from "./Clients.module.scss";

import { FC, useRef } from "react";

import Background from "@/../public/client-back.webp";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { clients_logo } from "../../static_store/clients";

import Arrow from "@/../public/prev-arrow.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Clients: FC = () => {
  const splideRef = useRef<Splide | null>(null);
  const t = useTranslations();
  return (
    <section className={styles.root} id="clients">
      <article className={styles.wrapper}>
        <div className={styles.heading}>
          <h2>{t("clients_heading")}</h2>
          <div className={styles.arrows}>
            <Image
              onClick={() => splideRef.current?.go("-1")}
              alt="Prev Slide"
              src={Arrow}
              width={26}
              height={46}
            />
            <Image
              onClick={() => splideRef.current?.go("+1")}
              alt="Next Slide"
              src={Arrow}
              width={26}
              height={46}
            />
          </div>
        </div>
        <Image
          className={styles.back}
          alt="Background"
          width={1920}
          height={400}
          src={Background}
        />
        <Splide
          options={{
            height: "auto",
            type: "loop",
            focus: "center",
            drag: true,
            perPage: 4,
            gap: "5%",
            autoplay: true,
            interval: 1500,
            pagination: false,
            arrows: false,

            breakpoints: {
              850: {
                perPage: 3,
              },
              650: {
                perPage: 2,
              },
            },
          }}
          ref={splideRef}
          className={styles.slider}
          id="project-swiper"
        >
          {clients_logo.map((logo) => {
            return (
              <SplideSlide key={logo}>
                <Image
                  alt="Client Logo"
                  src={logo}
                  width={300}
                  height={100}
                  className={styles.client_image}
                />
              </SplideSlide>
            );
          })}
        </Splide>
      </article>
    </section>
  );
};

export default Clients;
