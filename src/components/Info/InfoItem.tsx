import Icon from "components/Common/Icon";
import React from "react";

interface InfoItemProps {
    info: InfoItemType | GameItemType;
}

const InfoItem: React.FC<InfoItemProps> = ({ info }) => {
    const { url, name, title, bg } = info;

    const handleClick = () => {
        if (!url) return;

        if (typeof url === "string") {
            window.open(url, "_blank");
        } else {
            url();
        }
    };

    const bgClassName = bg || "bg-gray-200 hover:bg-gray-400";

    return (
        <li>
            <div
                className={`flex items-center p-3 text-base font-bold rounded-lg group cursor-pointer ${bgClassName}`}
                onClick={handleClick}
            >
                {"icon" in info ? (
                    <span className="flex-1 whitespace-nowrap">
                        <Icon className="ml-1 lg:ml-2 mr-3" icon={info.icon} />{" "}
                        {title}
                    </span>
                ) : (
                    <span className="flex-1 whitespace-nowrap flex flex-row items-center">
                        <img
                            src={info.imgSrc}
                            className="w-[1.6rem] h-[1.6rem] lg:w-[2.4rem] lg:h-[2.4rem] rounded mr-3"
                        />{" "}
                        {title}
                    </span>
                )}

                <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs md:text-[12.6px] font-medium text-white bg-gray-700 rounded">
                    {name}
                </span>
            </div>
        </li>
    );
};

export default InfoItem;
