import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from '@/components/shared/typography';
import { ProductCard } from '@/components/shared/cards';

interface Props {
    title: string;
    items: unknown[];
    categoryId: number;
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
    title,
    items,
    categoryId,
    className,
    listClassName,
}) => {
    return (
        <div className={className}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />

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
