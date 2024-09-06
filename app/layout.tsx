import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import React from 'react'
import { Header } from '@/components/shared/header/header'

const nunitoFont = Nunito({
    subsets: ['cyrillic'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
    title: 'Vago Dodo pizza clone | Главная',
    description: 'Dodo pizza clone with nest.js and react + prisma',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={nunitoFont.variable}>
                <main className="min-h-screen">
                    <Header />
                    {children}
                </main>
            </body>
        </html>
    )
}
