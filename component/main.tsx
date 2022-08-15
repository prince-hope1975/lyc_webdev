import { MotionStyle, Variant, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Home.module.scss";
import { Fashion, LZYlabs, LZYutes } from "../svgs/sign";
import { useGlobalContext } from "../context";
import Link from "next/link";
import Nav from "./Nav";

const Main = ({ style }: { style?: MotionStyle }) => {
  const { state, setState } = useGlobalContext();
  const [height, setHeight] = useState(0);
  const ref = React.useRef(null);

  const [matches, setMatches] = useState("" as any );
React.useEffect(()=>{  if (typeof window !== "undefined") {
  // browser code
  setMatches(window?.matchMedia("(min-width: 600px)").matches);
}},[])
  React.useEffect(() => {
    window?.matchMedia("(min-width: 600px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  React.useEffect(() => {
    // @ts-ignore
    setHeight(ref?.current.clientHeight);
    console.log(height);
  });
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
      {!state && <Nav />}

      <section className={styles.main_section}>
        <div>
          <div
            className={`${styles.home_image} ${state && styles.position}`}
            ref={ref}
          >
            <Image priority src={"/main.png"} width={1000} height={1000} />
          </div>
        </div>
        <AnimatePresence>
          {!state && (
            <motion.div
              className={styles.lzyutes_and_sign}
              style={{ paddingTop: `${ !matches?height:0}px` }}
            >
              <motion.div
                animate="active"
                variants={variant}
                className={styles.text}
              >
                <Image src={"/lzyutes.svg"} width={100} height={100} />
              </motion.div>
              <div className={styles.sign}>
                <Image src={"/sign.svg"} width={100} height={300} />
                <Link href="/fashion">
                  <motion.div whileHover={(style = { scale: 1.3 })}>
                    <Fashion />
                  </motion.div>
                </Link>
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
