"use client";

import { vacancies } from "@/static_store/vacancies";
import styles from "./Career.module.scss";
import CareerCard from "./CareerCard";
import CarrerFilters from "./CareerFilters";
import { useState, useEffect } from "react";
import { Career_Filters, VacancyCategory } from "@/utils/constants";
import { useSearchParams } from "next/navigation";
import { useAppSelector } from "@/hooks/redux-hooks";

export default function CareerBlock() {
  const params = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<string>(
    params.get("type") || Career_Filters[0].value
  );

  const filteredSlice = useAppSelector((state) => state.search);

  const filteredVacancies = vacancies.filter(
    (item) =>
      item.category === activeFilter || activeFilter === VacancyCategory.ALL
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("type", activeFilter);
    window.history.replaceState(null, "", `?${params.toString()}`);
  }, [activeFilter]);

  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <div className={styles.heading_block}>
          <div className={styles.text}>
            <h1>Приєднуйтесь до нашої команди</h1>
            <p>
              Ми шукаємо талановитих та мотивованих спеціалістів, які прагнуть
              професійного розвитку і готові розвиватися разом з нами. Якщо ви
              маєте бажання вчитися, брати на себе нові виклики та поділяєте
              наші цінності та корпоративну культуру, ми раді запропонувати вам
              можливість для професійного та особистісного зростання.
              Приєднуйтесь до нас і разом ми будемо створювати майбутнє!
            </p>
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
              <p className={styles.no_data}>
                Щодних вакансій за Вашим пошуком не знайдено.
              </p>
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
            <p className={styles.no_data}>
              Вакансій за заданим фільтром скоро з'являться, очікуйте.
            </p>
          )}
        </div>
      </article>
    </section>
  );
}
