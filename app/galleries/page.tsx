'use client';
import Link from 'next/link';
import { FC, useState } from 'react';
import { links } from './galleryLinks';

interface LinkItemProps {
    href: string;
    label: string;
    bgImage: string;
    setBackgroundImage: (image: string) => void;
    setShowBackground: (show: boolean) => void;
}

const LinkItem: FC<LinkItemProps> = ({
    href,
    label,
    bgImage,
    setBackgroundImage,
    setShowBackground
}) => (
    <h2 className="text-lg mb-10 tracking-extraWide z-10">
        <Link
            href={href}
            onMouseEnter={() => {
                setBackgroundImage(bgImage);
                setShowBackground(true);
            }}
            onMouseLeave={() => {
                setShowBackground(false);
            }}
        >
            {label}
        </Link>
    </h2>
);

export default function Galleries() {
    const [backgroundImage, setBackgroundImage] = useState('');
    const [showBackground, setShowBackground] = useState(false); // New state to control visibility

    return (
        <div className="flex flex-col h-[calc(100vh-96px)] w-full justify-center items-center fadeIn relative p-5">
            <div
                className="absolute h-full w-full transition-opacity duration-700"
                style={{
                    backgroundImage: `url('/${backgroundImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: showBackground ? 1 : 0
                }}
            ></div>
            {links.map((link) => (
                <LinkItem
                    key={link.label}
                    {...link}
                    setBackgroundImage={setBackgroundImage}
                    setShowBackground={setShowBackground}
                />
            ))}
        </div>
    );
}
