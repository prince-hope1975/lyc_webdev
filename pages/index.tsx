import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/test.module.scss";
import { motion } from "framer-motion";
import Main from "../component/main";
import { useGlobalContext } from "../context";
import { AiOutlineMenu } from "react-icons/ai";
import { IoChevronBackOutline } from "react-icons/io5";

const Home: NextPage = () => {
  const { state, setState } = useGlobalContext();
  const [animate, setAnimate] = useState(false);
  const [modalOpen, setModalOpen] = useState(true);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <div
      style={{ height: "100vh", position: "relative" }}
      className={styles.container}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {state && (
          <nav className={styles.nav}>
            {/* @ts-ignore */}
            <div className={styles.button_group}>
              {/* @ts-ignore */}
              <IoChevronBackOutline onClick={() => setState(!state)} />
              <AiOutlineMenu onClick={toggleModal} />
            </div>
            <ul className={`${styles.modal} ${modalOpen && styles.toggle}`}>
              <li>Art</li>
              <li>Fashoin</li>
              <li>Team</li>
              <li>Join Discord</li>
            </ul>
          </nav>
        )}
        <div className={styles.images}>
          {state && (
            <div className={styles.woman}>
              <Image src={"/avatar3.svg"} width={100} height={400} />
              <div className={styles.masked}>
                <Image src={"/masked.svg"} width={100} height={300} />
              </div>
            </div>
          )}
          {/* @ts-ignore */}

          <Main
          //  style={{position:animate?"absolute": "relative"}}
          />
        </div>
        {state && (
          <>
            <div className={styles.about}>
              <h2>Who Are We</h2>

              <div className={styles.mint}>
                <Image src={"/mint.svg"} width={100} height={100} />
              </div>
              <p>
                We are Lzyutes a collection of multifaceted talented individuals
                who are barred with alack of opportunities and resources but go
                ahead and make it anyways. Lzyutesclub is a community based
                project with the aim of providing its members the facilities
                needed to show it’s untapped and unique talents to the world.
                Our goal is to provide grants, mentorship, and a platform for
                youths in Nigeria and all of over globe who have been shunned by
                a condescending society.
              </p>

              <div className={styles.carousell}>
                {[0, 0, 0, 0, 0].map((_, index) => {
                  return (
                    <div key={index}>
                      <Image src={"/avatar3.svg"} width={100} height={100} />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
