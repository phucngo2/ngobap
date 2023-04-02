import Icon from "components/Common/Icon";
import { Tooltip } from "flowbite-react";
import { MenuItem } from "utils/configs";

interface NavItemProps {
    item: MenuItem;
    onSelectItem: (item: MenuItem) => void;
    activeItem: MenuItem;
}

const NavItem: React.FC<NavItemProps> = ({
    item,
    onSelectItem,
    activeItem,
}) => {
    const bg =
        activeItem.title === item.title
            ? "bg-blue-200 hover:bg-blue-400"
            : "bg-gray-200 hover:bg-gray-400";

    return (
        <Tooltip content={item.tooltip} placement="bottom">
            <button
                onClick={() => onSelectItem(item)}
                className={`text-gray-800 font-bold w-[2.4rem] h-[2.4rem] rounded-md mx-2 ${bg}`}
            >
                <Icon icon={item.icon} />
            </button>
        </Tooltip>
    );
};

export default NavItem;
