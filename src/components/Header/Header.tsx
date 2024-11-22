"use client";

import styles from "./Header.module.scss";

import Logo from "@/../public/logo-header-white.png";
import LogoBlack from "@/../public/logo.png";

import { nav_links } from "../../static_store/navbar";

import AnchorLink from "react-anchor-link-smooth-scroll";
import useScroll from "../../hooks/useScroll";
import Burger from "./Burger";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setShowBurger } from "../../redux/slices/burgerSlice";

import { Menu, Undo2 } from "lucide-react";
import Image from "next/image";
import { Link } from "@/navigation";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";

const Header = () => {
  const { isScrolled } = useScroll();
  const dispatch = useAppDispatch();

  const pathName = usePathname();
  const router = useRouter();

  const t = useTranslations();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <>
      <header
        className={`${styles.root} ${
          pathName.includes("news") ||
          pathName.includes("projects") ||
          pathName.includes("career")
            ? styles.news_root
            : ""
        } ${isScrolled ? styles.scrolled : ""}`}
      >
        <article className={styles.wrapper}>
          <Image
            alt="Yukon Web"
            width={209}
            height={81}
            priority={true}
            src={
              isScrolled ||
              pathName.includes("news") ||
              pathName.includes("projects") ||
              pathName.includes("career")
                ? LogoBlack
                : Logo
            }
            onClick={handleLogoClick}
          />
          <nav>
            {pathName.includes("news") || pathName.includes("projects") ? (
              <Link href="/" className={styles.back}>
                {t("header.back_to_main")} <Undo2 size={16} />
              </Link>
            ) : (
              nav_links.map((link) => {
                return (
                  <AnchorLink key={link.label} href={link.href}>
                    {t(link.label)}
                  </AnchorLink>
                );
              })
            )}
          </nav>
          {pathName.includes("news") || pathName.includes("projects") ? (
            <Link href="/" className={styles.back_mobile}>
              {t("header.back_to_main")} <Undo2 size={16} />
            </Link>
          ) : (
            <Menu
              id="burger"
              size={28}
              className={styles.hamburger_icon}
              color={
                pathName.includes("news") || pathName.includes("projects")
                  ? "#292929"
                  : isScrolled
                  ? "#292929"
                  : "#fff"
              }
              onClick={() => {
                dispatch(setShowBurger(true));
              }}
            />
          )}

          <LocaleSwitcher className={styles.lang_block} />
        </article>
      </header>
      <Burger />
    </>
  );
};

export default Header;
