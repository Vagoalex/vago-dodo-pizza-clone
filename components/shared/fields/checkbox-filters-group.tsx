import { cn } from '@/lib/utils';
import React from 'react';
import { FilterCheckboxProps } from '@/components/shared/fields/filter-checkbox';

type Item = FilterCheckboxProps;

interface Props {
    title: string;
    className?: string;
    items: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: Item[];
    defaultItems?: unknown[];
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
    title,
    className,
    items,
    limit = 5,
    searchInputPlaceholder = 'Поиск...',
    onChange,
    defaultValue,
    defaultItems,
}) => {
    return <div className={cn('mx-auto max-w-[1280px]', className)}></div>;
};
