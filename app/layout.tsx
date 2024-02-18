import type { Metadata } from 'next';
import { Inter, Space_Mono } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceMono = Space_Mono({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-mono'
});

export const metadata: Metadata = {
    title: 'Billy Weaver',
    description: 'Billy Weaver photo and video services'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${spaceMono.variable} bg-neutral-950 text-gray-100 mono-font min-h-screen max-w-screen-2xl flex flex-col mx-auto`}
            >
                <NavBar />
                <div className="grow flex justify-center items-center pt-32 p-5">
                    {children}
                </div>
            </body>
        </html>
    );
}
