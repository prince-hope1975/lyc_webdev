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

  const [matches, setMatches] = useState("" as any);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      // browser code
      setMatches(window?.matchMedia("(min-width: 600px)").matches);
    }
  }, []);
  React.useEffect(() => {
    window
      ?.matchMedia("(min-width: 600px)")
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

  return (
    <motion.div
      // layout
      className={styles.main}
      style={{ height: state ? "0" : "calc(100vh - 54px)" }}
    >
      <AnimatePresence>{!state && <Nav />}</AnimatePresence>

      <motion.section className={styles.main_section}>
        <motion.div className={styles.wrapper} >
          <motion.div
            layout
            style={{}}
            initial={{}}
            animate={{
              opacity: 1,
              x: !state ? -150 : -100,
              y: state ? -250 : 0,
              scale: state ? 0.5 : 1,
            }}
            transition={{ type: "tween", duration: 1.2 }}
            className={`${styles.home_image} ${!state && styles.position}`}
            ref={ref}
          >
            <Image priority src={"/main.png"} width={1000} height={1000} />
          </motion.div>
        </motion.div>
        <AnimatePresence>
          {!state && (
            <motion.div
              initial={{
                y: 500,
                opacity: 0,
              }}
              exit={{
                y: 500,
                opacity: 0,
              }}
              animate={{
                y: -60,
                opacity: 1,
              }}
              transition={{ duration: 0.8 }}
              className={styles.lzyutes_and_sign}
              style={{ paddingTop: `${!matches ? height : 0}px` }}
            >
              <motion.div
                animate="active"
                variants={variant}
                className={styles.text}
              >
                <Image priority src={"/lzyutes.svg"} width={100} height={100} />
              </motion.div>
              <div className={styles.sign}>
                <Image priority src={"/sign.png"} width={100} height={300} />
                {/* !TODO Original link  */}
                {/* <Link href="/fashion"> */}
                <Link href="/">
                  <motion.div whileHover={(style = { scale: 1.3 })}>
                    <Fashion />
                  </motion.div>
                </Link>
                <motion.div
                  /* @ts-ignore */
                  onClick={() => setState(state)}
                  // TODO - original action
                  // This action was disabled along with line 101 because of the requiremnts of the app
                  // onClick={() => setState(!state)}
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
      </motion.section>
    </motion.div>
  );
};

export default Main;
