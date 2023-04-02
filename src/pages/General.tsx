import InfoItem from "components/Info/InfoItem";
import Avatar from "components/Youtube/Avatar";
import { GENERAL_LIST } from "utils/configs";

const General = () => {
    return (
        <>
            <Avatar className="my-2" />
            <ul className="w-full my-4 space-y-5">
                {GENERAL_LIST.map((item) => (
                    <InfoItem key={item.title} info={item} />
                ))}
            </ul>
        </>
    );
};

export default General;
