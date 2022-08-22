import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { motion, Variants } from "framer-motion";
import { FaDiscord,  } from "react-icons/fa";
import {ImTwitter} from "react-icons/im"

const Nav = () => {
  const variant: Variants = {
    initial: {
      y: -30,
      opacity: 0,
      type: "tween",
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.nav
      transition={{ duration: 0.5, delay: 0.2 }}
      variants={variant}
      animate="animate"
      initial="initial"
      className={styles.nav}
    >
      <div className={styles.logo_wrapper}>
        <Image src={"/logo.svg"} height={100} width={100} />
      </div>
      <div className={styles.main_links_logo}>
        <ImTwitter />
        <FaDiscord />
      </div>
    </motion.nav>
  );
};

export default Nav;
