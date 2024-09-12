"use client";

import styles from "./Partners.module.scss";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { FC } from "react";

import { partners_logo } from "../../static_store/partners";
import Image from "next/image";

const PartnersSlider: FC = () => {
  return (
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
        pagination: true,
        arrows: true,
        breakpoints: {
          850: {
            perPage: 3,
          },
          650: {
            pagination: false,
            perPage: 2,
            arrows: false,
          },
        },
      }}
      className={styles.slider}
      id="project-swiper"
    >
      {partners_logo.map((logo) => {
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
  );
};

export default PartnersSlider;
