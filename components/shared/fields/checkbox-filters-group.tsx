'use client';

import React from 'react';
import {
    FilterCheckbox,
    FilterCheckboxProps,
} from '@/components/shared/fields/filter-checkbox';
import { Input } from '@/components/ui';

export type CheckboxFiltersGroupItem = FilterCheckboxProps;

interface Props {
    title: string;
    className?: string;
    items: CheckboxFiltersGroupItem[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
    defaultItems: CheckboxFiltersGroupItem[];
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
    const [showAll, setShowAll] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    const filterList = (items: CheckboxFiltersGroupItem[]) => {
        return items.filter((item) =>
            item.text.toLowerCase().includes(searchValue.toLowerCase())
        );
    };

    const onChangeSearchValue = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchValue(event.target.value);
    };

    const list = items.length ? filterList(items) : defaultItems;
    const viewList = showAll ? list : list.slice(0, limit);

    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>

            {showAll && (
                <div className="mb-5">
                    <Input
                        placeholder={searchInputPlaceholder}
                        className="bg-gray-50 border-none"
                        value={searchValue}
                        onChange={onChangeSearchValue}
                    />
                </div>
            )}

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {viewList.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={false}
                        onCheckedChange={(ids) => console.warn(ids)}
                    />
                ))}
            </div>

            {list.length > limit && (
                <div
                    className={
                        showAll ? 'border-t border-t-neutral-100 mt-4' : ''
                    }
                >
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-primary mt-3"
                    >
                        {showAll ? 'Скрыть' : '+ Показать все'}
                    </button>
                </div>
            )}
        </div>
    );
};
