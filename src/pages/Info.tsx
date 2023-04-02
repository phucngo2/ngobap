import InfoItem from "components/Info/InfoItem";
import { INFO_LIST } from "utils/configs";

const Info = () => {
    return (
        <ul className="my-4 w-full space-y-5">
            {INFO_LIST.map((item) => (
                <InfoItem key={item.title} info={item} />
            ))}
        </ul>
    );
};

export default Info;
