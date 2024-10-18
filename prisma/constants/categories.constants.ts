import { Prisma } from '@prisma/client';

export const categories: Prisma.CategoryCreateManyInput[] = [
    { title: 'Пиццы', name: 'pizzas' },
    { title: 'Завтрак', name: 'breakfast' },
    { title: 'Закуски', name: 'snacks' },
    // { name: 'Коктейли' },
    // { name: 'Напитки' },
].map((item, index) => ({ id: index + 1, ...item }));
