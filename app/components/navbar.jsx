"use client"

import Link from "next/link";
import Image from "next/image";
import "../globals.css";
import { useState } from "react";


export default function Navbar() {
    const links = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "About",
            href: "/about"
        },
        {
            title: "Projects",
            href: "/projects"
        },
        {
            title: "Blogs",
            href: "/blogs"
        },
    ]

    const [hovered, setHovered] = useState(false)

    return(
        <nav className="w-full h-fit flex items-center justify-center pt-3 fixed z-50 ">
            <div className="md:max-w-3xl h-fit flex items-center justify-center md:gap-10 gap-4 rounded-4xl  px-2.5 py-2 border border-gray-200 dark:border-none bg-white dark:bg-black">
                <div className="rounded-4xl overflow-hidden hover:brightness-50 cursor-pointer">
                    <Image src={"./said.jpeg"} alt="saidDev" width={40} height={40}></Image>
                </div>
                
                <div className="md:flex flex-wrap items-center justify-center gap-5 text-sm dark:text-white text-gray-600 hidden md:visible">
                    {links.map((link, index) => (
                        <Link key={link.href} href={link.href}>{link.title}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-wrap items-center justify-center text-white md:hidden visible">
                    <span>Available for work </span>
                </div>
                <Link href={"#"} className="md:flex md:visible hidden px-8 py-2 rounded-4xl text-sm dark:bg-white bg-[#303030] dark:text-black text-white hover:bg-[#5E67E6] dark:hover:bg-[#D0FF71]">Contact</Link>
                <Link href={"#"} className="flex md:hidden visible px-4.5 py-2 rounded-4xl bg-white dark:text-black text-white text-2xl ">=</Link>
            </div>
        </nav>
    );
}