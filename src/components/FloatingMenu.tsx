import React, { useState } from "react";
import Icon from "./Icon";
import ModalInfo from "./ModalInfo";

interface FloatingMenuProps {}

const FloatingMenu: React.FC<FloatingMenuProps> = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav
                style={{
                    background: "transparent",
                    position: "fixed",
                    zIndex: 4,
                    bottom: 32,
                    right: 32,
                }}
            >
                <div
                    className="inline-flex rounded-md"
                    style={{
                        background: "transparent",
                    }}
                >
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l-md"
                        onClick={() => {
                            window.open(ytbVideo, "_blank");
                        }}
                    >
                        <Icon icon="pause" />
                    </button>
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
                        onClick={() => {
                            window.open(ytbChannel, "_blank");
                        }}
                    >
                        <Icon icon="play" />
                    </button>
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r-md"
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        <Icon icon="info" />
                    </button>
                </div>
            </nav>
            <ModalInfo open={open} setOpen={setOpen} />
        </>
    );
};

export default FloatingMenu;

const ytbVideo = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const ytbChannel = "https://www.youtube.com/channel/UCqQZmkjMiNYhqgg1h6cDrPw";
