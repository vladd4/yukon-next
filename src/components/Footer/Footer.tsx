"use client";

import styles from "./Footer.module.scss";

import { FC } from "react";

import Logo from "@/../public/logo-white.png";

import CallButton from "@/../public/call-button.png";
import { nav_links } from "../../static_store/navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setShowAlert } from "../../redux/slices/alertSlice";
import { social_links } from "../../static_store/social";
import { contact_links } from "../../static_store/contact";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "@/navigation";

const Footer: FC = () => {
  const dispatch = useAppDispatch();

  const t = useTranslations();

  const pathname = usePathname();

  const isExternalPage =
    pathname.includes("news") || pathname.includes("projects");

  const NavLinkComponent = isExternalPage ? Link : AnchorLink;

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShowAlert = () => {
    dispatch(setShowAlert(true));
  };

  return (
    <footer className={styles.root} id="contacts">
      <article className={styles.wrapper}>
        <div className={styles.logo_block}>
          <Image
            alt="Yukon Web"
            width={462}
            height={586}
            src={Logo}
            onClick={handleScrollTop}
          />
          <div>
            <p>{t("footer.working_hours_heading")}</p>
            <p>{t("footer.working_hours")}</p>
          </div>
        </div>
        <div className={styles.nav_block}>
          <div className={styles.nav_item}>
            <h5>{t("footer.contact_h")}</h5>
            {contact_links.map((link) => {
              return (
                <a key={link.link} href={link.link}>
                  <Image alt={`${link.label} social icon`} src={link.icon} />{" "}
                  {link.type === "stale" ? link.label : t(link.label)}
                </a>
              );
            })}
          </div>
          <div className={styles.nav_item}>
            <h5> {t("footer.social_h")}</h5>
            {social_links.map((link) => {
              return (
                <a key={link.icon.src} href={link.link}>
                  <Image alt={`${link.label} social icon`} src={link.icon} />{" "}
                  {link.label}
                </a>
              );
            })}
          </div>
          <div className={styles.nav_item}>
            <NavLinkComponent
              className={styles.h5}
              href={isExternalPage ? "/" : "#main"}
            >
              {t("footer.nav_h")}
            </NavLinkComponent>
            {nav_links.map((link) => (
              <NavLinkComponent
                key={link.label}
                href={isExternalPage ? `/${link.href}` : link.href}
              >
                {t(link.label)}
              </NavLinkComponent>
            ))}
          </div>
        </div>
      </article>
      <p className={styles.copy}>{t("footer.copy")}</p>
      <Image
        className={styles.call_btn}
        alt="Call button"
        src={CallButton}
        id="call-btn"
        onClick={handleShowAlert}
      />
    </footer>
  );
};

export default Footer;
