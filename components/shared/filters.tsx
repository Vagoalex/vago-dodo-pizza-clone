import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from '@/components/shared/typography';
import {
    CheckboxFiltersGroup,
    FilterCheckbox,
} from '@/components/shared/fields';
import { Input, RangeSlider } from '@/components/ui';
import { CheckboxFiltersGroupItem } from '@/components/shared/fields/checkbox-filters-group';

const defaultItems: CheckboxFiltersGroupItem[] = [
    {
        text: 'Сырный соус',
        value: '1',
    },
    {
        text: 'Моццарелла',
        value: '2',
    },
    {
        text: 'Чеснок',
        value: '3',
    },
    {
        text: 'Солённые огурчики',
        value: '4',
    },
    {
        text: 'Красный лук',
        value: '5',
    },
    {
        text: 'Томаты',
        value: '6',
    },
];

const additionalItems: CheckboxFiltersGroupItem[] = [
    {
        text: 'Томатный соус',
        value: '7',
    },
    {
        text: 'Гаргонзолла',
        value: '8',
    },
    {
        text: 'Укроп',
        value: '9',
    },
    {
        text: 'Солённые молосольные огурчики',
        value: '10',
    },
    {
        text: 'Зеленый лук',
        value: '11',
    },
    {
        text: 'Свежие огурчики',
        value: '12',
    },
];

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('mx-auto max-w-[1280px]', className)}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            {/*Верхние чекбоксы*/}
            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="1" />
                <FilterCheckbox text="Новинки" value="2" />
            </div>

            {/*Нижние фильтры для цен с range слайдером*/}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={30000}
                        defaultValue={0}
                    />
                    <Input
                        type="number"
                        min={100}
                        max={30000}
                        placeholder="30000"
                    />
                </div>
                <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
            </div>

            <CheckboxFiltersGroup
                title="Ингредиенты:"
                className="mt-5"
                limit={6}
                defaultItems={defaultItems}
                items={[...defaultItems, ...additionalItems]}
            />
        </div>
    );
};
