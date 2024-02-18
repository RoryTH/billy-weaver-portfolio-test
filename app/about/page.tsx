import Image from 'next/image';

export default function About() {
    return (
        <div className="fadeIn flex flex-col-reverse md:flex-row gap-10 p-5 md:gap-28 xl:px-20 2xl:px-40 max-w-screen-2xl ">
            <div className="md:w-1/2 w-full h-1/2 md:h-auto ">
                <h1 className="mb-4 text-4xl inter-font font-semibold tracking-tight md:text-6xl ">
                    {' '}
                    About me
                </h1>
                <div className=" text-justify leading-6">
                    <p className="mb-8"> Hi there! I'm Bill.</p>
                    <p className="mb-8">
                        {' '}
                        I have been taking photographs since I was old enough to
                        hold a camera. I am constantly amazed at the power a
                        single photo can have over one's imagination, and my aim
                        is always to squeeze out every resource available within
                        that frame to aid that process. Whatever the assignment,
                        my primary interest is to capture the story of the
                        subject, or to at least invite the observer in to create
                        their own.
                    </p>
                    <p className="mb-8">
                        {' '}
                        I enjoy photography in all it's forms, and the different
                        challenges that come with different briefs. I think
                        there should always be some compelling element to a
                        photo, so whatever the assignment, I abide by this rule.
                    </p>
                    <p>
                        {' '}
                        I am available for hire for any and all scenarios, with
                        a background in portraiture, live music & nightlife and
                        urban photography, as well as significant experience in
                        corporate shoots such as staff profiles, food & drinks
                        menus and conference coverage. Any photojournalistic
                        projects are of particular interest to me. I use my own
                        equipment and am able to travel within the UK.
                    </p>
                </div>
            </div>
            <div className="relative h-60 w-full  md:w-1/2  md:h-auto">
                <Image
                    className="rounded-md "
                    src={'/billy1.jpeg'}
                    alt={''}
                    fill
                    objectFit="cover"
                />
            </div>
        </div>
    );
}
