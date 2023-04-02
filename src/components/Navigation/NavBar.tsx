import React from "react";
import NavItem from "./NavItem";
import { MENU, MenuItem } from "utils/configs";

interface NavBarProps {
    onSelectItem: (item: MenuItem) => void;
    activeItem: MenuItem;
}

const NavBar: React.FC<NavBarProps> = ({ onSelectItem, activeItem }) => {
    return (
        <div className="flex flex-row items-center justify-center py-3 border-b w-full">
            {MENU.map((item, index) => (
                <NavItem
                    key={index}
                    item={item}
                    onSelectItem={onSelectItem}
                    activeItem={activeItem}
                />
            ))}
        </div>
    );
};

export default NavBar;
