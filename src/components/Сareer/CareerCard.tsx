import { Clock, Flame, MapPin, Sparkle } from "lucide-react";
import styles from "./Career.module.scss";

interface CarrerCardProps {
  label: string;
  location: string;
  workType: string;
  isHot?: boolean;
  withoutExperience?: boolean;
}

export default function CareerCard({
  label,
  location,
  workType,
  isHot,
  withoutExperience,
}: CarrerCardProps) {
  return (
    <div className={styles.card_root}>
      <h5>{label}</h5>
      <div className={styles.buttons}>
        <button>
          <MapPin size={22} /> {location}
        </button>
        <button>
          <Clock /> {workType}
        </button>
        {isHot && (
          <button>
            <Flame /> Гаряча вакансія
          </button>
        )}
        {withoutExperience && (
          <button>
            <Sparkle /> Без досвіду
          </button>
        )}
      </div>
    </div>
  );
}
