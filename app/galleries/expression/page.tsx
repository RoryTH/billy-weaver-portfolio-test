import ImageGallery from '../../components/Gallery';
import { links } from '.././galleryLinks';
import { images } from '@/utils/images';

const currentGalleryIndex = links.findIndex(
    (gallery) => gallery.label === 'Expression'
);
const previousGallery = links[currentGalleryIndex - 1];
const nextGallery = links[currentGalleryIndex + 1];

export default function Expression() {
    return (
        <div className="flex flex-col items-center p-5">
            <ImageGallery
                heading={'Cover the Gig.'}
                tagline={
                    'Catch the moments that everyone wanted to remember ... or the ones that nobody saw.'
                }
                images={images}
                previousGallery={previousGallery}
                nextGallery={nextGallery}
            />
        </div>
    );
}
