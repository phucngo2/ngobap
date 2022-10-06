type ColCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ReferenceType = {
    icon: string | string[];
    title: string;
    name: string;
    url: string | (() => void);
};
