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
import { useEffect, useState } from "react";

const Header = () => {
  const { isScrolled } = useScroll();
  const dispatch = useAppDispatch();

  const [isPathMatch, setIsPathMatch] = useState(false);
  const pathName = usePathname();
  const router = useRouter();

  const t = useTranslations();

  const getBackLink = () => {
    return nav_links.map((link) => {
      const isCareerLink = link.label === "header.link_7";
      const href = isCareerLink
        ? `${link.href}`
        : isPathMatch
        ? `/${link.href}`
        : link.href;

      const LinkComponent = isCareerLink || isPathMatch ? Link : AnchorLink;

      return (
        <LinkComponent key={link.label} href={href}>
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

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <>
      <header
        className={`${styles.root} ${isPathMatch ? styles.news_root : ""} ${
          isScrolled ? styles.scrolled : ""
        }`}
      >
        <article className={styles.wrapper}>
          <Image
            alt="Yukon Web"
            width={209}
            height={81}
            priority={true}
            src={isScrolled || isPathMatch ? LogoBlack : Logo}
            onClick={handleLogoClick}
          />
          <nav>{getBackLink()}</nav>
          <Menu
            id="burger"
            size={28}
            className={styles.hamburger_icon}
            color={isPathMatch ? "#292929" : isScrolled ? "#292929" : "#fff"}
            onClick={() => {
              dispatch(setShowBurger(true));
            }}
          />
          <LocaleSwitcher className={styles.lang_block} />
        </article>
      </header>
      <Burger />
    </>
  );
};

export default Header;
