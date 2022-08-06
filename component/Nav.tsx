import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo_wrapper}>
        <Image src={"/logo.svg"} height={100} width={100} />
      </div>
      <div className={styles.main_links_logo}>
        <Image src={"/discord.svg"} height={100} width={100} />
        <Image src={"/twitter.svg"} height={100} width={100} />
      </div>
    </nav>
  );
};

export default Nav;
