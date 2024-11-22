import { Clock, Flame, MapPin, Sparkle } from "lucide-react";
import styles from "./CareerDetails.module.scss";
import CareerDetailsCard from "./CareerDetailsCard";

export default function CareerDetails() {
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <div className={styles.info}>
          <h1>Вакансія - Архітектор, Ковель</h1>
          <div className={styles.buttons}>
            <button>
              <MapPin size={22} /> Ковель
            </button>
            <button>
              <Clock /> Повна зайнятість
            </button>
            <button>
              <Flame /> Гаряча вакансія
            </button>
            <button>
              <Sparkle /> Без досвіду
            </button>
          </div>
          <p>
            Національна торговельна мережа магазинів «АТБ-маркет», в зв’язку з
            набором до діючого магазину в м. Вишневе запрошує на роботу{" "}
            <b>архітектора систем</b>
          </p>
          <div className={styles.list_block}>
            <p>Області відповідальності:</p>
            <ul>
              <li>Приймання товару на склад;</li>
              <li>
                Розстановка і пересування товарів по складу, відповідно до
                встановлених вимог.
              </li>
            </ul>
          </div>
          <div className={styles.list_block}>
            <p>Ми очікуємо:</p>
            <ul>
              <li>Приймання товару на склад;</li>
              <li>
                Розстановка і пересування товарів по складу, відповідно до
                встановлених вимог.
              </li>
            </ul>
          </div>
          <div className={styles.list_block}>
            <p>Переваги роботи в нашій компанії:</p>
            <ul>
              <li>Приймання товару на склад;</li>
              <li>
                Розстановка і пересування товарів по складу, відповідно до
                встановлених вимог.
              </li>
              <li>Приймання товару на склад;</li>
              <li>
                Розстановка і пересування товарів по складу, відповідно до
                встановлених вимог.
              </li>
              <li>Приймання товару на склад;</li>
              <li>
                Розстановка і пересування товарів по складу, відповідно до
                встановлених вимог.
              </li>
            </ul>
          </div>
          <div className={styles.list_block}>
            <p>Контактні дані:</p>
            <ul>
              <li>
                Телефон: <a href="tel:+380504801493">0504801493</a>
              </li>
              <li>
                E-mail:{" "}
                <a href="mailto:gorbenkotv@atbmarket.com">
                  gorbenkotv@atbmarket.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.side_block}>
          <CareerDetailsCard label="🔥 Гарячі вакансії" vacancies={[]} />
          <CareerDetailsCard label="Схожі вакансії" vacancies={[]} />
        </div>
      </article>
    </section>
  );
}
