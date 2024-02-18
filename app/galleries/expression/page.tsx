'use client';
import ImageGallery from '../../components/Gallery';

const images = [
    {
        src: '/billy1.jpeg',
        alt: 'Image 1'
    },
    {
        src: '/expression.jpeg',
        alt: 'Image 1'
    },
    {
        src: '/span.jpeg',
        alt: 'Image 1'
    },
    {
        src: '/expression.jpeg',
        alt: 'Image 1'
    },
    {
        src: '/billy1.jpeg',
        alt: 'Image 1'
    },
    {
        src: '/span.jpeg',
        alt: 'Image 1'
    },
    {
        src: '/billy1.jpeg',
        alt: 'Image 1'
    },
    {
        src: '/billy1.jpeg',
        alt: 'Image 1'
    },
    {
        src: '/billy1.jpeg',
        alt: 'Image 1'
    },
    {
        src: '/expression.jpeg',
        alt: 'Image 1'
    },
    {
        src: '/span.jpeg',
        alt: 'Image 1'
    },
    {
        src: '/expression.jpeg',
        alt: 'Image 1'
    },
    {
        src: '/billy1.jpeg',
        alt: 'Image 1'
    },
    {
        src: '/span.jpeg',
        alt: 'Image 1'
    },
    {
        src: '/billy1.jpeg',
        alt: 'Image 1'
    }
    // Add more images as needed
];

export default function Expression() {
    return (
        <div className="">
            <ImageGallery
                heading={'Cover the Gig'}
                tagline={
                    'Catch the moments that everyone wanted to remember ... or the ones that nobody saw.'
                }
                images={images}
            />
        </div>
    );
}
