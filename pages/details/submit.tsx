import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, get, child } from "firebase/database";

const Submit = () => {
  const [pwd,setPwd] = useState("");
  const [submitAddr, setSubmitAddr] = useState(false);
  const handleSubmit = async(e:Event)=>{
    e.preventDefault()
   const val=  await fetchDb(pwd)
   if(!!pwd){
     // 1AF5n
     alert(`Correct : ${pwd}`);
     setSubmitAddr(true);
   }
   else{
    alert(`Wrong Password:  ${pwd}`);
   }
    console.table({val,pwd})
  }
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
  {!submitAddr?    <>
        <p>submit Your details here</p>
        <form >
          <input type="password" value={pwd} onChange={(e)=>setPwd(e.target.value)} />
          {/* @ts-ignore */}
          <input type="submit" onClick={handleSubmit} />
        </form>
      </>:
      <div>
        <p>Please submit your Address</p>
        <input type="text" style={{minWidth: "10rem"}} />
        <input type="submit" value={"submit Address"}/>
      </div>
      }
    </div>
  );
};
async function fetchDb(item:string) {
  try {
    const db = getDatabase(app);
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, `users/${item}`));

    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
      
    }
    return snapshot.val();
  } catch (e) {
    console.log(e);
    return { error: e };
  }
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
