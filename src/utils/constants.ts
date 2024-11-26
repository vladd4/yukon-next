export enum VacancyCategory {
  ALL = "all",
  OFFICE = "office",
  SHOP = "shop",
  WAREHOUSE = "warehouse",
  LOGISTIC = "logistic",
}

export const Career_Filters = [
  {
    label: "Всі вакансії",
    value: VacancyCategory.ALL,
  },
  {
    label: "Офіс",
    value: VacancyCategory.OFFICE,
  },
  {
    label: "Логістика",
    value: VacancyCategory.LOGISTIC,
  },
  {
    label: "Склад",
    value: VacancyCategory.WAREHOUSE,
  },
  {
    label: "Заклади",
    value: VacancyCategory.SHOP,
  },
];
