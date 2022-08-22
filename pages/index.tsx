import type { NextPage } from "next";
import React from "react";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/test.module.scss";
// import { motion } from "framer-motion";
import Main from "../component/main";
import { useGlobalContext } from "../context";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Box } from "../component/teamBox";
import Navigation from "../component/Navigatoin";
import Footer from "../component/Footer";
import {
  Drop,
  Creative,
  Exclusive,
  Physical,
  DeFashion,
  LeftDU,
  RightDD,
  RightDU,
} from "../svgs/roadmap";

import { FaQ, RightArror } from "../svgs/faq";

import { Lazy, Sign } from "../svgs/footer.Svgs";
const times = 1.2;
const Home: NextPage = () => {
  const { state, setState } = useGlobalContext();
  const [animate, setAnimate] = useState(false);
const variant:Variants={
  initial:{
    y:300,
    opacity: 0.4
  },
  animate:{
    y:0,
    opacity:1
  },
  exit:{

  }
}
  return (
    <div
      style={{ height: "100vh", position: "relative" }}
      className={styles.container}
    >
      <Head>
        <title>Lzy Yutes Fashion Drop</title>
        <meta name="description" content="Concept Augmented reality NFT Fashion Drop" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className={styles.main}>
        <AnimatePresence>{state && <Navigation />}</AnimatePresence>
        <div
          style={{ gridTemplateColumns: !state ? "1fr" : "" }}
          className={styles.topSection}
        >
          <div className={styles.images}>
            {state && (
              <motion.div  transition={{type:"tween", duration:1}} variants={variant} initial="initial" animate="animate" exit="initial" className={styles.woman}>
                <Image
                  src={"/qween.png"}
                  priority
                  width={350 * times}
                  height={400 * times}
                />
                <div className={styles.masked}>
                  <Image
                    src={"/masked.png"}
                    priority
                    width={100}
                    height={300}
                  />
                </div>
              </motion.div>
            )}
            {/* @ts-ignore */}
            <Main
            //  style={{position:animate?"absolute": "relative"}}
            />
          </div>
          {state && (
            <motion.div initial={{x:200, opacity:0, }} animate={{x:0, opacity:1, }} transition={{  type:"spring", damping:50}} className={styles.about}>
              <h2>Who Are We</h2>

              <p>
                We are Lzyutes a collection of multifaceted talented individuals
                who are barred with alack of opportunities and resources but go
                ahead and make it anyways. Lzyutesclub is a community based
                project with the aim of providing its members the facilities
                needed to show {"it's"} untapped and unique talents to the
                world. Our goal is to provide grants, mentorship, and a platform
                for youths in Nigeria and all of over globe who have been
                shunned by a condescending society.
              </p>
            </motion.div>
          )}
        </div>
        {state && (
          <>
            <div className={styles.about}>
              <div className={styles.mint}>
                <Image src={"/mint.svg"} width={100} height={100} />
              </div>
              <div className={styles.carousell}>
                {images.map((src, index) => {
                  return (
                    <div key={index}>
                      <Image src={src} width={200} height={200} />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.roadMap}>
              <h2>Road Map</h2>
              <div className={styles.roadMap_container}>
                <div className={styles.roadMap_item}>
                  {props.map((Item, index) => {
                    let styless = `${styles.left}`;
                    if (index % 2 == 1) styless = `${styles.center} ${styless}`;
                    if (index === 2 || index === 6)
                      styless = `${styles.right} ${styless}`;

                    return (
                      <div className={styless} key={index}>
                        <Item />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className={styles.faq}>
              <span className={styles.header}>
                <FaQ />
              </span>
              <div className={styles.info}>
                {desc.map((item, index) => {
                  return (
                    <div key={index}>
                      <RightArror /> {item}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.core}>
              <div>
                {teamInfo.map((props, index) => {
                  return <Box {...props} key={index + props.title} />;
                })}
              </div>
            </div>
            <Footer />
          </>
        )}
      </main>
    </div>
  );
};

const desc = [
  "decentralized fashion project and physical community interaction",
  "decentralized fashion project and physical community interaction",
  "decentralized fashion project and physical community interaction",
  "decentralized fashion project and physical community interaction",
  "decentralized fashion project and physical community interaction",
  "decentralized fashion project and physical community interaction",
];

const props = [
  Drop,
  RightDD,
  Creative,
  LeftDU,
  Exclusive,
  RightDU,
  Physical,
  LeftDU,
  DeFashion,
];

const images = [
  "/images/Biker 3-1.png",
  "/images/Graffiti  2-1.png",
  "/images/Red 2-1.png",
  "/images/Biker 3.png",
  "/images/Graffiti  2.png",
  "/images/Red 2.png",
];

const teamInfo = [
  {
    src: "/images/left.png",
    role: "Developer",
    title: "Manny",
    twitter: "@Yutemanny",
    twitter_link: "https://twitter.com/yutesmanny",
  },
  {
    src: "/images/right.png",
    role: "Community Manager",
    title: "Agentvic",
    twitter: "@Agent_vick",
    twitter_link: "https://twitter.com/Agent_vick",
  },
  {
    src: "/images/left.png",
    role: "Developer",
    title: "Angel Ese",
    twitter: "@ese_ghene_",
    twitter_link: "https://twitter.com/ese_ghene_",
  },
  {
    src: "/images/right.png",
    role: "Creative Writer",
    title: "Gloverboy",
    twitter: "@guworwarebi",
    twitter_link: "https://twitter.com/guworwarebi",
  },
  {
    src: "/images/left.png",
    role: "Artist",
    title: "Danive",
    twitter: "@danive3d",
    twitter_link: "https://twitter.com/danive3d",
  },
  {
    src: "/images/right.png",
    role: "Chief Strategist",
    title: "BossSKA",
    twitter: "@ska_kabir",
    twitter_link: "https://twitter.com/ska_kabir",
  },
  {
    src: "/images/right.png",
    role: "Team Leader",
    title: "RedPill",
    twitter: "@EzeugoPhilip",
    twitter_link: "https://twitter.com/EzeugoPhilip",
  },
];

export default Home;
