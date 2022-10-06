import {
    collection,
    getDocs,
    addDoc,
    doc,
    deleteDoc,
    updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "utils/firebase-config";

const channelsCollectionRef = collection(db, "channels");

export const getChannels: () => Promise<Channel[]> = async () => {
    const data = await getDocs(channelsCollectionRef);

    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Channel[];
};

export const createChannel = async (channel: ChannelCreateDto) => {
    const imgRef = ref(storage, channel.avatar.name);

    const snapshot = await uploadBytes(imgRef, channel.avatar);

    const channelUpload: ChannelUploadDto = {
        ...channel,
        avatar: await getDownloadURL(snapshot.ref),
    };

    const res = await addDoc(channelsCollectionRef, channelUpload);

    return res;
};

export const deleteChannel = async (id: string) => {
    const channelDoc = doc(db, "channels", id);

    await deleteDoc(channelDoc);
};

export const updateChannel = async (channelUpdate: ChannelUpdateDto) => {
    const channelDoc = doc(db, "channels", channelUpdate.id);

    if (channelUpdate.avatar) {
        const imgRef = ref(storage, channelUpdate.avatar.name);

        const snapshot = await uploadBytes(imgRef, channelUpdate.avatar);

        const avatar = await getDownloadURL(snapshot.ref);

        return updateDoc(channelDoc, {
            title: channelUpdate.title,
            url: channelUpdate.url,
            description: channelUpdate.description,
            provider: channelUpdate.provider,
            avatar,
            displayOrder: channelUpdate.displayOrder,
        });
    }

    updateDoc(channelDoc, {
        title: channelUpdate.title,
        url: channelUpdate.url,
        description: channelUpdate.description,
        provider: channelUpdate.provider,
        displayOrder: channelUpdate.displayOrder,
    });
};
