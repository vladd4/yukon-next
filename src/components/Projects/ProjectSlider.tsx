"use client";

import styles from "./Projects.module.scss";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import Project from "./Project";

import { projects } from "../../static_store/projects";
import { useTranslations } from "next-intl";

const ProjectSlider = () => {
  const t = useTranslations();
  return (
    <section className={styles.root} id="projects">
      <article className={styles.wrapper}>
        <h2>{t("projects.heading")}</h2>
        <Splide
          options={{
            height: "auto",
            drag: true,
            perPage: 3,
            gap: "3%",
            autoplay: false,
            pagination: true,
            arrows: true,
            breakpoints: {
              1100: {
                perPage: 2,
              },
              750: {
                perPage: 1,
              },
            },
          }}
          className={styles.slider}
          id="project-swiper"
        >
          {projects.map((project) => {
            return (
              <SplideSlide key={project.id}>
                <Project
                  isNews={false}
                  id={project.id}
                  backImage={project.image.src}
                  heading={project.heading}
                  description={project.description}
                  href={project.href}
                  isBlured={project.isBlured}
                />
              </SplideSlide>
            );
          })}
        </Splide>
      </article>
    </section>
  );
};

export default ProjectSlider;
