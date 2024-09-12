"use client";

import styles from "./Locale.module.scss";

import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useTransition } from "react";

interface SwitcherProps {
  className: string;
}

export default function LocaleSwitcher({ className }: SwitcherProps) {
  const route = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useSearchParams();
  const locale = useLocale();

  const changeLocale = (nextLocale: string) => {
    startTransition(() => {
      const queryParams: Record<string, string> = {};
      params.forEach((value, key) => {
        queryParams[key] = value;
      });

      route.replace(
        {
          pathname,
          query: queryParams,
        },
        { locale: nextLocale }
      );
    });
  };

  return (
    <div className={`${styles.lang_block} ${className}`}>
      <p
        id="uk"
        className={`${locale === "uk" ? styles.disabled : ""} ${
          isPending ? styles.disabled : ""
        }`}
        onClick={() => changeLocale("uk")}
      >
        Укр
      </p>
      <span>|</span>
      <p
        className={`${locale === "en" ? styles.disabled : ""} ${
          isPending ? styles.disabled : ""
        }`}
        id="en"
        onClick={() => changeLocale("en")}
      >
        Eng
      </p>
    </div>
  );
}
