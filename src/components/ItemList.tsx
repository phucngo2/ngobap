import { getChannels } from "data/channels";
import { useState, useEffect } from "react";

import Item from "./Item";

interface ItemListProps {
    cols?: ColCount;
    onItemClick?: ChannelClickHandler;
    className?: string;
    itemClassName?: string;
    toggled?: boolean;
}

const ItemList: React.FC<ItemListProps> = ({
    className = "",
    onItemClick,
    itemClassName,
    toggled,
}) => {
    const [channels, setChannels] = useState<any[]>([]);

    useEffect(() => {
        getChannels().then((data) => setChannels(data));
    }, [toggled]);

    return (
        <div
            className={`h-full w-full flex flex-row flex-wrap hide-scroll p-2 lg:p-6 ${className}`}
        >
            {channels
                .sort(
                    (a, b) =>
                        parseInt(a.displayOrder) - parseInt(b.displayOrder)
                )
                .map((channel) => (
                    <Item
                        key={channel.id}
                        channel={channel}
                        onItemClick={onItemClick}
                        className={itemClassName}
                    />
                ))}
        </div>
    );
};

export default ItemList;
