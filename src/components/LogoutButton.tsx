import { logout } from "data/auth";
import { useState } from "react";
import Button from "./Button";

function LogoutButton() {
    const [disabled, setDisabled] = useState(false);

    const handleLogout = async () => {
        setDisabled(true);

        logout().then(() => setDisabled(false));
    };

    return (
        <Button
            className="bg-purple-600 text-white border"
            style={{
                opacity: disabled ? "0.5" : "1",
                position: "fixed",
                bottom: 32,
                right: 32,
                zIndex: 69,
            }}
            onClick={handleLogout}
            disabled={disabled}
        >
            Logout
        </Button>
    );
}

export default LogoutButton;
