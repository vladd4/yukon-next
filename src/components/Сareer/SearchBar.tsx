"use client";

import { Search } from "lucide-react";
import React, { useState } from "react";

import styles from "./Career.module.scss";
import { useAppDispatch } from "@/hooks/redux-hooks";
import useSearchDebounce from "@/hooks/useSearchDebounce";
import { searchVacancyByName } from "@/utils/searchVacancyByName";
import { VacancyCategory } from "@/utils/constants";
import { useTranslations } from "next-intl";

interface SearchBarProps {
  activeFilter: string;
}

export default function SearchBar({ activeFilter }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useAppDispatch();

  const t = useTranslations();

  useSearchDebounce(searchValue, () =>
    searchVacancyByName(searchValue, activeFilter as VacancyCategory, dispatch)
  );

  return (
    <div className={styles.search_block}>
      <Search />
      <input
        type="text"
        placeholder={t("career.search_label")}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}
