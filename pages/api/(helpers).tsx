// import serviceAccount from "../../../staking-f1d33-firebase-adminsdk-hnz9e-f2e618a564.json";
// import Admin, { firestore, database } from "firebase-admin";
// import admin from "firebase-admin";
// import { getDatabase } from "firebase-admin/database";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, get, child } from "firebase/database";

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

let app = initializeApp(firebaseConfig);

export async function fetchDb(item: string) {
  try {
    const db = getDatabase(app);
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, `users/${item}`));

    if (snapshot.exists()) {
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
export async function fetchAll() {
  // @ts-ignore
  return await fetchDb("");
}
// // As an admin, the app has access to read and write all data, regardless of Security Rules
// export const db = admin.database();
// export const dBase = getDatabase();

export const readDataFromSnapShot = async (ref: any) => {
  const snapShot: any = await ref.once("value", function (snapshot: any) {
    console.log(snapshot.val());
    return snapshot.val();
  });
  return snapShot.val();
};

export async function writeToDb({ ref, data }: { ref: any; data: number[] }) {
  try {
    await ref.set(data);
  } catch (error) {
    console.log(error);
  }
}
