"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar({ dict, lang = "en" }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = dict.links;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-primary/90 backdrop-blur-md py-3 shadow-lg"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <Link href={lang === "ko" ? "/ko#hero" : "#hero"} className="flex items-center">
                            <span className="text-2xl font-bold tracking-tighter text-white">
                                STAR DELTA <span className="text-secondary">ELECTRIC</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={lang === "ko" ? `/ko${link.href}` : link.href}
                                    className="text-sm font-medium transition-colors hover:text-secondary text-gray-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href={lang === "ko" ? "/ko#contact" : "#contact"}
                                className="bg-secondary hover:bg-amber-600 text-primary px-5 py-2 rounded-md text-sm font-bold transition-transform active:scale-95"
                            >
                                {dict.cta}
                            </a>
                            <Link
                                href={dict.switchLink}
                                className="text-sm font-bold text-secondary border border-secondary px-3 py-1.5 rounded hover:bg-secondary hover:text-primary transition-all ml-4"
                            >
                                {dict.switchLang}
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none text-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary/95 backdrop-blur-lg">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={lang === "ko" ? `/ko${link.href}` : link.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-primary-light transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={lang === "ko" ? "/ko#contact" : "#contact"}
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center bg-secondary hover:bg-amber-600 text-primary px-3 py-3 rounded-md text-base font-bold mt-2"
                    >
                        {dict.cta}
                    </a>
                    <Link
                        href={dict.switchLink}
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center border border-secondary text-secondary hover:bg-secondary hover:text-primary px-3 py-3 rounded-md text-base font-bold mt-2"
                    >
                        {dict.switchLang}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
