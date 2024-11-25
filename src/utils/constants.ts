export enum VacancyCategory {
  ALL = "all",
  OFFICE = "office",
  SHOP = "shop",
  WAREHOUSE = "warehouse",
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
    label: "Магазин",
    value: VacancyCategory.SHOP,
  },
  {
    label: "Склад",
    value: VacancyCategory.WAREHOUSE,
  },
];
