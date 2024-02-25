'use client';
import React from 'react';

const ContactForm = () => {
    // Example submit handler
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Implement form submission logic here
        console.log('Form submitted');
    };

    return (
        <form
            className="flex flex-col space-y-4 w-full mx-auto mt-8 md:mt-0  p-3"
            onSubmit={handleSubmit}
        >
            <div>
                <label htmlFor="name" className="">
                    Name{' '}
                    <span className="text-gray-100/60 text-sm">(required)</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=""
                    className="w-full p-3 my-2 border rounded-3xl bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-100"
                />
            </div>
            <div>
                <label htmlFor="email" className="">
                    Email{' '}
                    <span className="text-gray-100/60 text-sm">(required)</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder=""
                    className="w-full p-3 my-2 border rounded-3xl bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-100"
                />
            </div>
            <div>
                <label htmlFor="message" className="">
                    Message{' '}
                    <span className="text-gray-100/60 text-sm">(required)</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder=""
                    className="w-full p-3 my-2 border rounded-3xl bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-100"
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-20 p-3 border rounded-3xl bg-gray-100 text-black hover:bg-gray-100"
            >
                Send
            </button>
        </form>
    );
};

export default ContactForm;
