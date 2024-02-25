import Image from 'next/image';
import React from 'react';
import Service from '../components/Service';

export default function Services() {
    const data = [
        {
            title: 'Photography',
            description:
                'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.',
            imageUrl: '/expression.jpeg'
        },
        {
            title: 'Videography',
            description:
                'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.',
            imageUrl: '/expression.jpeg'
        },
        {
            title: 'Editing',
            description:
                'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.',
            imageUrl: '/expression.jpeg'
        }
    ];

    return (
        <div className="fadeIn flex flex-col-reverse w-full md:flex-row gap-10 p-5 pt-28  md:gap-28 xl:px-20 2xl:px-40 max-w-screen-3xl ">
            <div className="container mx-auto px-4">
                {data.map((item, index) => (
                    <Service
                        key={index}
                        index={index}
                        title={item.title}
                        description={item.description}
                        imageUrl={item.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}
