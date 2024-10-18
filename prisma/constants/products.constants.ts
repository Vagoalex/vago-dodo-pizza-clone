import { Prisma } from '@prisma/client';
import { ingredients } from '@/prisma/constants/ingredients.constants';

export const products: Prisma.ProductCreateManyInput[] = [
    {
        name: 'omelette_with_bacon',
        rusTitle: 'Омлет с беконом',
        imageUrl:
            'public/images/products/breakfast/omelette_with_bacon/small.png',
        categoryId: 2,
    },
    {
        name: 'omelette_with_ham_and_mushrooms',
        rusTitle: 'Омлет с ветчиной и грибами',
        imageUrl:
            'public/images/products/breakfast/omelette_with_ham_and_mushrooms/small.png',
        categoryId: 2,
    },
    {
        name: 'pasta_with_shrimps',
        rusTitle: 'Паста с грибами',
        imageUrl: 'public/images/products/snacks/pasta_with_shrimps/small.png',
        categoryId: 3,
    },
];

export const productsPizzas: Prisma.ProductUncheckedCreateWithoutVariantsInput[] =
    [
        {
            name: 'befstroganov',
            rusTitle: 'Бефстроганов',
            imageUrl: 'public/images/products/pizzas/befstroganov/small.png',
            categoryId: 1,
            ingredients: {
                connect: ingredients
                    .slice(0, 5)
                    .map((item) => ({ id: item.id })),
            },
        },
        {
            name: 'cheese',
            rusTitle: 'Сырная',
            imageUrl: 'public/images/products/pizzas/cheese/small.png',
            categoryId: 1,
            ingredients: {
                connect: ingredients
                    .slice(0, 5)
                    .map((item) => ({ id: item.id })),
            },
        },
        {
            name: 'double_chicken',
            rusTitle: 'Двойной цыпленок',
            imageUrl: 'public/images/products/pizzas/double_chicken/small.png',
            categoryId: 1,
            ingredients: {
                connect: ingredients
                    .slice(5, 10)
                    .map((item) => ({ id: item.id })),
            },
        },
        {
            name: 'ham_and_cheese',
            rusTitle: 'Ветчина и сыр',
            imageUrl: 'public/images/products/pizzas/ham_and_cheese/small.png',
            categoryId: 1,
            ingredients: {
                connect: ingredients
                    .slice(0, 5)
                    .map((item) => ({ id: item.id })),
            },
        },
        {
            name: 'meat_with_adjika',
            rusTitle: 'Мясо с аджикой',
            imageUrl:
                'public/images/products/pizzas/meat_with_adjika/small.png',
            categoryId: 1,
            ingredients: {
                connect: ingredients
                    .slice(5, 10)
                    .map((item) => ({ id: item.id })),
            },
        },
        {
            name: 'pepperoni_fresh',
            rusTitle: 'Пеперони фрэш',
            imageUrl: 'public/images/products/pizzas/pepperoni_fresh/small.png',
            categoryId: 1,
            ingredients: {
                connect: ingredients
                    .slice(0, 5)
                    .map((item) => ({ id: item.id })),
            },
        },
        {
            name: 'shrimps_with_sweet_chili',
            rusTitle: 'Грибы со сладким чили',
            imageUrl:
                'public/images/products/pizzas/shrimps_with_sweet_chili/small.png',
            categoryId: 1,
            ingredients: {
                connect: ingredients
                    .slice(10, 5)
                    .map((item) => ({ id: item.id })),
            },
        },
    ];
