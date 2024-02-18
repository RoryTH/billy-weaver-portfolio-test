import RollingBanner from '@/app/components/RollingBanner';

export default function Home() {
    return (
        <div
            className="absolute h-full w-full"
            style={{
                backgroundImage: `url('/hero.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <RollingBanner />
            <h2 className="relative text-center text-lg mt-32 px-5 md:px-96">
                Premium quality photo, video and audio. Develop your brand
                identity with visual storytelling.
            </h2>
        </div>
    );
}
