import { MotionStyle, Variant } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.scss";
import { Fashion, LZYlabs, LZYutes } from "../svgs/sign";
import { useGlobalContext } from "../context";

const Main = ({ style }: { style: MotionStyle }) => {
  const {state, setState} = useGlobalContext()
  const variant = {
    active: {
      scale: 1.1,
      transition: {
        duration: 0.7,
        yoyo: Infinity,
      },
    },
  };
  const active: Variant = {
    position: "absolute",
    opacity: 0,
    bottom: "-100%",
  };  const inactive: Variant = {
    position: "relative",
    opacity: 0,
    top:"0%",
  };
  return (
    <motion.div
      // style={{ ...style, position: "absolute", left: "100vw" }}
      className={styles.main}
      style={{height: state?"0":"100"}}
    >
      {!state && <nav>
        <div className={styles.logo_wrapper}>
          <Image src={"/logo.svg"} height={100} width={100} />
        </div>
        <div className={styles.main_links_logo}>
          <Image src={"/discord.svg"} height={100} width={100} />
          <Image src={"/twitter.svg"} height={100} width={100} />
        </div>
      </nav>}

      <section className={styles.main_section}>
        <motion.div
 
          className={`${styles.home_image} ${state && styles.position}`}
        >
          <Image src={"/main.svg"} width={100} height={500} />
        </motion.div>
     {!state &&   <div className={styles.lzyutes_and_sign}>
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
            {/* @ts-ignore */}
            <motion.div onClick={()=>setState(!state)} whileHover={(style = { scale: 1.3 })}>
              <LZYutes />
            </motion.div>
            <motion.div whileHover={(style = { scale: 1.2 })}>
              <LZYlabs />
            </motion.div>
          </div>
        </div>}
      </section>
    </motion.div>
  );
};

export default Main;
