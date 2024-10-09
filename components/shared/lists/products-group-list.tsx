'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from '@/components/shared/typography';
import { ProductCard } from '@/components/shared/cards';
import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store/category/categoryStore';
import { Category } from '@/types/global';

interface Props {
    items: unknown[];
    category: Category;
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
    items,
    category,
    className,
    listClassName,
}) => {
    const { setActiveCategoryId } = useCategoryStore();

    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(category.id);
        }
    }, [intersection?.isIntersecting, category.id, setActiveCategoryId]);

    return (
        <div className={className} id={category.name} ref={intersectionRef}>
            <Title
                text={category.title.rus}
                size="lg"
                className="font-extrabold mb-5"
            />

            <ul className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((product, i) => (
                    <ProductCard
                        id={product.id}
                        key={product.id}
                        name={product.name}
                        ingredients={product.ingredients}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                        count={i % 2}
                    />
                ))}
            </ul>
        </div>
    );
};
