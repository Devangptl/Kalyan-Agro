import Link from 'next/link';

const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/procurement', label: 'Procurement' },
    { href: '/contact', label: 'Contact' },
];

const products = [
    { href: '/products', label: 'Raw Groundnuts' },
    { href: '/products', label: 'Shelled Groundnuts' },
    { href: '/products', label: 'Groundnut Oil Seeds' },
    { href: '/products', label: 'Bulk Supply' },
];

export default function Footer() {
    return (
        <footer className="bg-primary-dark text-white">
            {/* Main Footer */}
            <div className="site-container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                                <svg className="w-6 h-6 text-primary-dark" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                            </div>
                            <div>
                                <span className="text-lg font-bold leading-tight block">Shree Peanut</span>
                                <span className="text-xs text-accent-light font-medium">Traders Pvt. Ltd.</span>
                            </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-5">
                            India&apos;s trusted groundnut trading company. We connect farmers with markets, delivering premium quality peanuts across the nation.
                        </p>
                        <div className="flex gap-3">
                            {['facebook', 'twitter', 'linkedin'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    aria-label={social}
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        {social === 'facebook' && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />}
                                        {social === 'twitter' && <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />}
                                        {social === 'linkedin' && <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-accent font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-white/70 hover:text-accent text-sm transition-colors duration-200 flex items-center gap-2">
                                        <svg className="w-3 h-3 text-accent/50" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-accent font-semibold text-sm uppercase tracking-wider mb-5">Our Products</h3>
                        <ul className="space-y-3">
                            {products.map((product) => (
                                <li key={product.label}>
                                    <Link href={product.href} className="text-white/70 hover:text-accent text-sm transition-colors duration-200 flex items-center gap-2">
                                        <svg className="w-3 h-3 text-accent/50" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {product.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-accent font-semibold text-sm uppercase tracking-wider mb-5">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-white/70 text-sm">123 Market Road, Rajkot, Gujarat, India - 360001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+919876543210" className="text-white/70 hover:text-accent text-sm transition-colors">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:info@shreepeanut.com" className="text-white/70 hover:text-accent text-sm transition-colors">info@shreepeanut.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="site-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-white/50 text-xs">
                        &copy; {new Date().getFullYear()} Shree Peanut Traders Pvt. Ltd. All rights reserved.
                    </p>
                    <div className="flex gap-5">
                        <a href="#" className="text-white/50 hover:text-accent text-xs transition-colors">Privacy Policy</a>
                        <a href="#" className="text-white/50 hover:text-accent text-xs transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
