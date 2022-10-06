import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "utils/firebase-config";

export const getCurrentAuth = () => {
    const res = auth.currentUser;

    return res;
};

export const logout = async () => {
    try {
        await auth.signOut();
    } catch (e) {
        console.error(e);
    }
};

export const GoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    const res = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(res);

    return credential;
};
