import React, { PropsWithChildren } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Main.module.scss";
import { motion, MotionStyle } from "framer-motion";
import Link from "next/link";
import Sign from "../svgs/sign";

export const Main = ({ style }: { style: MotionStyle }) => {
  return (
    <motion.main className={styles.main} style={style}>
      <header className={styles.header}>
        <div className={styles.img}>
          <Image src={"/logo.svg"} width={100} height={100} />
        </div>
        <div className={styles.icons}>
          <Link href="https://discord.com">
            <Image src={"/discord.svg"} width={100} height={100} />
          </Link>
          <Link href="https://twitter.com">
            <Image src={"/twitter.svg"} width={100} height={100} />
          </Link>
        </div>
      </header>

      <motion.section className={styles.gridSection}>
        <motion.div className={styles.mainIcon} animate={{ opacity: [0, 1] }}>
          <motion.div className={styles.splash}>
            <Image src={"/splash.svg"} width={100} height={1000} />
          </motion.div>
          <Image src={"/main.svg"} width={100} height={"1000"} />
        </motion.div>
        <motion.div className={styles.lzy_container}>
          <motion.div
            className={styles.lzyutes_text}
            animate={{
              transition: { delay: 2 },

              opacity: [0, 0.2, 0.3, 1],
            }}
          >
            <Image src={"/lzyutes.svg"} height={1000} width={100} />
          </motion.div>
          <Sign className={styles.signPost}>
            <CustomLink href="" className={styles.links}></CustomLink>
            <CustomLink href="" className={styles.links}></CustomLink>
            <CustomLink href="" className={styles.links}></CustomLink>
          </Sign>
        </motion.div>
      </motion.section>
      {/* <Image src={"/avatar1.svg"} width={100} height={100} />
          <Image
            style={{ background: "" }}
            src={"/avatar4.svg"}
            width={100}
            height={"1000"}
          />
        <Image src={"/avatar2.svg"} width={100} height={100} />
        <Image src={"/avatar3.svg"} width={100} height={100} /> */}
    </motion.main>
  );
};
const CustomLink = ({
  children,
  className,
  href,
}: PropsWithChildren & { className: string; href: string }) => {
  const router = useRouter();
  const route = () => {
    router.push(href);
  };
  return (
    <div onClick={route} className={className}>
      {children}
    </div>
  );
};
