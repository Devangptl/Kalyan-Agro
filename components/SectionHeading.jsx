export default function SectionHeading({ title, subtitle, centered = true, light = false, badge = '' }) {
    return (
        <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
            {badge && (
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 ${light
                        ? 'bg-white/10 text-accent-light border border-white/10'
                        : 'bg-primary/8 text-primary border border-primary/10'
                    }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-accent' : 'bg-primary'}`} />
                    {badge}
                </div>
            )}
            <h2
                className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-dark'}`}
                style={{ fontFamily: 'var(--font-display)' }}
            >
                {title}
            </h2>
            {subtitle && (
                <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-white/60' : 'text-gray'}`}>
                    {subtitle}
                </p>
            )}
            <div className={`mt-5 flex items-center gap-1.5 ${centered ? 'justify-center' : ''}`}>
                <span className={`h-1 w-8 rounded-full ${light ? 'bg-accent' : 'bg-primary'}`} />
                <span className={`h-1 w-3 rounded-full ${light ? 'bg-accent/40' : 'bg-primary/30'}`} />
                <span className={`h-1 w-1.5 rounded-full ${light ? 'bg-accent/20' : 'bg-primary/15'}`} />
            </div>
        </div>
    );
}
