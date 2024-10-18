import { Prisma } from '@prisma/client';

export const categories: Prisma.CategoryCreateManyInput[] = [
    { name: 'Пиццы' },
    { name: 'Завтрак' },
    { name: 'Закуски' },
    { name: 'Коктейли' },
    { name: 'Напитки' },
].map((item, index) => ({ id: index + 1, ...item }));
