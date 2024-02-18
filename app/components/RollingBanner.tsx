'use client';

const RollingBanner = () => {
    const marqueeText =
        'Bill Weaver Photo & Video • Bill Weaver Photo & Video • Bill Weaver Photo & Video • Bill Weaver Photo & Video • Bill Weaver Photo & Video • ';
    // Create an array to determine the number of repetitions
    const repetitions = Array.from({ length: 2 }, () => marqueeText);

    return (
        <div className="flex overflow-hidden gap-4 relative user-select-none">
            {repetitions.map((content, index) => (
                <h1
                    key={index}
                    className="scroll inter-font leading-normal shrink-0 flex justify-around min-w-full gap-4 animate-scroll text-7xl mt-40 text-center font-semibold text-gray-100/80 z-30"
                >
                    {content}
                </h1>
            ))}
        </div>
    );
};

export default RollingBanner;
