import { MotionStyle, Variant, Variants } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Home.module.scss";
import { Fashion, LZYlabs, LZYutes } from "../svgs/sign";
import { useGlobalContext } from "../context";

const Main = ({ style }: { style?: MotionStyle }) => {
  const { state, setState } = useGlobalContext();
  const variant: Variants = {
    active: {
      scale: 1.1,
      transition: {
        duration: 0.7,
        repeatType: "mirror",
        repeat: Infinity,
      },
    },
  };
  // const active: Variant = {
  //   position: "absolute",
  //   opacity: 0,
  //   bottom: "-100%",
  // };  const inactive: Variant = {
  //   position: "relative",
  //   opacity: 0,
  //   top:"0%",
  // };
  return (
    <motion.div
      // style={{ ...style, position: "absolute", left: "100vw" }}
      className={styles.main}
      style={{ height: state ? "0" : "" }}
    >
      {!state && (
        <nav>
          <div className={styles.logo_wrapper}>
            <Image src={"/logo.svg"} height={100} width={100} />
          </div>
          <div className={styles.main_links_logo}>
            <Image src={"/discord.svg"} height={100} width={100} />
            <Image src={"/twitter.svg"} height={100} width={100} />
          </div>
        </nav>
      )}

      <section className={styles.main_section}>
        <div className={`${styles.home_image} ${state && styles.position}`}>
          <Image  src={"/main.png"} width={1000} height={1000} />
        </div>
        <AnimatePresence>
          {!state && (
            <motion.div className={styles.lzyutes_and_sign}>
              <motion.div
                animate="active"
                variants={variant}
                className={styles.text}
              >
                <Image src={"/lzyutes.svg"} width={100} height={500} />
              </motion.div>
              <div className={styles.sign}>
                <Image src={"/sign.svg"} width={100} height={500} />
                <motion.div
                  whileHover={(style = { scale: 1.3 })}
                  // onClick={() => setState("inactive")}
                >
                  <Fashion />
                </motion.div>
                <motion.div
                /* @ts-ignore */
                  onClick={() => setState(!state)}
                  whileHover={(style = { scale: 1.3 })}
                >
                  <LZYutes />
                </motion.div>
                <motion.div whileHover={(style = { scale: 1.2 })}>
                  <LZYlabs />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </motion.div>
  );
};

export default Main;
