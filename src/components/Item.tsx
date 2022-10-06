import parse from "html-react-parser";

import Icon from "./Icon";

interface ItemProps {
    channel: Channel;
    onItemClick?: ChannelClickHandler;

    className?: string;
}

const Item: React.FC<ItemProps> = ({ channel, onItemClick, className }) => {
    const handleOpenChannel = () => {
        if (channel.url) window.open(channel.url, "_blank");
    };

    return (
        <div
            className={`flex flex-row items-center justify-center p-2 lg:p-6 h-1/2 w-1/2 lg:w-1/4 ${className}`}
        >
            <div
                className="w-full h-full rounded-md flex flex-col items-center p-4 bg-white border cursor-pointer hover:shadow-xl"
                onClick={(_) => {
                    onItemClick ? onItemClick(channel) : handleOpenChannel();
                }}
            >
                <div className="flex flex-col items-center">
                    <img
                        className="rounded-full border"
                        style={{
                            width: 120,
                            height: 120,
                        }}
                        src={channel.avatar}
                        alt={channel.title}
                    />
                    <div className="font-bold my-2">
                        <Icon
                            icon={["fab", channel.provider]}
                            color={brandColors[channel.provider]}
                            className="mr-1.5"
                        />
                        {channel.title}
                    </div>
                </div>
                <div
                    className="text-sm px-2 py-1 item-description text-justify hide-scroll"
                    style={{
                        wordBreak: "break-word",
                    }}
                >
                    {parse(channel.description)}
                </div>
            </div>
        </div>
    );
};

export default Item;

const brandColors: any = {
    bilibili: "#07a3d7",
    youtube: "#FF0000",
    google: "#34A853",
    discord: "#7289da",
};
