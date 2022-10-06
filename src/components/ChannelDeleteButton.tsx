import { deleteChannel } from "data/channels";
import { ButtonHTMLAttributes } from "react";
import Button from "./Button";

interface ChannelDeleteButtonProps
    extends React.DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    activeItem: Channel;
    toggleRerender: () => void;
}

const ChannelDeleteButton: React.FC<ChannelDeleteButtonProps> = ({
    activeItem,
    toggleRerender,
    ...props
}) => {
    return (
        <Button
            className="bg-red-500 border text-white mx-2.5"
            type="button"
            onClick={(e) => {
                e.preventDefault();

                deleteChannel(activeItem.id).then(() => {
                    toggleRerender();
                });
            }}
            {...props}
        >
            Delete
        </Button>
    );
};

export default ChannelDeleteButton;
