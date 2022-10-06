import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "utils/firebase-config";

const adminsCollectionRef = collection(db, "admins");

export const isAdmin: (uid: string) => Promise<boolean> = async (uid) => {
    const q = query(adminsCollectionRef, where("uid", "==", uid));

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.length > 0;
};
