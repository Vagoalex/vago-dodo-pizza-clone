import { Container, TopBar } from '@/components/shared';
import { Title } from '@/components/shared/typography';
import { Filters } from '@/components/shared/filters';
import { ProductsGroupList } from '@/components/shared/lists';

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>

            <TopBar />

            <Container className="mt-10 pb-14">
                <div className="flex gap-[80px]">
                    {/* Фильтрация */}
                    <div className="w-[250px]">
                        <Filters />
                    </div>

                    {/* Список товаров */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList
                                title="Пиццы"
                                categoryId={0}
                                items={[
                                    {
                                        id: '0',
                                        name: 'Сырный цыпленок',
                                        ingredients: [
                                            'цыпленок',
                                            'моцарелла',
                                            'сыры чеддер и пармезан',
                                            'сырный соус',
                                            'томаты',
                                            'соус альфредо',
                                            'чеснок',
                                        ],
                                        items: [
                                            {
                                                price: 100,
                                            },
                                            {
                                                price: 300,
                                            },
                                            {
                                                price: 500,
                                            },
                                        ],
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                                    },
                                    {
                                        id: '0',
                                        name: 'Сырный цыпленок',
                                        ingredients: [
                                            'цыпленок',
                                            'моцарелла',
                                            'сыры чеддер и пармезан',
                                            'сырный соус',
                                            'томаты',
                                            'соус альфредо',
                                            'чеснок',
                                        ],
                                        items: [
                                            {
                                                price: 100,
                                            },
                                            {
                                                price: 300,
                                            },
                                            {
                                                price: 500,
                                            },
                                        ],
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                                    },
                                    {
                                        id: '0',
                                        name: 'Сырный цыпленок',
                                        ingredients: [
                                            'цыпленок',
                                            'моцарелла',
                                            'сыры чеддер и пармезан',
                                            'сырный соус',
                                            'томаты',
                                            'соус альфредо',
                                            'чеснок',
                                        ],
                                        items: [
                                            {
                                                price: 100,
                                            },
                                            {
                                                price: 300,
                                            },
                                            {
                                                price: 500,
                                            },
                                        ],
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                                    },
                                    {
                                        id: '0',
                                        name: 'Сырный цыпленок',
                                        ingredients: [
                                            'цыпленок',
                                            'моцарелла',
                                            'сыры чеддер и пармезан',
                                            'сырный соус',
                                            'томаты',
                                            'соус альфредо',
                                            'чеснок',
                                        ],
                                        items: [
                                            {
                                                price: 100,
                                            },
                                            {
                                                price: 300,
                                            },
                                            {
                                                price: 500,
                                            },
                                        ],
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                                    },
                                    {
                                        id: '0',
                                        name: 'Сырный цыпленок',
                                        ingredients: [
                                            'цыпленок',
                                            'моцарелла',
                                            'сыры чеддер и пармезан',
                                            'сырный соус',
                                            'томаты',
                                            'соус альфредо',
                                            'чеснок',
                                        ],
                                        items: [
                                            {
                                                price: 100,
                                            },
                                            {
                                                price: 300,
                                            },
                                            {
                                                price: 500,
                                            },
                                        ],
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
