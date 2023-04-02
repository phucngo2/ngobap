import NavBar from "components/Navigation/NavBar";
import { useState } from "react";
import { MENU, MenuItem } from "utils/configs";
import PageLayout from "./PageLayout";

const RightContent = () => {
    const [activeItem, setActiveItem] = useState<MenuItem>(MENU[0]);

    const handleNavItemClick = (item: MenuItem) => {
        setActiveItem(item);
    };

    return (
        <div className="w-full h-full flex flex-col items-center">
            <NavBar onSelectItem={handleNavItemClick} activeItem={activeItem} />
            <div className="w-full h-full overflow-y-scroll scrollbar">
                <PageLayout>
                    <activeItem.component />
                </PageLayout>
            </div>
        </div>
    );
};

export default RightContent;
