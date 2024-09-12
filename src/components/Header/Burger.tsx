"use client";

import styles from "./Header.module.scss";

import { useRef } from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { nav_links } from "../../static_store/navbar";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import useClickOutside from "../../hooks/useClickOutside";
import { setShowBurger } from "../../redux/slices/burgerSlice";

import Close from "@/../public/close.png";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";

const Burger = () => {
  const { showBurger } = useAppSelector((state) => state.burger);
  const dispatch = useAppDispatch();

  const burgerRef = useRef(null);

  const handleCloseBurger = () => {
    dispatch(setShowBurger(false));
  };

  const burgerElement =
    typeof window !== "undefined" ? document.getElementById("burger") : null;

  useClickOutside(burgerRef, showBurger, handleCloseBurger, burgerElement);

  const t = useTranslations();

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
            alt="CLose span"
            src={Close}
            onClick={handleCloseBurger}
            className={styles.span}
          />
          <nav>
            {nav_links.map((link) => {
              return (
                <AnchorLink
                  onClick={handleCloseBurger}
                  key={link.href}
                  href={link.href}
                >
                  {t(link.label)}
                </AnchorLink>
              );
            })}
          </nav>
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
