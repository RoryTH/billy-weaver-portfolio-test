import React from 'react';
import Image from 'next/image';

interface ServiceProps {
    index: number;
    title: string;
    description: string;
    imageUrl: string;
}

const Service: React.FC<ServiceProps> = ({
    index,
    title,
    description,
    imageUrl
}) => {
    const isEven = index % 2 === 0;

    return (
        <div
            className={`flex flex-col md:flex-row ${
                isEven ? 'md:flex-row-reverse' : 'md:flex-row'
            } gap-10 md:gap-14 mb-28`}
        >
            <div className="md:flex-1 relative h-60 md:h-96 w-full md:w-1/2 md:p-20">
                {' '}
                <Image
                    src={imageUrl}
                    alt="Image of service"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <div className="md:flex-1 text-justify">
                <h2
                    className={`mb-5 inter-font font-semibold  text-center ${
                        isEven ? 'md:text-left' : 'md:text-right'
                    } text-4xl md:text-6xl `}
                >
                    {title}
                </h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;
