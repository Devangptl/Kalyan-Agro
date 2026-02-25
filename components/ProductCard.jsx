import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ title, description, imageSrc, imageAlt }) {
    return (
        <div className="group card-premium overflow-hidden">
            {/* Image */}
            <div className="relative h-60 overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={imageAlt || title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating badge on hover */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 shadow-md">
                    Premium Quality
                </div>
            </div>

            {/* Content */}
            <div className="p-7">
                <h3 className="text-xl font-bold text-dark mb-2.5 group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray text-sm leading-relaxed mb-6">
                    {description}
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-primary/5 text-primary font-semibold rounded-xl hover:from-primary hover:to-primary-light hover:text-white transition-all duration-400 text-sm group/btn"
                >
                    Inquire Now
                    <svg className="w-4 h-4 translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
