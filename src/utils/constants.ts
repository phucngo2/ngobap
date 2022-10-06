export const providerOptions: SelectOptionsType = [
    {
        title: "Youtube",
        value: "youtube",
    },
    {
        title: "Bilibili",
        value: "bilibili",
    },
    {
        title: "Gmail",
        value: "google",
    },
    {
        title: "Discord",
        value: "discord",
    },
];

export const referencesList: ReferenceType[] = [
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
    },
    {
        icon: ["fab", "discord"],
        title: "Discord",
        name: "Ngô Bắp#0136",
        url: () => {
            navigator.clipboard.writeText("Ngô Bắp#0136");
        },
    },
    {
        icon: ["fab", "bilibili"],
        title: "Bilibili    ",
        name: "Ngô Bắp「ビリ」",
        url: "https://www.bilibili.tv/vi/space/1273275595",
    },
    {
        icon: ["fab", "github"],
        title: "Web Developer",
        name: "phucnnh21",
        url: "https://phucnnh21.github.io/",
    },
    {
        icon: ["fas", "paintbrush"],
        title: "Avatar Illustrator",
        name: "QuAn_",
        url: "https://www.pixiv.net/en/users/6657532",
    },
];
