import { useState } from "react";
import { getCurrentAuth, logout } from "data/auth";
import { isAdmin } from "data/user";
import { User } from "firebase/auth";

import { useFirebaseUserChangeTracking } from "utils/firebase-hook";
import GoogleLoginButton from "components/GoogleLoginButton";
import Wrapper from "components/Wrapper";
import Channels from "./Channels";

function Admin() {
    const [status, setStatus] = useState<Status>("loading");
    const [currentUser, setCurrentUser] = useState<User | null>(
        getCurrentAuth()
    );

    useFirebaseUserChangeTracking(async (user) => {
        setStatus("loading");

        if (user) {
            if (!(await isAdmin(user.uid))) {
                return await logout();
            }
        }

        setCurrentUser(user);
        setStatus("idle");
    });

    const render = () => {
        if (!currentUser)
            return <GoogleLoginButton extraDisabled={status === "loading"} />;

        return <Channels />;
    };

    return (
        <Wrapper className="flex flex-row flex-wrap items-center justify-center bg-gray-100">
            {render()}
        </Wrapper>
    );
}

export default Admin;
