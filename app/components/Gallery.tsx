// components/ImageGallery.tsx
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { PiCaretRight } from 'react-icons/pi';

interface Image {
    src: string;
    alt: string;
}

interface ImageGalleryProps {
    heading: string;
    tagline: string;
    images: Image[];
}

const ImageGallery: FC<ImageGalleryProps> = ({ heading, tagline, images }) => {
    return (
        <div className="px-5">
            <div className="my-28 flex flex-col items-center text-center">
                <h1 className="text-6xl text-bold mb-5">{heading}</h1>
                <p>{tagline}</p>
            </div>
            <div className="columns-3 gap-4">
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
        </div>
    );
};

export default ImageGallery;
