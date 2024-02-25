'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Icon imports
import { FiMenu } from 'react-icons/fi';

// Navigation links data
const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/galleries', label: 'Galleries' },
    { href: '/services', label: 'Services' },
    { href: '/packages', label: 'Packages' },
    { href: '/contact', label: 'Contact' }
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    console.log(pathname);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const isActive = (href: string) => pathname.startsWith(href);
    const linkClass = (href: string) =>
        `block py-2 px-3 rounded md:p-0 hover-underline-animation underline-offset-4 ${
            isActive(href) ? 'underline' : ''
        }`;

    // Handle mobile menu and window resize effects
    useEffect(() => {
        // prevent body scroll when mobile menu expanded
        const handleBodyScroll = () =>
            document.body.classList.toggle('overflow-hidden', isMenuOpen);
        // close mobile menu if window size increases
        const handleResize = () =>
            window.innerWidth >= 768 && isMenuOpen && setIsMenuOpen(false);

        handleBodyScroll();
        window.addEventListener('resize', handleResize);

        return () => {
            document.body.classList.remove('overflow-hidden');
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    return (
        <nav
            className={`${
                isMenuOpen
                    ? 'bg-gray-100 text-neutral-950 border-neutral-950/20'
                    : 'bg-black/20 bg-blur backdrop-filter backdrop-blur-xl'
            } fixed text-lg w-full z-50 top-0 start-0 p-7 border-b-2 border-gray-100/10`}
        >
            <div className="flex flex-wrap items-center justify-between mx-auto">
                <Link
                    href="/"
                    className="flex items-center gap-2 inter-font font-bold text-4xl"
                    onClick={() => setIsMenuOpen(false)}
                >
                    bwpv
                </Link>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg "
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle menu"
                >
                    <FiMenu size={30} />
                </button>
                <div
                    className={`${
                        isMenuOpen
                            ? 'fixed flex top-[calc(98px)] bottom-0 inset-x-0 bg-gray-100'
                            : 'hidden'
                    }  w-full md:flex md:w-auto `}
                    id="navbar-default"
                >
                    <ul className="flex flex-col justify-center p-4 text-2xl md:text-sm rounded-lg md:flex-row md:space-x-8 md:mt-0 md:p-0 md:border-0 w-full">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={linkClass(href)}
                                    aria-current={
                                        isActive(href) ? 'page' : undefined
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
