import ImageGallery from '../../components/Gallery';
import { links } from '../galleryLinks';
import { images } from '@/utils/images';

const currentGalleryIndex = links.findIndex(
    (gallery) => gallery.label === 'Palette'
);
const previousGallery = links[currentGalleryIndex - 1];
const nextGallery = links[currentGalleryIndex + 1];

export default function Palette() {
    return (
        <div className=" w-full flex flex-col items-center p-5">
            <ImageGallery
                heading={
                    <>
                        Hone in on <span className="italic"> essence </span>.
                    </>
                }
                tagline={
                    <>
                        Don’t let your efforts towards{' '}
                        <span className="italic"> your </span> art go to waste.
                        Convey a multi-sensory experience to it’s full extent.
                    </>
                }
                images={images}
                previousGallery={previousGallery}
                nextGallery={nextGallery}
            />
        </div>
    );
}
