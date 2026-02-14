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
                    <Image src={"/said.jpeg"} alt="saidDev" width={40} height={40}></Image>
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
                <Link href={"#"} className="group relative flex items-center justify-center overflow-hidden rounded-full px-6 bg-white  py-2 transition-all">
                <span
                    className="absolute bottom-0 left-0 h-40 w-full origin-bottom
                    translate-y-full transform overflow-hidden
                    rounded-full bg-[#D0FF71]
                    transition-all duration-300 ease-out
                    group-hover:translate-y-14 z-10"
                ></span>

                <span className="relative z-20 text-black">
                    Contuct
                </span>
                </Link>
                <Link href={"#"} className="flex md:hidden visible px-4.5 py-2 rounded-4xl bg-white dark:text-black text-white text-2xl ">=</Link>
            </div>
        </nav>
    );
}