'use client';
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
    heading: string;
    tagline: string;
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
            <div className="my-28 flex flex-col items-center text-center">
                <h1 className="text-6xl text-bold mb-5">{heading}</h1>
                <p>{tagline}</p>
            </div>
            <div className="columns-1 md:columns-3 gap-4">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto mb-4 inline-block"
                        />
                    </motion.div>
                ))}
            </div>
            <div className="w-full flex flex-row justify-between inter-font text-3xl font-semibold p-10">
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
