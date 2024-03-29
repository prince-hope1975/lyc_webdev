import { ImageProps } from "next/image";
import Image from "next/image";
import React from "react";
import styles from "../styles/test.module.scss";
import Link from "next/link";
import { IoLogoTwitter } from "react-icons/io5";
import { motion } from "framer-motion";
export const Box = (
  props: ImageProps & {
    title: string;
    role: string;
    twitter: string;
    twitter_link: string;
  }
) => {
  return (
    <motion.div style={{cursor:"pointer"}}  whileHover={{ scale:0.9}} className={styles.box}>
      <span className={styles.img}>
        <Image priority width={900} height={1000} {...props} />
      </span>
      <span className={styles.header}>{props.title}</span>
      <p>{props.role}</p>
      <Link href={props.twitter_link}>
        <div className={styles.link}>
          <IoLogoTwitter /> {props.twitter}
        </div>
      </Link>
      <span></span>
    </motion.div>
  );
};
