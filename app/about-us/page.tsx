import { SiteShell } from '@/components/site-shell';

const highlights = [
  {
    title: '40+ years of fertility experience',
    description:
      'Our approach combines long-standing reproductive expertise with modern clinical protocols.',
  },
  {
    title: 'Compassion-first care model',
    description:
      'Every consultation is designed to be clear, respectful, and emotionally supportive for families.',
  },
  {
    title: 'Complete in-house fertility support',
    description:
      'From diagnosis and planning to treatment and follow-up, care is coordinated under one team.',
  },
];

const teamValues = [
  'Transparent communication from first consultation to final follow-up',
  'Evidence-led treatment recommendations tailored to each patient',
  'Respect for privacy, dignity, and emotional wellbeing at every step',
  'Dedicated support for domestic and international patients',
];

export default function AboutUsPage() {
  return (
    <SiteShell mainClassName="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-rose-100 bg-white p-6 shadow-[0_20px_80px_-30px_rgba(190,24,93,0.35)] sm:p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">About Mahita Fertility</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Trusted fertility care built on expertise, empathy, and responsible medicine.
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Inspired by leading IVF care centers, Mahita Fertility focuses on individualized planning, advanced reproductive technology, and guided support so each family can move forward with clarity.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-300">Our philosophy</p>
          <h2 className="mt-3 text-3xl font-semibold">Clinical excellence with deeply human care.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            We know every fertility path is different. Our team creates realistic, goal-based plans and walks with patients through medical decisions, treatment cycles, and ongoing care.
          </p>
        </div>
        <ul className="space-y-3 rounded-[1.5rem] border border-white/10 bg-white/10 p-6 text-sm leading-7 text-slate-200">
          {teamValues.map((value) => (
            <li key={value}>• {value}</li>
          ))}
        </ul>
      </section>
    </SiteShell>
  );
}