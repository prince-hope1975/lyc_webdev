import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, get, child } from "firebase/database";
import { motion, AnimatePresence, Variants } from "framer-motion";

const Submit = () => {
  // useEffect(()=>{
  //   (async()=>{
  //     const db = await fetchDb("")
  //     console.log(Object.keys(db))
  //   })()
  // })
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
  const [submitAddr, setSubmitAddr] = useState(false);
  const [done, setDone] = useState(false);
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
        setSubmitAddr(true);
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
      setDone(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        placeContent: "center",
        fontSize: "2rem",
        textAlign: "center",
      }}
    >
      <AnimatePresence exitBeforeEnter>
        {!submitAddr ? (
          <motion.div
            layout
            variants={varint}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.p>submit Your password here</motion.p>
            <motion.form>
              <input
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
              {/* @ts-ignore */}
              <motion.input type="submit" onClick={handleSubmit} />
            </motion.form>
          </motion.div>
        ) : !done ? (
          <motion.div
            variants={varint}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <p>Please submit your Address</p>
            <input
              type="text"
              onChange={(e) => setAddr(e.target.value)}
              style={{ minWidth: "10rem" }}
            />
            <input
              onClick={(e) => handleAddress(e)}
              type="submit"
              value={"submit Address"}
            />
          </motion.div>
        ) : (
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
