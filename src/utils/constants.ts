export enum VacancyCategory {
  ALL = "all",
  OFFICE = "office",
  SHOP = "shop",
  WAREHOUSE = "warehouse",
  LOGISTIC = "logistic",
}

export const Career_Filters = [
  {
    label: "career.category.all",
    value: VacancyCategory.ALL,
  },
  {
    label: "career.category.office",
    value: VacancyCategory.OFFICE,
  },
  {
    label: "career.category.logistic",
    value: VacancyCategory.LOGISTIC,
  },
  {
    label: "career.category.warehouse",
    value: VacancyCategory.WAREHOUSE,
  },
  {
    label: "career.category.shop",
    value: VacancyCategory.SHOP,
  },
];
