import { AVATAR, YOUTUBE_CHANNEL } from "utils/configs";

interface AvatarProps {
    className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ className }) => {
    return (
        <a
            href={YOUTUBE_CHANNEL}
            target="_blank"
            className={`rounded-full ${className || ""}`}
        >
            <img src={AVATAR} className="w-[9rem] h-[9rem] rounded-full" />
        </a>
    );
};

export default Avatar;
