'use client';

import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';
import Link from 'next/link';

const values = [
  { title: 'Quality First', desc: 'Every batch undergoes rigorous testing for moisture, aflatoxin levels, and physical purity.' },
  { title: 'Sustainability', desc: 'We promote sustainable farming practices and minimize environmental impact.' },
  { title: 'Community', desc: 'We empower farming communities through fair trade and financial transparency.' },
  { title: 'Innovation', desc: 'Modern warehousing, efficient logistics, and tech-enabled operations.' },
];

const icons = [
  <svg key={0} className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key={1} className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key={2} className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  <svg key={3} className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
];

const processSteps = [
  { step: '01', title: 'Farm Sourcing', desc: 'Partner with trusted local farmers across Gujarat, Andhra Pradesh, and Rajasthan.' },
  { step: '02', title: 'Procurement', desc: 'Purchase quality groundnuts directly from farms at fair, market-competitive prices.' },
  { step: '03', title: 'Quality Testing', desc: 'Multi-stage testing for moisture, aflatoxin, physical purity, and oil content.' },
  { step: '04', title: 'Processing', desc: 'Advanced cleaning, shelling, and grading to meet domestic and international standards.' },
  { step: '05', title: 'Packaging', desc: 'Hygienic packaging in moisture-proof bags in bulk and retail quantities.' },
  { step: '06', title: 'Delivery', desc: 'Efficient logistics ensure timely delivery across India and internationally.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-15"><Image src="/images/hero-bg.png" alt="" fill className="object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary-dark" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="relative site-container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-accent-light text-xs font-semibold tracking-widest uppercase">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>About Us</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Discover the story behind India&apos;s trusted groundnut trading company.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-cream" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-cream bg-dots">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealOnScroll direction="left">
              <SectionHeading title="Our Story" centered={false} badge="Since 2010" />
              <p className="text-gray leading-relaxed mb-5">
                <strong className="text-dark">Shree Peanut Traders Private Limited</strong> was founded with a simple yet powerful vision: to connect India&apos;s hardworking groundnut farmers with quality-conscious buyers through transparent, fair trade practices.
              </p>
              <p className="text-gray leading-relaxed mb-5">
                Based in Rajkot, Gujarat — the heart of India&apos;s groundnut belt — we have grown into a nationally recognized name, handling over <strong className="text-dark">10,000 tonnes</strong> annually.
              </p>
              <p className="text-gray leading-relaxed">
                Today, we serve hundreds of businesses including oil mills, snack manufacturers, exporters, and retail distributors.
              </p>
            </RevealOnScroll>
            <RevealOnScroll direction="right">
              <div className="relative img-decorated">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/images/hero-bg.png" alt="Groundnut farming" width={600} height={450} className="object-cover w-full h-full" />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-beige bg-grid">
        <div className="site-container">
          <RevealOnScroll><SectionHeading title="Mission & Vision" badge="Our Purpose" /></RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Our Vision', desc: 'To be India\'s most trusted and sustainable groundnut trading company, recognized for quality excellence, farmer empowerment, and customer satisfaction.', color: 'primary' },
              { title: 'Our Mission', desc: 'To deliver premium-grade groundnuts at competitive prices while ensuring fair compensation for farmers and building long-term relationships based on trust.', color: 'accent' },
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={i * 150} direction="scale">
                <div className="card-premium p-9 h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-${item.color}/10 text-${item.color} flex items-center justify-center mb-5`}>
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={i === 0 ? "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" : "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"} /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-3" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                  <p className="text-gray leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-cream">
        <div className="site-container">
          <RevealOnScroll><SectionHeading title="Our Core Values" subtitle="The principles that guide everything we do." badge="Values" /></RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <RevealOnScroll key={i} delay={i * 100} direction="scale">
                <div className="card-premium p-7 text-center group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 mx-auto group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-light group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                    {icons[i]}
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">{v.title}</h3>
                  <p className="text-gray text-sm leading-relaxed">{v.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-24 bg-beige bg-dots">
        <div className="site-container">
          <RevealOnScroll><SectionHeading title="Our Sourcing & Processing" subtitle="From farm to market — a transparent, quality-driven journey." badge="Process" /></RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((s, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <div className="card-premium p-7 group h-full">
                  <span className="text-5xl font-bold text-primary/10 group-hover:text-primary/25 transition-colors duration-500">{s.step}</span>
                  <h3 className="text-lg font-bold text-dark mt-1 mb-2">{s.title}</h3>
                  <p className="text-gray text-sm leading-relaxed">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="relative site-container">
          <RevealOnScroll><SectionHeading title="Quality Assurance" subtitle="Our multi-point quality control ensures only the finest groundnuts reach you." light badge="Standards" /></RevealOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Moisture Testing', desc: 'Every lot tested for optimal moisture (6-8%) ensuring freshness and long shelf life.' },
              { title: 'Aflatoxin Control', desc: 'Advanced protocols ensuring aflatoxin levels are within safe international standards.' },
              { title: 'Physical Purity', desc: 'Thorough cleaning and sorting to remove foreign matter and impurities.' },
            ].map((qa, i) => (
              <RevealOnScroll key={i} delay={i * 120} direction="scale">
                <div className="glass-dark rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 h-full">
                  <div className="w-11 h-11 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{qa.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{qa.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-5" />
        <div className="relative site-container text-center">
          <RevealOnScroll direction="scale">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>Want to Know More?</h2>
            <p className="text-white/70 mb-10 text-lg max-w-xl mx-auto">Get in touch with our team to learn how we can serve your business needs.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-dark font-bold rounded-xl shadow-lg hover:bg-accent-light hover:scale-[1.03] transition-all duration-300 btn-shine">Contact Us Today</Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
