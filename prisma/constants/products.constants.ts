import { Prisma } from '@prisma/client';

export const products: Prisma.ProductCreateManyInput[] = [
    {
        name: 'Пепперони фреш',
        imageUrl:
            'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
        categoryId: 1,
    },
    {
        name: 'Сырная',
        imageUrl:
            'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
        categoryId: 1,
    },
    {
        name: 'Чоризо фреш',
        imageUrl:
            'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
        categoryId: 1,
    },
];
