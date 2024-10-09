export type CategoryTitle = {
    rus: string;
    en?: string;
};

export type Category = {
    id: number;
    name: string;
    title: CategoryTitle;
};
