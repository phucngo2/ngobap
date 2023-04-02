import { PLAYER_DUO } from "utils/configs";

const Donate = () => {
    return (
        <>
            <div className="my-3">
                Lưu ý: mình không nhận làm video theo yêu cầu!
            </div>
            <a
                href={PLAYER_DUO}
                className="my-3 flex flex-col items-center"
                target="_blank"
            >
                <img src="/playerduo.png" className="h-[8rem] w-[8rem]" />
                <div className="my-2">Ngô Bắp - PlayerDuo</div>
            </a>
        </>
    );
};

export default Donate;
