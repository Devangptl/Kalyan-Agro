'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/procurement', label: 'Procurement' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const ticking = useRef(false);
    const pathname = usePathname();

    const updateNavbar = useCallback(() => {
        const currentScrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        // Scroll progress (0 → 1)
        setScrollProgress(docHeight > 0 ? Math.min(currentScrollY / docHeight, 1) : 0);

        // Scrolled past threshold → compact style
        setScrolled(currentScrollY > 30);

        ticking.current = false;
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (!ticking.current) {
                requestAnimationFrame(updateNavbar);
                ticking.current = true;
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        updateNavbar();
        return () => window.removeEventListener('scroll', onScroll);
    }, [updateNavbar]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled
                    ? 'bg-white/[0.97] backdrop-blur-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_30px_rgba(45,106,79,0.06)] border-b border-primary/[0.06]'
                    : 'bg-white/80 backdrop-blur-md border-b border-transparent shadow-none'
                }`}
        >
            <div className="site-container">
                <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-[60px]' : 'h-20'}`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className={`rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center transition-all duration-500 ${scrolled
                                ? 'w-9 h-9 shadow-md shadow-primary/20'
                                : 'w-12 h-12 shadow-lg'
                            } group-hover:shadow-xl group-hover:scale-105`}>
                            <svg className={`text-white transition-all duration-500 ${scrolled ? 'w-[18px] h-[18px]' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                        </div>
                        <div className="hidden sm:block">
                            <span className={`font-bold text-primary-dark leading-tight block tracking-tight transition-all duration-500 ${scrolled ? 'text-base' : 'text-lg'}`}>Shree Peanut</span>
                            <span className={`text-secondary font-medium tracking-widest uppercase transition-all duration-500 ${scrolled ? 'text-[9px]' : 'text-[10px]'}`}>Traders Pvt. Ltd.</span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group/link ${pathname === link.href
                                    ? 'text-primary'
                                    : 'text-dark-light hover:text-primary'
                                    }`}
                            >
                                {link.label}
                                {pathname === link.href ? (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full" />
                                ) : (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover/link:w-4 h-0.5 bg-primary/40 rounded-full transition-all duration-300" />
                                )}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className={`ml-4 font-semibold rounded-xl transition-all duration-500 text-sm btn-shine ${scrolled
                                    ? 'px-5 py-2 bg-gradient-to-r from-primary to-primary-light text-white shadow-md hover:shadow-xl hover:scale-[1.03]'
                                    : 'px-6 py-2.5 bg-gradient-to-r from-primary to-primary-light text-white shadow-md hover:shadow-xl hover:scale-[1.03]'
                                }`}
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl text-dark-light hover:bg-beige/80 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <div className="w-5 h-4 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-left ${isOpen ? 'rotate-45 translate-x-px' : ''}`} />
                            <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 -translate-x-2' : ''}`} />
                            <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-left ${isOpen ? '-rotate-45 translate-x-px' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Scroll Progress Bar */}
            <div
                className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary-light transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'
                    }`}
                style={{ width: `${scrollProgress * 100}%` }}
            />

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-400 ease-in-out ${isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    } overflow-hidden`}
            >
                <div className="site-container py-4 space-y-1 bg-white/95 backdrop-blur-xl border-t border-beige-dark/20">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            style={{ animationDelay: `${i * 50}ms` }}
                            className={`block px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${pathname === link.href
                                ? 'bg-primary/10 text-primary border-l-3 border-primary'
                                : 'text-dark-light hover:bg-beige/60 hover:text-primary hover:translate-x-1'
                                } ${isOpen ? 'animate-fadeInUp' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-2">
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block text-center px-5 py-3.5 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-xl shadow-md text-sm"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

