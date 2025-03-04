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
      <select
        onChange={(e) => changeLocale(e.target.value)}
        value={locale}
        disabled={isPending}
      >
        <option value="uk">Uk</option>
        <option value="en">Eng</option>
        <option value="pl">Pl</option>
        <option value="de">De</option>
        <option value="lt">Lt</option>
      </select>
    </div>
  );
}
