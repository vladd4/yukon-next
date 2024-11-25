import { vacancies } from "@/static_store/vacancies";
import { VacancyCategory } from "./constants";
import { setFilteredVacancies } from "@/redux/slices/searchSlice";
import { AppDispatch } from "@/redux/store";

export const searchVacancyByName = (
  searchValue: string,
  activeCategory: VacancyCategory,
  dispatch: AppDispatch
) => {
  const normalizedSearchTerm = searchValue.toLowerCase().replace(/\s+/g, "");

  const filteredVacancies = vacancies.filter((item) => {
    const normalizedHeading = item.heading.toLowerCase().replace(/\s+/g, "");

    const matchesSearchTerm = normalizedHeading.includes(normalizedSearchTerm);
    const matchesCategory =
      item.category === activeCategory ||
      activeCategory === VacancyCategory.ALL;

    return matchesSearchTerm && matchesCategory;
  });

  console.log(filteredVacancies);
  dispatch(setFilteredVacancies(filteredVacancies));
};
