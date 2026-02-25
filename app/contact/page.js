'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';

const contactInfo = [
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: 'Our Office',
    lines: ['123 Market Road, Rajkot', 'Gujarat, India - 360001'],
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    title: 'Phone',
    lines: ['+91 98765 43210', '+91 98765 43211'],
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    title: 'Email',
    lines: ['info@shreepeanut.com', 'sales@shreepeanut.com'],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass = (field) =>
    `w-full px-5 py-3.5 rounded-xl border-2 bg-white text-sm transition-all duration-300 outline-none ${
      focused === field ? 'border-primary shadow-lg shadow-primary/10 ring-4 ring-primary/5' : 'border-beige-dark hover:border-primary/30'
    }`;

  return (
    <>
      <section className="relative py-28 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-primary-dark/90" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="relative site-container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-accent-light text-xs font-semibold tracking-widest uppercase">Reach Out</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Contact Us</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">We&apos;d love to hear from you. Reach out for inquiries, quotes, or partnerships.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-cream" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </section>

      <section className="py-24 bg-cream bg-dots">
        <div className="site-container">
          <div className="grid lg:grid-cols-3 gap-10">
            <RevealOnScroll direction="left">
              <div className="space-y-5">
                <SectionHeading title="Get In Touch" centered={false} badge="Contact Info" />
                {contactInfo.map((c, i) => (
                  <div key={i} className="card-premium p-5 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary flex items-center justify-center shrink-0">{c.icon}</div>
                    <div>
                      <h3 className="font-bold text-dark text-sm mb-1">{c.title}</h3>
                      {c.lines.map((l, j) => <p key={j} className="text-gray text-sm">{l}</p>)}
                    </div>
                  </div>
                ))}
                <div className="card-premium p-5">
                  <h3 className="font-bold text-dark text-sm mb-2">Business Hours</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <p className="text-gray text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-light" />
                    <p className="text-gray text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" className="lg:col-span-2">
              <div className="card-premium p-8 md:p-10">
                <h2 className="text-2xl font-bold text-dark mb-2" style={{ fontFamily: 'var(--font-display)' }}>Send Us a Message</h2>
                <p className="text-gray text-sm mb-8">Fill in the form and we&apos;ll get back to you within 24 hours.</p>

                {submitted && (
                  <div className="mb-7 p-5 bg-primary/8 text-primary rounded-xl border border-primary/15 text-sm font-medium flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    Thank you! Your message has been sent.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">Full Name <span className="text-accent">*</span></label>
                      <input id="name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} onFocus={() => setFocused('name')} onBlur={() => setFocused('')} className={inputClass('name')} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">Phone <span className="text-accent">*</span></label>
                      <input id="phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} onFocus={() => setFocused('phone')} onBlur={() => setFocused('')} className={inputClass('phone')} placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">Email <span className="text-accent">*</span></label>
                    <input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} onFocus={() => setFocused('email')} onBlur={() => setFocused('')} className={inputClass('email')} placeholder="you@email.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">Message <span className="text-accent">*</span></label>
                    <textarea id="message" rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} onFocus={() => setFocused('message')} onBlur={() => setFocused('')} className={`${inputClass('message')} resize-none`} placeholder="Your requirements..." />
                  </div>
                  <button type="submit" className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 shadow-md text-sm btn-shine">Send Message</button>
                </form>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="py-16 bg-beige">
        <div className="site-container">
          <RevealOnScroll><SectionHeading title="Find Us" subtitle="Visit our office in Rajkot, Gujarat" badge="Location" /></RevealOnScroll>
          <RevealOnScroll direction="scale">
            <div className="card-premium overflow-hidden h-96">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.123!2d70.8022!3d22.3039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3a!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1634567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Location" />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
