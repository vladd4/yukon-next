import Link from "next/link";
import styles from "./CareerDetails.module.scss";

interface CarrerCardProps {
  label: string;
  vacancies: {
    label: string;
    href: string;
  }[];
}

export default function CareerDetailsCard({
  label,
  vacancies,
}: CarrerCardProps) {
  return (
    <div className={styles.hot_cards}>
      <p className={styles.heading}>{label}</p>
      {vacancies &&
        vacancies.length > 0 &&
        vacancies.map((item) => {
          return (
            <Link key={item.href} href={item.href} className={styles.hot_item}>
              {item.label}
            </Link>
          );
        })}
    </div>
  );
}
