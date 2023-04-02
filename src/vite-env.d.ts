/// <reference types="vite/client" />

type BaseItemType = {
    title: string;
    name: string;
    url?: string | (() => void);
    bg?: string;
};

type InfoItemType = BaseItemType & {
    icon: string | string[];
};

type GameItemType = BaseItemType & {
    imgSrc: string;
};
