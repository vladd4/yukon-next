import styles from "./NotFound.module.scss";

import { FC } from "react";

import ImageSrc from "@/../public/404.png";
import { Link } from "@/navigation";

import Image from "next/image";

const NotFound: FC = () => {
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <Image alt="Not Found" src={ImageSrc} />
        <p>Упс, схоще щось пішло не так!</p>
        <Link href="/">Повернутись на головну</Link>
      </article>
    </section>
  );
};

export default NotFound;
