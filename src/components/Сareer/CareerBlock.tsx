import styles from "./Career.module.scss";
import CareerCard from "./CareerCard";

export default function CareerBlock() {
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <div className={styles.heading_block}>
          <div className={styles.text}>
            <h1>Приєднатися до команди мрії</h1>
            <p>
              Національна торговельна мережа магазинів «АТБ-маркет» в зв'язку з
              набором до магазинів м. Чернігів, запрошує на роботу
            </p>
          </div>
          <div className={styles.filter_block}>
            <button className={styles.active}>Всі вакансії</button>
            <button>Офіс</button>
            <button>Магазин</button>
            <button>Склад</button>
          </div>
        </div>
        <div className={styles.cards_block}>
          <CareerCard
            label="Архітектор"
            location="Ковель"
            workType="Повна зайнятість"
            isHot
            withoutExperience
          />
          <CareerCard
            label="Продавець-консультант"
            location="Ковель"
            workType="Повна зайнятість"
          />
          <CareerCard
            label="Молодший приймальник товарів м.Луцьк"
            location="Луцьк"
            workType="Повна зайнятість"
          />
          <CareerCard
            label="Архітектор"
            location="Ковель"
            workType="Повна зайнятість"
            isHot
          />
          <CareerCard
            label="Архітектор"
            location="Ковель"
            workType="Повна зайнятість"
          />
          <CareerCard
            label="Архітектор"
            location="Ковель"
            workType="Повна зайнятість"
          />
        </div>
      </article>
    </section>
  );
}
