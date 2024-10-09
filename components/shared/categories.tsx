'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { useCategoryStore } from '@/store/category/categoryStore';
import { Category } from '@/types/global';

interface Props {
    className?: string;
}

const categoriesItems: Category[] = [
    { id: 1, title: { rus: 'Пиццы' }, name: 'pizzas' },
    { id: 2, title: { rus: 'Комбо' }, name: 'combos' },
    { id: 3, title: { rus: 'Закуски' }, name: 'combos' },
    { id: 4, title: { rus: 'Коктейли' }, name: 'cocktails' },
    { id: 5, title: { rus: 'Кофе' }, name: 'coffee' },
    { id: 6, title: { rus: 'Напитки' }, name: 'drinks' },
    { id: 7, title: { rus: 'Десерты' }, name: 'desserts' },
];

export const Categories: React.FC<Props> = ({ className }) => {
    const { activeCategoryId } = useCategoryStore();

    return (
        <div
            className={cn(
                'inline-flex gap-1 bg-gray-50 p-1 rounded-2xl',
                className
            )}
        >
            {categoriesItems.map((categoryItem) => (
                <a
                    href={`/#${categoryItem.name}`}
                    key={categoryItem.id}
                    className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5',
                        activeCategoryId === categoryItem.id &&
                            'bg-white shadow-md shadow-gray-200 text-primary'
                    )}
                >
                    <button>{categoryItem.title.rus}</button>
                </a>
            ))}
        </div>
    );
};
