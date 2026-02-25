'use client';

import { useEffect, useRef } from 'react';

export default function RevealOnScroll({ children, className = '', direction = 'up', delay = 0 }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => el.classList.add('visible'), delay);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    const dirClass = {
        up: 'reveal',
        left: 'reveal-left',
        right: 'reveal-right',
        scale: 'reveal-scale',
    }[direction] || 'reveal';

    return (
        <div ref={ref} className={`${dirClass} ${className}`}>
            {children}
        </div>
    );
}
