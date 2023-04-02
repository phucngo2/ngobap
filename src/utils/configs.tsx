import { IconName } from "@fortawesome/fontawesome-svg-core";
import Donate from "pages/Donate";
import General from "pages/General";
import Hobby from "pages/Hobby";
import Info from "pages/Info";

export const IFRAME_RATIO = 16 / 9;
export const IFRAME_HEIGHT = 300;
export const IFRAME_WIDTH = IFRAME_HEIGHT * IFRAME_RATIO;

export const AVATAR = "/dumbface.png";
export const YOUTUBE_CHANNEL = "https://www.youtube.com/@NgoBap";
export const PLAYER_DUO = "https://playerduo.com/ngobapp";
export const FEATURED_VIDEO = "https://www.youtube.com/embed/u_GCYM33BLI";

export const BG_STYLE = {
    backgroundImage: "url(/suisei.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "right",
    backgroundPositionY: "-2rem",
};

export type MenuItem = {
    title: string;
    tooltip: string;
    icon: IconName;
    component: React.FC;
};

export const MENU: MenuItem[] = [
    {
        title: "General",
        tooltip: "Thông tin chung",
        icon: "home",
        component: General,
    },
    {
        title: "Hobby",
        tooltip: "Game gủng",
        icon: "gamepad",
        component: Hobby,
    },
    {
        title: "Donate",
        tooltip: "Khều donate",
        icon: "mug-hot",
        component: Donate,
    },
    {
        title: "Info",
        tooltip: "Thông tin liên lạc",
        icon: "info",
        component: Info,
    },
];

export const GENERAL_LIST: InfoItemType[] = [
    {
        icon: "tag",
        title: "Tên",
        name: "Ngô Bắp",
    },
    {
        icon: "mars",
        title: "Giới tính",
        name: "Nam",
    },
    {
        icon: "cake-candles",
        title: "Sinh nhật",
        name: "21/06/????",
    },
    {
        icon: ["fab", "youtube"],
        title: "Sinh nhật kênh",
        name: "21/06/2017",
        bg: "bg-rose-200 hover:bg-rose-400",
    },
    {
        icon: "palette",
        title: "Màu yêu thích",
        name: "Blue",
        bg: "bg-blue-200 hover:bg-blue-400",
    },
    {
        icon: "mug-saucer",
        title: "Đồ uống yêu thích",
        name: "Cà phê",
        bg: "bg-orange-200 hover:bg-orange-400",
    },
    {
        icon: "battery-half",
        title: "Tính cách",
        name: "Hướng noise",
    },
    {
        icon: "meteor",
        title: "Sở thích",
        name: "Animu, nhạc nhẽo, game gủng,...",
    },
];

export const HOBBY_LIST: GameItemType[] = [
    {
        imgSrc: "/lol.png",
        title: "Game 200 năm",
        name: "Cormet",
    },
    {
        imgSrc: "/wild-rift.png",
        title: "Game 200 năm",
        name: "CornFeeder#2485",
    },
    {
        imgSrc: "/a9.png",
        title: "Kyaa Skadi",
        name: "Centaureissi#5671",
    },
    {
        imgSrc: "/neural-cloud.png",
        title: "Neural Cloud",
        name: "PCorn - 1322219",
    },
    {
        imgSrc: "/dumbface-icon.png",
        title: "Dumb face",
        name: "???",
    },
];

export const INFO_LIST: InfoItemType[] = [
    {
        icon: ["fab", "google"],
        title: "Gmail",
        name: "phony13401@gmail.com",
        url: "mailto:phony13401@gmail.com",
    },
    {
        icon: ["fab", "youtube"],
        title: "Youtube",
        name: "Ngô Bắp ♪",
        url: "https://www.youtube.com/channel/UCqQZmkjMiNYhqgg1h6cDrPw",
        bg: "bg-rose-200 hover:bg-rose-400",
    },
    {
        icon: ["fab", "facebook"],
        title: "Facebook    ",
        name: "Ngô Bắp",
        url: "https://youtu.be/dQw4w9WgXcQ",
        bg: "bg-blue-200 hover:bg-blue-400",
    },
    {
        icon: ["fab", "discord"],
        title: "Discord",
        name: "Ngô Bắp#0136",
        url: () => {
            navigator.clipboard.writeText("Ngô Bắp#0136");
        },
        bg: "bg-purple-200 hover:bg-purple-400",
    },
    {
        icon: ["fab", "bilibili"],
        title: "Bilibili    ",
        name: "Ngô Bắp「ビリ」",
        url: "https://www.bilibili.tv/vi/space/1273275595",
        bg: "bg-cyan-200 hover:bg-cyan-400",
    },
    {
        icon: ["fab", "github"],
        title: "Web Developer",
        name: "phucnnh21",
        url: "https://phucnnh21.github.io/",
    },
    {
        icon: ["fas", "paintbrush"],
        title: "Background",
        name: "いちかわはる",
        url: "https://www.pixiv.net/en/artworks/98699764",
    },
];
