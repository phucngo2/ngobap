import { FEATURED_VIDEO } from "utils/configs";

interface FeaturedVideoProps {
    width?: string | number;
    height?: string | number;
}

const FeaturedVideo: React.FC<FeaturedVideoProps> = (props) => {
    return (
        <iframe
            {...props}
            src={FEATURED_VIDEO}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    );
};

export default FeaturedVideo;
