import FormChannel from "components/FormChannel";
import ItemList from "components/ItemList";
import LogoutButton from "components/LogoutButton";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Channels() {
    const [mode, setMode] = useState<FormMode>("create");
    const [activeItem, setActiveItem] = useState<Channel | null>(null);
    const [toggled, setToggled] = useState<boolean>(false);

    const form = useForm({
        mode: "onChange",
    });

    const handleItemClick = (channel: Channel) => {
        setActiveItem(channel);
        setMode("update");
    };

    return (
        <>
            <div className="left w-full lg:w-1/4 h-full border-b lg:border-b-0 border-r">
                <FormChannel
                    mode={mode}
                    setMode={setMode}
                    form={form}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    setToggled={setToggled}
                />
            </div>
            <div className="right w-full lg:w-3/4 h-full px-8 bg-gray-100">
                <ItemList
                    itemClassName="lg:w-1/3"
                    onItemClick={handleItemClick}
                    toggled={toggled}
                />
            </div>
            <LogoutButton />
        </>
    );
}

export default Channels;
