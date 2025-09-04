"use client"
import Image from "next/image";
import Link from 'next/link';

export default function Footer() {

    const socials = [
        {
        platform: 'Github',
        image: '/github.svg',
        alt: 'Adam Hunter Github Profile',
        link: 'https://github.com/adam-hunter13',
        },
        {
        platform: 'LinkedIn',
        image: '/linkedin.svg',
        alt: 'Adam Hunter LinkedIn Profile',
        link: 'https://www.linkedin.com/in/adam-hunter-/',
        },
        {
        platform: 'Instagram',
        image: '/instagram.svg',
        alt: 'Adam Hunter Instagram Profile',
        link: 'https://www.instagram.com/hunteradam13/',
        },
    ];

    return (
        <footer className="bg-white text-center py-4 mt-8 text-gray-600 max-w-2xl space-y-6 border-t border-gray-200 md:border-none">
            <p>© 2025 Adam Hunter. All rights reserved.</p>
            <div className="flex flex-row gap-4 mt-8 justify-center">
                {socials.map((social, index) => (
                    <div key={index} className="">
                        <Link
                        href={social.link}
                        target="_blank"
                        >
                            <Image
                                src={social.image}
                                alt={social.alt}
                                width={25}
                                height={25}
                                className="bg-white object-cover"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </footer>
    )
}