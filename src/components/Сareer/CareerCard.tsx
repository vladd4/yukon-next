"use client";

import { Clock, Flame, MapPin, Shield, Sparkle } from "lucide-react";
import styles from "./Career.module.scss";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

interface CarrerCardProps {
  label: string;
  location: string;
  isFullTime: boolean;
  isHot?: boolean;
  withoutExperience?: boolean;
  isMilitaryFree?: boolean;
  vacancyId: string;
}

export default function CareerCard({
  label,
  location,
  isFullTime,
  isHot,
  withoutExperience,
  isMilitaryFree,
  vacancyId,
}: CarrerCardProps) {
  const router = useRouter();

  const locale = useLocale();

  const handleVacancyClick = () => {
    router.push(`/${locale}/career/vacancy?id=${vacancyId}`);
  };

  return (
    <div className={styles.card_root} onClick={handleVacancyClick}>
      <h5>{label}</h5>
      <div className={styles.buttons}>
        <button>
          <MapPin size={18} /> {location}
        </button>
        <button>
          <Clock size={18} />{" "}
          {isFullTime ? "Повна зайнятість" : "Неповна зайнятість"}
        </button>
        {isHot && (
          <button>
            <Flame size={18} fill="#e78526" /> Гаряча вакансія
          </button>
        )}
        {withoutExperience && (
          <button>
            <Sparkle size={18} /> Без досвіду
          </button>
        )}
        {isMilitaryFree && (
          <button>
            <Shield size={18} /> Надаємо бронь
          </button>
        )}
      </div>
    </div>
  );
}
