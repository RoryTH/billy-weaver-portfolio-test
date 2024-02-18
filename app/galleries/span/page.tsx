import ImageGallery from '../../components/Gallery';
import { links } from '../galleryLinks';
import { images } from '@/utils/images';

const currentGalleryIndex = links.findIndex(
    (gallery) => gallery.label === 'Span'
);
const previousGallery = links[currentGalleryIndex - 1];
const nextGallery = links[currentGalleryIndex + 1];

export default function Span() {
    return (
        <div className="flex flex-col items-center p-5">
            <ImageGallery
                heading={'Go the distance.'}
                tagline={'There are no limits to what you can cover...'}
                images={images}
                previousGallery={previousGallery}
                nextGallery={nextGallery}
            />
        </div>
    );
}
