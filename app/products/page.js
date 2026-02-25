'use client';

import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';
import Link from 'next/link';

const products = [
  {
    title: 'Raw Groundnuts',
    description: 'Farm-fresh groundnuts in natural shells, sourced directly from reliable farmers across Gujarat and Andhra Pradesh. Available in Bold, Java, and TJ varieties.',
    imageSrc: '/images/raw-groundnuts.png',
    features: ['Natural shell intact', 'Bold & Java varieties', 'Low moisture content', 'Ideal for roasting'],
  },
  {
    title: 'Shelled Groundnuts',
    description: 'Premium quality shelled peanuts, carefully processed, cleaned, and graded. Ready for direct consumption, snack manufacturing, or culinary use.',
    imageSrc: '/images/shelled-groundnuts.png',
    features: ['Hand-picked quality', 'Multiple size grades', 'Ready for consumption', 'Clean & sorted'],
  },
  {
    title: 'Groundnut Oil Seeds',
    description: 'High oil-content groundnut seeds specifically selected for oil extraction. Known for their rich oil yield and superior taste profile.',
    imageSrc: '/images/raw-groundnuts.png',
    features: ['High oil content (48-50%)', 'Premium extraction grade', 'Gujarat & AP varieties', 'Consistent quality'],
  },
  {
    title: 'Bulk Supply',
    description: 'Large-volume groundnut supply for industrial buyers, exporters, and wholesale traders. We handle orders from 10 tonnes to full container loads.',
    imageSrc: '/images/shelled-groundnuts.png',
    features: ['10+ tonnes minimum', 'Container load ready', 'Custom packaging', 'Nationwide delivery'],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-15"><Image src="/images/hero-bg.png" alt="" fill className="object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary-dark" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="relative site-container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-accent-light text-xs font-semibold tracking-widest uppercase">Our Range</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Our Products</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Premium quality groundnuts for every need — from farm-fresh raw nuts to industrial bulk supply.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-cream" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </section>

      {/* Products */}
      <section className="py-24 bg-cream">
        <div className="site-container">
          <RevealOnScroll><SectionHeading title="Our Product Range" subtitle="Comprehensive groundnut products to meet diverse business requirements." badge="What We Offer" /></RevealOnScroll>
          <div className="space-y-20">
            {products.map((product, i) => (
              <RevealOnScroll key={i} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:[direction:rtl]' : ''}`}>
                  <div className={i % 2 !== 0 ? 'md:[direction:ltr]' : ''}>
                    <div className="relative img-decorated">
                      <div className="rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                        <Image src={product.imageSrc} alt={product.title} width={600} height={400} className="object-cover w-full h-72 md:h-80 group-hover:scale-105 transition-transform duration-700" />
                      </div>
                    </div>
                  </div>
                  <div className={i % 2 !== 0 ? 'md:[direction:ltr]' : ''}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 rounded-full text-xs font-semibold text-primary mb-4 border border-primary/10">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Product #{String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{product.title}</h3>
                    <p className="text-gray leading-relaxed mb-6">{product.description}</p>
                    <div className="grid grid-cols-2 gap-3 mb-7">
                      {product.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          </div>
                          <span className="text-sm text-dark-light">{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 shadow-md btn-shine text-sm">
                      Inquire Now
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Badge */}
      <section className="py-20 bg-beige bg-grid">
        <div className="site-container">
          <RevealOnScroll direction="scale">
            <div className="card-premium p-10 md:p-14 text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4" style={{ fontFamily: 'var(--font-display)' }}>Quality Guaranteed</h3>
              <p className="text-gray max-w-xl mx-auto mb-7 leading-relaxed">All our products undergo rigorous multi-stage quality testing. We guarantee moisture content below 8%, safe aflatoxin levels, and premium physical purity.</p>
              <Link href="/about" className="text-primary font-semibold hover:text-primary-dark transition-colors text-sm inline-flex items-center gap-1.5 group">
                Learn about our quality process
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-5" />
        <div className="relative site-container text-center">
          <RevealOnScroll direction="scale">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>Need a Custom Quote?</h2>
            <p className="text-white/70 mb-10 text-lg max-w-xl mx-auto">Contact us with your requirements and we&apos;ll provide competitive pricing.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-dark font-bold rounded-xl shadow-lg hover:bg-accent-light hover:scale-[1.03] transition-all duration-300 btn-shine">Request a Quote</Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
