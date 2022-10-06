import React from "react";
import Icon from "./Icon";

interface ModalInfoLinkProps {
    reference: ReferenceType;
}

const ModalInfoLink: React.FC<ModalInfoLinkProps> = ({
    reference: { icon, title, name, url },
}) => {
    const handleClick = () => {
        if (typeof url === "string") {
            window.open(url, "_blank");
        } else {
            url();
        }
    };

    return (
        <li>
            <div
                className="flex items-center p-3 text-base font-bold bg-gray-200 rounded-lg group hover:shadow-lg cursor-pointer"
                onClick={handleClick}
            >
                <span className="flex-1 whitespace-nowrap">
                    <Icon className="mx-3" icon={icon} /> {title}
                </span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-white bg-gray-700 rounded">
                    {name}
                </span>
            </div>
        </li>
    );
};

export default ModalInfoLink;
