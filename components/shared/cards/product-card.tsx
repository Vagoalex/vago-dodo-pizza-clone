import React from 'react';
import Link from 'next/link';
import { Title } from '@/components/shared/typography';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui';

interface Props {
    id: string;
    name: string;
    ingredients: string[];
    price: number;
    count?: number;
    imageUrl: string;
    className?: string;
    tag?: 'div' | 'li';
}

export const ProductCard: React.FC<Props> = ({
    id,
    name,
    ingredients,
    price,
    count,
    imageUrl,
    className,
    tag: Tag = 'li',
}) => {
    const formattedIngredientsText = React.useMemo(() => {
        const formattedCharCaseArray = ingredients.map((item, index) => {
            if (index === 0) {
                return item.charAt(0).toUpperCase() + item.substring(1);
            }

            return item.toLowerCase();
        });

        return formattedCharCaseArray.join(', ');
    }, [ingredients]);

    return (
        <Tag className={className}>
            <Link href={`/product/${id}`}>
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <img
                        className="w-[215px] h-[215px]"
                        src={imageUrl}
                        alt={name}
                    />
                </div>

                <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

                <p className="text-sm text-gray-400">
                    {formattedIngredientsText}
                </p>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-[20px]">
                        от <b>{price} ₽</b>
                    </span>

                    {/*{count ? (*/}
                    {/*    <CountButton value={count} size="lg" />*/}
                    {/*) : (*/}
                    <Button variant="secondary">
                        <Plus size={20} className="mr-1" />
                        Добавить
                    </Button>
                    {/*)}*/}
                </div>
            </Link>
        </Tag>
    );
};
