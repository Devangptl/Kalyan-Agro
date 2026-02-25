'use client';

import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import SectionHeading from '@/components/SectionHeading';
import TestimonialCard from '@/components/TestimonialCard';
import RevealOnScroll from '@/components/RevealOnScroll';

const whyChooseUs = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Premium Quality',
    desc: 'Stringent quality checks at every stage ensure only the best groundnuts reach our customers.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fair Pricing',
    desc: 'Transparent pricing ensures fair value for both farmers and buyers across all deals.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Trusted Farmers',
    desc: 'Strong relationships with thousands of Indian farmers who grow the finest groundnuts.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Bulk Supply',
    desc: 'Handling large orders efficiently with on-time delivery across India and abroad.',
  },
];

const featuredProducts = [
  { title: 'Raw Groundnuts', description: 'Farm-fresh, unprocessed groundnuts in their natural shells. Perfect for roasting, boiling, or further processing.', imageSrc: '/images/raw-groundnuts.png' },
  { title: 'Shelled Groundnuts', description: 'Carefully shelled premium peanuts, cleaned and graded for quality. Ready for direct consumption or manufacturing.', imageSrc: '/images/shelled-groundnuts.png' },
  { title: 'Groundnut Oil Seeds', description: 'High oil-content groundnut seeds ideal for oil extraction. Sourced from the finest Gujarat and Andhra varieties.', imageSrc: '/images/raw-groundnuts.png' },
];

const testimonials = [
  { quote: 'Shree Peanut Traders has been our reliable partner for over 5 years. Their quality is consistently excellent, and deliveries are always on time.', name: 'Rajesh Patel', role: 'Oil Mill Owner, Gujarat' },
  { quote: "Fair prices and honest dealing — that's what sets them apart. They genuinely care about the farmer community and offer great rates.", name: 'Kisan Desai', role: 'Groundnut Farmer, Junagadh' },
  { quote: 'We import bulk groundnuts from Shree Peanut Traders for our snack manufacturing unit. The quality standards they maintain are world-class.', name: 'Anil Sharma', role: 'Snack Manufacturer, Mumbai' },
];

const stats = [
  { num: '15+', label: 'Years Experience' },
  { num: '5000+', label: 'Farmers Network' },
  { num: '10K+', label: 'Tonnes/Year' },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.png" alt="Golden groundnut farm in India at sunset" fill className="object-cover" priority quality={90} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 to-primary-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent" />
        </div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative z-10 site-container py-20 w-full">
          <div className="max-w-2xl animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/15 mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent-light text-sm font-medium tracking-wide">India&apos;s Trusted Groundnut Partner</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              We Buy &amp; Sell{' '}
              <span className="text-gradient-gold">Premium Quality</span>{' '}
              Groundnuts
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-lg">
              Connecting India&apos;s finest farmers with markets nationwide — premium quality peanuts, fair pricing, timely delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-dark font-bold rounded-xl shadow-lg hover:bg-accent-light hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-base btn-shine">
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/products" className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-dark text-white font-bold rounded-xl hover:bg-white/15 transition-all duration-300 text-base">
                View Products
              </Link>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-8 max-w-sm">
              {stats.map((stat) => (
                <div key={stat.label} className="relative">
                  <p className="text-3xl md:text-4xl font-bold text-gradient-gold">{stat.num}</p>
                  <p className="text-white/50 text-xs mt-1.5 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-cream" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </section>

      {/* ===== COMPANY INTRO ===== */}
      <section className="py-24 bg-cream relative bg-dots">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealOnScroll direction="left">
              <SectionHeading title="About Shree Peanut Traders" centered={false} badge="Our Story" />
              <p className="text-gray leading-relaxed mb-5">
                Founded with a vision to revolutionize the groundnut trade in India, Shree Peanut Traders Private Limited has grown into one of the most trusted names in the peanut industry. Based in the heart of Gujarat — India&apos;s largest groundnut-producing state.
              </p>
              <p className="text-gray leading-relaxed mb-8">
                Our commitment to quality, fair trade practices, and customer satisfaction has earned us the trust of thousands of farmers and hundreds of businesses across India.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 shadow-md btn-shine text-sm">
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </RevealOnScroll>
            <RevealOnScroll direction="right">
              <div className="relative img-decorated">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/images/hero-bg.png" alt="Groundnut farming in India" width={600} height={400} className="object-cover w-full h-80 md:h-[420px]" />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-accent to-accent-light text-dark p-5 rounded-xl shadow-xl hidden md:block">
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-sm font-medium opacity-80">Years of Trust</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-24 bg-beige relative bg-grid">
        <div className="site-container">
          <RevealOnScroll>
            <SectionHeading title="Why Choose Us" subtitle="Decades of experience, thousands of happy clients, and a relentless pursuit of quality." badge="Our Strengths" />
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <RevealOnScroll key={i} delay={i * 100} direction="scale">
                <div className="card-premium p-7 group text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary flex items-center justify-center mb-5 mx-auto group-hover:from-primary group-hover:to-primary-light group-hover:text-white transition-all duration-500 group-hover:shadow-lg group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray text-sm leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="py-24 bg-cream relative">
        <div className="site-container">
          <RevealOnScroll>
            <SectionHeading title="Our Featured Products" subtitle="Premium groundnut varieties sourced from India's finest farms, processed with care and delivered fresh." badge="What We Offer" />
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, i) => (
              <RevealOnScroll key={i} delay={i * 120}>
                <ProductCard {...product} />
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll>
            <div className="text-center mt-14">
              <Link href="/products" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 shadow-md btn-shine">
                View All Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="relative site-container">
          <RevealOnScroll>
            <SectionHeading title="What Our Partners Say" subtitle="Hear from farmers, businesses, and partners who trust Shree Peanut Traders." light badge="Testimonials" />
          </RevealOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={i} delay={i * 120} direction="scale">
                <TestimonialCard {...t} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-5" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="relative site-container text-center">
          <RevealOnScroll direction="scale">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>Ready to Partner With Us?</h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">Whether you&apos;re looking to buy premium groundnuts or sell your produce at fair prices, we&apos;re here to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-dark font-bold rounded-xl shadow-lg hover:bg-accent-light hover:shadow-xl hover:scale-[1.03] transition-all duration-300 btn-shine">Get a Quote</Link>
              <Link href="/procurement" className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-dark text-white font-bold rounded-xl hover:bg-white/15 transition-all duration-300">Sell Your Crops</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
