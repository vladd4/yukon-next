"use client";

import Link from "next/link";
import styles from "./CareerDetails.module.scss";
import { useLocale } from "next-intl";
import { Vacancy } from "@/types/vacancy.type";

interface CarrerCardProps {
  label: string;
  vacancies: Vacancy[];
}

export default function CareerDetailsCard({
  label,
  vacancies,
}: CarrerCardProps) {
  const locale = useLocale();

  return (
    <div className={styles.hot_cards}>
      <p className={styles.heading}>{label}</p>
      {vacancies &&
        vacancies.length > 0 &&
        vacancies.map((item) => {
          return (
            <Link
              key={item.id}
              href={`/${locale}/career/vacancy?id=${item.id}`}
              className={styles.hot_item}
            >
              {item.heading + ", " + item.location}
            </Link>
          );
        })}
      <Link href={`/${locale}/career`} className={styles.hot_item}>
        Дивитись більше
      </Link>
    </div>
  );
}
