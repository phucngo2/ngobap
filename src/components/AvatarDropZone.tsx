import React, { useEffect } from "react";
import Dropzone from "react-dropzone";

interface AvatarDropZoneProps {
    file: File | null;
    setFile: React.Dispatch<React.SetStateAction<File | null>>;
    preview: string;
    setPreview: React.Dispatch<React.SetStateAction<string>>;
}

const AvatarDropZone: React.FC<AvatarDropZoneProps> = ({
    file,
    setFile,
    preview,
    setPreview,
}) => {
    const handleDrop = <T extends File>(acceptedFiles: T[]) => {
        if (acceptedFiles.length > 0) {
            const inputedFile = acceptedFiles[0];

            setFile(inputedFile);
        }
    };

    useEffect(() => {
        if (file) {
            const objectUrl = window.URL.createObjectURL(file);
            return setPreview(objectUrl);
        }
    }, [file]);

    return (
        <Dropzone
            onDrop={handleDrop}
            accept={{
                "image/*": [".png", ".gif", ".jpeg", ".jpg"],
            }}
        >
            {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    <img
                        className="rounded-full cursor-pointer border"
                        style={{
                            width: 120,
                            height: 120,
                        }}
                        src={preview || DEFAULT_IMG}
                        alt="avatar"
                    />
                </div>
            )}
        </Dropzone>
    );
};

export default AvatarDropZone;

const DEFAULT_IMG =
    "https://firebasestorage.googleapis.com/v0/b/cornverse-3c5e4.appspot.com/o/Image2.jpg?alt=media";
