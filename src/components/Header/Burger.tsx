"use client";

import styles from "./Header.module.scss";

import { useEffect, useRef, useState } from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { nav_links } from "../../static_store/navbar";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
// import useClickOutside from "../../hooks/useClickOutside";
import { setShowBurger } from "../../redux/slices/burgerSlice";

import Close from "@/../public/close.png";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Burger = () => {
  const { showBurger } = useAppSelector((state) => state.burger);
  const dispatch = useAppDispatch();

  const burgerRef = useRef<HTMLDivElement>(null);

  const locale = useLocale();

  const [isPathMatch, setIsPathMatch] = useState(false);
  const pathName = usePathname();

  const handleCloseBurger = () => {
    dispatch(setShowBurger(false));
  };

  // const burgerElement =
  //   typeof window !== "undefined" ? document.getElementById("burger") : null;

  // useClickOutside(burgerRef, showBurger, handleCloseBurger, burgerElement);

  const t = useTranslations();

  const getBackLink = () => {
    return nav_links.map((link) => {
      const isCareerLink = link.label === "header.link_7";
      const href = isCareerLink
        ? `/${locale}/${link.href}`
        : isPathMatch
        ? `/${link.href}`
        : link.href;

      const LinkComponent = isCareerLink || isPathMatch ? Link : AnchorLink;

      return (
        <LinkComponent key={link.label} href={href} onClick={handleCloseBurger}>
          {t(link.label)}
        </LinkComponent>
      );
    });
  };

  useEffect(() => {
    const checkPathMatch = () => {
      return (
        pathName.includes("news") ||
        pathName.includes("projects") ||
        pathName.includes("career")
      );
    };

    setIsPathMatch(checkPathMatch());
  }, [pathName]);

  return (
    <>
      <article
        ref={burgerRef}
        className={`${styles.burger_root} ${
          showBurger ? styles.show_burger : ""
        }`}
      >
        <article className={styles.burger_wrapper}>
          <Image
            alt="Close span"
            src={Close}
            onClick={handleCloseBurger}
            className={styles.span}
          />
          <nav>{getBackLink()}</nav>
          <LocaleSwitcher className={styles.lang_block} />
        </article>
      </article>
      <div
        className={`${styles.overflow} ${
          showBurger ? styles.show_overflow : ""
        }`}
      />
    </>
  );
};

export default Burger;
