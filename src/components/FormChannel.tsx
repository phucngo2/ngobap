import { FieldValues, UseFormReturn } from "react-hook-form";
import { providerOptions } from "utils/constants";
import Button from "./Button";
import ChannelDeleteButton from "./ChannelDeleteButton";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import AvatarDropZone from "./AvatarDropZone";
import { useEffect, useState } from "react";
import { createChannel, updateChannel } from "data/channels";

interface FormChannelProps {
    form: UseFormReturn<FieldValues, any>;
    mode: FormMode;
    setMode: React.Dispatch<React.SetStateAction<FormMode>>;
    activeItem: Channel | null;
    setActiveItem: React.Dispatch<React.SetStateAction<Channel | null>>;
    setToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormChannel: React.FC<FormChannelProps> = ({
    mode,
    setMode,
    form: {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    },
    activeItem,
    setActiveItem,
    setToggled,
}) => {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    function resetForm() {
        reset({
            title: "",
            url: "",
            provider: "youtube",
            description: "",
            dislayOrder: "",
        });
    }

    function toggleRerender() {
        setToggled((state) => !state);
        resetForm();
        setFile(null);
        setPreview("");
        setActiveItem(null);
        setMode("create");
    }

    const handleSubmitForm = (data: FieldValues) => {
        setLoading(true);

        if (mode === "create") {
            if (!file) return setLoading(false);

            createChannel({ ...(data as ChannelForm), avatar: file }).then(
                () => {
                    setLoading(false);
                    toggleRerender();
                }
            );
        } else {
            updateChannel({
                id: activeItem!.id,
                title: data.title,
                url: data.url,
                description: data.description,
                provider: data.provider,
                avatar: file,
                displayOrder: data.displayOrder,
            }).then(() => {
                setLoading(false);
                toggleRerender();
            });
        }
    };

    useEffect(() => {
        if (activeItem) {
            setFile(null);
            setPreview(activeItem.avatar);

            reset({
                ...activeItem,
            });
        } else {
            setFile(null);
            setPreview("");

            resetForm();
        }
    }, [activeItem]);

    const renderFormButtons = () => {
        if (mode === "create")
            return (
                <Button
                    className="bg-blue-400 border text-white"
                    type="submit"
                    disabled={loading}
                >
                    Create
                </Button>
            );

        return (
            <>
                <Button
                    className="bg-gray-500 border text-white"
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();

                        setActiveItem(null);
                        setMode("create");
                    }}
                    disabled={loading}
                >
                    Cancel
                </Button>
                <ChannelDeleteButton
                    disabled={loading}
                    activeItem={activeItem!}
                    toggleRerender={toggleRerender}
                />
                <Button
                    className="bg-blue-500 border text-white"
                    type="submit"
                    disabled={loading}
                >
                    Update
                </Button>
            </>
        );
    };

    return (
        <div className="h-full w-full px-6 py-10 flex flex-col items-center justify-between">
            <div className="h-full w-full flex flex-col items-center">
                <div className="mb-4">
                    <AvatarDropZone
                        file={file}
                        setFile={setFile}
                        preview={preview}
                        setPreview={setPreview}
                    />
                </div>
                <form
                    className="w-full"
                    onSubmit={handleSubmit(handleSubmitForm)}
                >
                    <Input
                        className="py-2 w-full"
                        label="Tít le"
                        placeholder="Enter channel title"
                        register={register("title")}
                        error={errors.title}
                    />
                    <Input
                        className="py-2 w-full"
                        label="Link to Channel"
                        placeholder="Enter the url to access the channel"
                        register={register("url")}
                        error={errors.url}
                    />
                    <Select
                        className="py-2 w-full"
                        label="Provider"
                        register={register("provider")}
                        error={errors.provider}
                        options={providerOptions}
                    />
                    <TextArea
                        className="py-2 w-full"
                        label="Description"
                        placeholder="Enter the description"
                        register={register("description")}
                        error={errors.description}
                    />
                    <Input
                        className="py-2 w-full"
                        label="Display order"
                        placeholder="Enter the display order"
                        register={register("displayOrder")}
                        error={errors.displayOrder}
                        type="number"
                    />
                    <div className="w-full flex flex-row justify-end mt-1.5">
                        {renderFormButtons()}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormChannel;
