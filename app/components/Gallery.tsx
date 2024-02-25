'use client';
import Image from 'next/image';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PiCaretLeft, PiCaretRight } from 'react-icons/pi';

interface Image {
    src: string;
    alt: string;
}

interface GalleryLink {
    href: string;
    label: string;
}

interface ImageGalleryProps {
    heading: string | JSX.Element;
    tagline: string | JSX.Element;
    images: Image[];
    previousGallery?: GalleryLink;
    nextGallery?: GalleryLink;
}

const ImageGallery: FC<ImageGalleryProps> = ({
    heading,
    tagline,
    images,
    previousGallery,
    nextGallery
}) => {
    return (
        <>
            <div className="mt-32 mb-16  w-full flex flex-col items-center text-center">
                <h1 className="inter-font font-bold text-5xl md:text-6xl 2xl:text-8xl text-bold mb-5">
                    {heading}
                </h1>
                <p className="space-y-5 2xl:text-lg">{tagline}</p>
            </div>
            <div className="w-full columns-1 md:columns-3 gap-4">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="w-full"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto mb-4 inline-block"
                            width={1000}
                            height={1000}
                            layout="responsive"
                        />
                    </motion.div>
                ))}
            </div>
            <div className="w-full flex flex-row justify-between inter-font text-lg md:text-3xl font-semibold pt-10 px-3 md:px-10">
                {previousGallery && (
                    <Link className="mr-auto" href={previousGallery.href}>
                        <PiCaretLeft className="inline-block" />{' '}
                        {previousGallery.label}
                    </Link>
                )}
                {nextGallery && (
                    <Link className="ml-auto" href={nextGallery.href}>
                        {nextGallery.label}{' '}
                        <PiCaretRight className="inline-block" />
                    </Link>
                )}
            </div>
        </>
    );
};

export default ImageGallery;
