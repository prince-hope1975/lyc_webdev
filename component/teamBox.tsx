import { ImageProps } from "next/image";
import path from "path";
import Image from "next/image";
import React from "react";
import styles from "../styles/test.module.scss";
import Link from "next/link";
import { IoLogoTwitter } from "react-icons/io5";
const Box = (
  props: ImageProps & {
    title: string;
    role: string;
    twitter: string;
    twitter_link: string;
  }
) => {
  return (
    <div className={styles.box}>
      <span className={styles.img}>
        <Image {...props} />
      </span>
      <h3>{props.title}</h3>
      <p>{props.role}</p>
      <Link href={props.twitter_link}>
        <>
          <IoLogoTwitter /> {props.twitter}
        </>
      </Link>
      <span></span>
    </div>
  );
};

export default Box;
