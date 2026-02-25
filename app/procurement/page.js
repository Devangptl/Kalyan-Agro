'use client';

import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';
import Link from 'next/link';

const steps = [
  { step: '01', title: 'Connect With Us', desc: 'Reach out via phone, email, or visit our office with your crop details.' },
  { step: '02', title: 'Quality Assessment', desc: 'We assess crop quality on-site for moisture, aflatoxin, and oil content.' },
  { step: '03', title: 'Fair Price Offer', desc: 'Competitive, transparent pricing based on quality and market rates.' },
  { step: '04', title: 'Weighing & Pickup', desc: 'Transparent weighing and free pickup with our own logistics fleet.' },
  { step: '05', title: 'Prompt Payment', desc: 'Receive payment within 24-48 hours via bank transfer or cheque.' },
];

const standards = [
  { label: 'Moisture Content', value: '≤ 8%' },
  { label: 'Aflatoxin (B1)', value: '≤ 15 ppb' },
  { label: 'Oil Content', value: '≥ 44%' },
  { label: 'Foreign Matter', value: '≤ 1%' },
  { label: 'Damaged Kernels', value: '≤ 3%' },
  { label: 'Shelling %', value: '≥ 65%' },
];

const benefits = ['Fair market prices', 'Transparent weighing', 'Payment within 48 hrs', 'Free pickup service', 'No hidden deductions', 'Long-term partnerships'];

export default function ProcurementPage() {
  return (
    <>
      <section className="relative py-28 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-15"><Image src="/images/hero-bg.png" alt="" fill className="object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary-dark" />
        <div className="relative site-container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-accent-light text-xs font-semibold tracking-widest uppercase">For Farmers</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Sell Your Groundnuts</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Fair prices, transparent dealing, and prompt payments for farmers across India.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-cream" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </section>

      <section className="py-24 bg-cream bg-dots">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealOnScroll direction="left">
              <SectionHeading title="For Farmers & Suppliers" centered={false} badge="Partner With Us" />
              <p className="text-gray leading-relaxed mb-5">At Shree Peanut Traders, we believe farmers are the backbone of our business.</p>
              <p className="text-gray leading-relaxed mb-7">Whether you&apos;re a small-scale farmer or a large supplier, we welcome all.</p>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm text-dark-light">{b}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right">
              <div className="relative img-decorated">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/images/raw-groundnuts.png" alt="Fresh harvested groundnuts" width={600} height={450} className="object-cover w-full h-full" />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="py-24 bg-beige bg-grid">
        <div className="site-container">
          <RevealOnScroll><SectionHeading title="How We Purchase" subtitle="A simple, transparent 5-step process." badge="Process" /></RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((p, i) => (
              <RevealOnScroll key={i} delay={i * 100} direction="scale">
                <div className="card-premium p-8 group h-full">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-light group-hover:text-white transition-all duration-500">
                    <span className="text-lg font-bold">{p.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">{p.title}</h3>
                  <p className="text-gray text-sm leading-relaxed">{p.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="site-container">
          <RevealOnScroll><SectionHeading title="Quality Standards" subtitle="We accept groundnuts meeting these parameters." badge="Standards" /></RevealOnScroll>
          <RevealOnScroll direction="scale">
            <div className="max-w-3xl mx-auto">
              <div className="card-premium overflow-hidden">
                <div className="grid grid-cols-2 bg-gradient-to-r from-primary to-primary-light text-white p-5">
                  <span className="font-semibold text-sm">Parameter</span>
                  <span className="font-semibold text-sm text-right">Standard</span>
                </div>
                {standards.map((qs, i) => (
                  <div key={i} className={`grid grid-cols-2 p-5 ${i % 2 === 0 ? 'bg-beige/40' : 'bg-white'} hover:bg-primary/5 transition-colors`}>
                    <span className="text-dark-light text-sm font-medium">{qs.label}</span>
                    <span className="text-primary font-bold text-sm text-right">{qs.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary via-secondary-light to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-5" />
        <div className="relative site-container text-center">
          <RevealOnScroll direction="scale">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>Ready to Sell Your Crop?</h2>
            <p className="text-white/80 mb-10 text-lg">Get in touch for fair prices and prompt payment.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-dark font-bold rounded-xl shadow-lg hover:bg-accent-light hover:scale-[1.03] transition-all duration-300 btn-shine">Contact Our Team</Link>
              <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-dark text-white font-bold rounded-xl hover:bg-white/15 transition-all duration-300">Call +91 98765 43210</a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
