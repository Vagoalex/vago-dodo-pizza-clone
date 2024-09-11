import { Container, TopBar } from '@/components/shared'
import { Title } from '@/components/shared/typography'

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>

            <TopBar />
        </>
    )
}
