'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

const services = [
  {
    title: 'IVF Treatment',
    description:
      'Advanced fertility treatment with personalized protocols, embryo assessment, and thoughtful support at every stage.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'ICSI & IUI',
    description:
      'Targeted assisted reproduction options designed to improve fertilization and increase the chance of success.',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'PCOS & Infertility Care',
    description:
      'Comprehensive evaluation and care for hormonal imbalances, ovulation concerns, and male-factor infertility.',
    image:
      'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Surrogacy & Egg Freezing',
    description:
      'Flexible fertility preservation and family-building pathways tailored to your long-term goals.',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Gynecology & Pregnancy Care',
    description:
      'Gentle, evidence-based support for women’s reproductive health, pregnancy planning, and follow-up care.',
    image:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Fertility Preservation',
    description:
      'A calm, expert-led approach to protecting your reproductive future with clarity and confidence.',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
  },
];

export default function ServicesPage() {
  return (
    <SiteShell mainClassName="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <section className="grid gap-8 rounded-[2rem] border border-rose-100 bg-white/80 p-6 shadow-[0_20px_80px_-30px_rgba(190,24,93,0.35)] backdrop-blur sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Our Services</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Comprehensive fertility care tailored to your journey.
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              From initial consultation to advanced treatment and long-term support, our team offers personalized care designed around your goals, comfort, and timeline.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-rose-50 px-4 py-2 text-sm font-medium text-rose-700">IVF · ICSI · IUI</span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">Egg freezing</span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">Personalized care</span>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Why patients choose us</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.25rem] bg-white p-4 shadow-sm">
                <p className="text-2xl font-semibold text-slate-900">1:1</p>
                <p className="mt-1 text-sm text-slate-600">Dedicated guidance</p>
              </div>
              <div className="rounded-[1.25rem] bg-white p-4 shadow-sm">
                <p className="text-2xl font-semibold text-slate-900">24/7</p>
                <p className="mt-1 text-sm text-slate-600">Responsive support</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </div>
            </article>
          ))}
        </section>
    </SiteShell>
  );
}
