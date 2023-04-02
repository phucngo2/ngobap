import InfoItem from "components/Info/InfoItem";
import { HOBBY_LIST } from "utils/configs";

const Hobby = () => {
    return (
        <>
            <ul className="w-full my-4 space-y-5">
                {HOBBY_LIST.map((item, index) => (
                    <InfoItem key={item.title + index} info={item} />
                ))}
            </ul>
        </>
    );
};

export default Hobby;
