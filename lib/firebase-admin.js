import { getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const app =
  getApps().length > 0
    ? getApps()[0]
    : initializeApp();

const db = getFirestore(app);

export { db };
