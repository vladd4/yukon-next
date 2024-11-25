"use client";

import { Search } from "lucide-react";
import React, { useState } from "react";

import styles from "./Career.module.scss";
import { useAppDispatch } from "@/hooks/redux-hooks";
import useSearchDebounce from "@/hooks/useSearchDebounce";
import { searchVacancyByName } from "@/utils/searchVacancyByName";
import { VacancyCategory } from "@/utils/constants";

interface SearchBarProps {
  activeFilter: string;
}

export default function SearchBar({ activeFilter }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useAppDispatch();

  useSearchDebounce(searchValue, () =>
    searchVacancyByName(searchValue, activeFilter as VacancyCategory, dispatch)
  );

  return (
    <div className={styles.search_block}>
      <Search />
      <input
        type="text"
        placeholder="Пошук вакансій..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}
