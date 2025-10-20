"use client"
import Image from "next/image";
import Link from 'next/link';
import { socials } from "../data/socials";

export default function Footer() {


  return (
    <footer className="bg-white dark:bg-gray-900 text-black dark:text-gray-300 ">
    <div className="border-t border-gray-200 dark:border-gray-700"></div>
    <div className="max-w-2xl mx-auto py-4 space-y-6 text-center">
        <p>© 2025 Adam Hunter. All rights reserved.</p>
        <div className="flex justify-center gap-4">
            {socials.map((social, index) => (
            <Link
                key={index}
                href={social.link}
                target="_blank"
                className="inline-block transition-transform transform hover:scale-110"
            >
                <Image
                src={social.image}
                alt={social.alt}
                width={25}
                height={25}
                className="bg-white dark:bg-gray-800 rounded-full p-0.5 object-cover"
                />
            </Link>
            ))}
        </div>
      </div>
    </footer>
  )
}
