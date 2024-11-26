"use client";

import { vacancies } from "@/static_store/vacancies";
import styles from "./Career.module.scss";
import CareerCard from "./CareerCard";
import CarrerFilters from "./CareerFilters";
import { useState, useEffect } from "react";
import { Career_Filters, VacancyCategory } from "@/utils/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppSelector } from "@/hooks/redux-hooks";
import { useTranslations } from "next-intl";

export default function CareerBlock() {
  const params = useSearchParams();
  const router = useRouter();

  const t = useTranslations();

  const [activeFilter, setActiveFilter] = useState<string>(
    params.get("type") || Career_Filters[0].value
  );

  const filteredSlice = useAppSelector((state) => state.search);

  const filteredVacancies = vacancies.filter(
    (item) =>
      item.category === activeFilter || activeFilter === VacancyCategory.ALL
  );

  useEffect(() => {
    const currentType = params.get("type") || Career_Filters[0].value;
    setActiveFilter(currentType);
  }, [params]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("type", activeFilter);
    router.push(`?${queryParams.toString()}`, undefined);
  }, [activeFilter, router]);

  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <div className={styles.heading_block}>
          <div className={styles.text}>
            <h1>{t("career.heading")}</h1>
            <p>{t("career.description")}</p>
          </div>
          <CarrerFilters
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>
        <div className={styles.cards_block}>
          {filteredSlice.filteredVacancies !== null ? (
            filteredSlice.filteredVacancies.length > 0 ? (
              filteredSlice.filteredVacancies.map((item) => (
                <CareerCard
                  key={item.id}
                  vacancyId={item.id}
                  label={item.heading}
                  location={item.location}
                  isFullTime={item.isFullTime}
                  isHot={item.isHot}
                  isMilitaryFree={item.isMilitaryFree}
                  withEducation={item.education}
                  withoutExperience={item.withoutExperience}
                />
              ))
            ) : (
              <p className={styles.no_data}>{t("career.no_filtered_data")}</p>
            )
          ) : filteredVacancies.length > 0 ? (
            filteredVacancies.map((item) => (
              <CareerCard
                key={item.id}
                vacancyId={item.id}
                label={item.heading}
                location={item.location}
                isFullTime={item.isFullTime}
                isHot={item.isHot}
                isMilitaryFree={item.isMilitaryFree}
                withEducation={item.education}
                withoutExperience={item.withoutExperience}
              />
            ))
          ) : (
            <p className={styles.no_data}>{t("career.no_data")}</p>
          )}
        </div>
      </article>
    </section>
  );
}
