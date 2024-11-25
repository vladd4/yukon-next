"use client";

import styles from "./Career.module.scss";
import { Career_Filters } from "@/utils/constants";
import SearchBar from "./SearchBar";

interface FilterProps {
  activeFilter: string;
  setActiveFilter: (arg: string) => void;
}

export default function CareerFilters({
  activeFilter,
  setActiveFilter,
}: FilterProps) {
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className={styles.filter_block}>
      <div className={styles.left_block}>
        {Career_Filters.map((filter) => (
          <button
            key={filter.value}
            className={`${filter.value === activeFilter ? styles.active : ""}`}
            onClick={() => handleFilterChange(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <SearchBar activeFilter={activeFilter} />
    </div>
  );
}
