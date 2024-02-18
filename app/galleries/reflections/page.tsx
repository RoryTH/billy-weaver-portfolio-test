import ImageGallery from '../../components/Gallery';
import { links } from '../galleryLinks';
import { images } from '@/utils/images';

const currentGalleryIndex = links.findIndex(
    (gallery) => gallery.label === 'Reflections'
);
const previousGallery = links[currentGalleryIndex - 1];
const nextGallery = links[currentGalleryIndex + 1];

export default function Reflections() {
    return (
        <div className="flex flex-col items-center p-5">
            <ImageGallery
                heading={'Behind the curtains.'}
                tagline={
                    <>
                        <p>
                            {' '}
                            No matter your project or business, it’s probably
                            <span className="semibold"> people </span>
                            that make up both your workforce and your customer
                            base.
                        </p>
                        <p>
                            {' '}
                            What are <span className="italic">their </span>
                            stories?
                        </p>
                    </>
                }
                images={images}
                previousGallery={previousGallery}
                nextGallery={nextGallery}
            />
        </div>
    );
}
