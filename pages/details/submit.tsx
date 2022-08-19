import React, { ReactElement, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, get, child } from "firebase/database";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  speechBoxL as SpeechBoxL,
  speechBoxR as SpeechBoxR,
} from "../../svgs/speechBox";
import styles from "../../styles/details.module.scss";
import { BareLogo } from "../../svgs/roadmap";
const Submit = () => {
  const varint: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  const [pwd, setPwd] = useState("");
  const [text, setText] = useState("");
  const [animate, setAnimate] = useState(false);
  const [view, setView] = useState(
    "password" as "password" | "address" | "finish"
  );
  const [addr, setAddr] = useState("");
  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    const val = await fetchDb(pwd);
    if (val) {
      // 1AF5n
      if (val.address) {
        alert("You have already submitted your address");
        return;
      } else {
        alert(`You entered The correct password : ${pwd}`);
        setView("address");
      }
    } else {
      alert(`You entered a Wrong Password:  ${pwd}`);
    }
    console.log({ val, pwd });
  };

  const handleAddress = async (e: any) => {
    e.preventDefault();
    // setAddr(e.target["address"].value);
    try {
      const data = await writeToDb(pwd, addr);
      setView("address");
    } catch (error) {
      console.error(error);
    }
  };

  const Loading = ({
    animate,
    text,
  }: {
    animate: boolean;
    text: string | ReactElement;
  }) => {
    return (
      <motion.div
        style={{
          width: "300px",
          aspectRatio: "1/.5",
          background: "white",
          position: "absolute",
          left: "50%",
          top: "25%",
          x: "-50%",
        }}
        initial={{ y: -500, opacity: 0 }}
        animate={{ y: animate ? 0 : -500, opacity: animate ? 1 : 0 }}
      ></motion.div>
    );
  };
  return (
    <div className={styles.container} style={{}}>
      <nav className={styles.nav}>
        <div className={styles.logo_wrapper}>
          <BareLogo />{" "}
        </div>
      </nav>
      <Loading {...{ text, animate }} />
      <AnimatePresence exitBeforeEnter>
        {view == "password" && (
          <motion.div
            layout
            variants={varint}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <SpeechBoxL
              className={styles.box}
              text="Claim Your  Prototype Pass"
            />
            <SpeechBoxR className={styles.box} text="Enter unique PassCode" />
            <motion.form>
              <div className={styles.img1}>
                <Image src={"/her.png"} width={300} height={500} />
              </div>
              <div className={styles.img2}>
                <Image src={"/her.png"} width={500} height={500} />
              </div>
              <div className={styles.input}>
                <input
                  type="password"
                  placeholder="Enter"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />
                {/* @ts-ignore */}
                <motion.input type="submit" onClick={handleSubmit} />
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {view == "address" && (
          <motion.div
            variants={varint}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <SpeechBoxL
              className={styles.box}
              text="Claim Your  Prototype Pass"
            />
            <SpeechBoxR
              className={styles.box}
              text="Enter Ethereum wallet address"
            />
            <div className={styles.img1}>
              <Image src={"/her.png"} width={300} height={500} />
            </div>
            <div className={styles.img2}>
              <Image src={"/her.png"} width={500} height={500} />
            </div>
            <div className={styles.input}>
              <input
                type="text"
                placeholder="Enter"
                onChange={(e) => setAddr(e.target.value)}
                style={{ minWidth: "10rem" }}
              />
              <input onClick={(e) => handleAddress(e)} type="submit" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {view == "finish" && (
          <motion.div
            variants={varint}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            Successfully Submitted address 🥳️🎉️
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
async function fetchDb(item: string) {
  try {
    const db = getDatabase(app);
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, `users/${item}`));

    if (snapshot.exists()) {
      // console.log(snapshot.val());
      console.log("Password doesn't exist");
    } else {
      console.log("No data available");
    }
    return snapshot.val();
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function writeToDb(hex: string, address: string) {
  const db = getDatabase();
  set(ref(db, "users/" + hex), {
    password: hex,
    address: address,
  }).then((res) => {
    console.log("server response", res);
    return res;
  });
}
const firebaseConfig = {
  apiKey: "AIzaSyC_vGP1PPx69AxTPNB-d7y-cHdXJIqAAi0",
  authDomain: "firebsase-demo.firebaseapp.com",
  databaseURL:
    "https://firebsase-demo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "firebsase-demo",
  storageBucket: "firebsase-demo.appspot.com",
  messagingSenderId: "1072104512295",
  appId: "1:1072104512295:web:0295421bb49bd0c0e62702",
  measurementId: "G-90FDBKP33E",
};
const app = initializeApp(firebaseConfig);

export default Submit;
