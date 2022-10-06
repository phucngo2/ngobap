type Provider = "youtube" | "google" | "bilibili" | "discord";

type ChannelClickHandler = (channel: Channel) => void;

interface Channel {
    id: string;
    title: string;
    avatar: string;
    provider: Provider;
    description: string;
    url: string;
    displayOrder: number | string;
}

interface ChannelCreateDto {
    title: string;
    avatar: File;
    provider: Provider;
    description: string;
    url: string;
    displayOrder: number | string;
}

interface ChannelUploadDto {
    title: string;
    avatar: string;
    provider: Provider;
    description: string;
    url: string;
    displayOrder: number | string;
}

interface ChannelForm {
    title: string;
    url: string;
    provider: Provider;
    description: string;
    displayOrder: number | string;
}

interface ChannelUpdateDto {
    id: string;
    title: string;
    avatar: File | null;
    provider: Provider;
    description: string;
    url: string;
    displayOrder: number | string;
}
