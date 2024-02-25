import ImageGallery from '../../components/Gallery';
import { links } from '../galleryLinks';
import { images } from '@/utils/images';

const currentGalleryIndex = links.findIndex(
    (gallery) => gallery.label === 'Pulse'
);
const previousGallery = links[currentGalleryIndex - 1];
const nextGallery = links[currentGalleryIndex + 1];

export default function Pulse() {
    return (
        <div className="w-full flex flex-col items-center p-5">
            <ImageGallery
                heading={'Ambience preserved.'}
                tagline={
                    <>
                        Showcase the feeling of your establishment. Capture the{' '}
                        <span className="italic">energy</span>
                    </>
                }
                images={images}
                previousGallery={previousGallery}
                nextGallery={nextGallery}
            />
        </div>
    );
}
