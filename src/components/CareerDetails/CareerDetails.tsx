import {
  Clock,
  Flame,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Shield,
  Sparkle,
} from "lucide-react";
import styles from "./CareerDetails.module.scss";
import CareerDetailsCard from "./CareerDetailsCard";
import { vacancies } from "@/static_store/vacancies";
import { Vacancy } from "@/types/vacancy.type";

interface CareerProps {
  vacancy: Vacancy | undefined;
}

export default function CareerDetails({ vacancy }: CareerProps) {
  if (!vacancy) return null;

  const hotVacancies = vacancies.filter(
    (item) => item.isHot === true && item.id !== vacancy.id
  );

  const similarVacancies = vacancies.filter(
    (item) => item.category === vacancy.category && item.id !== vacancy.id
  );

  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <div className={styles.info}>
          <h1>Вакансія - {`${vacancy.heading}, м. ${vacancy.location}`}</h1>
          <div className={styles.buttons}>
            <button>
              <MapPin size={18} /> {vacancy.location}
            </button>
            <button>
              <Clock size={18} />
              {vacancy.isFullTime ? "Повна зайнятість" : "Неповна зайнятість"}
            </button>
            {vacancy.isHot && (
              <button>
                <Flame size={18} fill="#e78526" /> Гаряча вакансія
              </button>
            )}
            {vacancy.withoutExperience && (
              <button>
                <Sparkle size={18} /> Без досвіду
              </button>
            )}
            {vacancy.isMilitaryFree && (
              <button>
                <Shield size={18} /> Надаємо бронь
              </button>
            )}
            {vacancy.education && (
              <button>
                <GraduationCap size={18} /> Сертифікати/освіта
              </button>
            )}
          </div>
          {vacancy.responsibilities && (
            <div className={styles.list_block}>
              <p>Обов'язки:</p>
              <ul>
                {vacancy.responsibilities.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </ul>
            </div>
          )}
          {vacancy.requirements && (
            <div className={styles.list_block}>
              <p>Вимоги:</p>
              <ul>
                {vacancy.requirements.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </ul>
            </div>
          )}
          {vacancy.guarantees && (
            <div className={styles.list_block}>
              <p>Гарантії:</p>
              <ul>
                {vacancy.guarantees.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </ul>
            </div>
          )}
          <div className={styles.contact_person}>
            {vacancy.contact_phone && (
              <div>
                <Phone size={30} />
                <div>
                  <p>
                    Контактна особа:{" "}
                    {vacancy.contact_person && vacancy.contact_person}{" "}
                  </p>
                  <a href={`tel:${vacancy.contact_phone}`}>
                    {vacancy.contact_phone}
                  </a>
                </div>
              </div>
            )}
            {vacancy.contact_email && (
              <div>
                <Mail size={30} />
                <div>
                  <p>Резюме на пошту:</p>
                  <a href={`mailto:${vacancy.contact_email}`}>
                    {vacancy.contact_email}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.side_block}>
          {hotVacancies.length > 0 && (
            <CareerDetailsCard
              label="career.hot_label"
              vacancies={hotVacancies}
            />
          )}
          {similarVacancies.length > 0 && (
            <CareerDetailsCard
              label="career.similar_label"
              vacancies={similarVacancies}
            />
          )}
        </div>
      </article>
    </section>
  );
}
