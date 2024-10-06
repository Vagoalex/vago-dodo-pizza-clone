import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
    title: string;
    className?: string;
    items: unknown[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
    defaultItems?: unknown[];
}

export const CheckboxFiltersGroup: React.FC<Props> = ({ title, className }) => {
    return <div className={cn('mx-auto max-w-[1280px]', className)}></div>;
};
