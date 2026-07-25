import { SiteShell } from '@/components/site-shell';

const ivfFlow = [
  {
    step: '01',
    title: 'Assessment and cycle planning',
    description: 'Specialists review diagnostic reports and design a cycle strategy based on your profile.',
  },
  {
    step: '02',
    title: 'Ovarian stimulation and monitoring',
    description: 'Careful monitoring helps optimize egg development while keeping treatment comfortable.',
  },
  {
    step: '03',
    title: 'Egg retrieval and laboratory fertilization',
    description: 'Eggs are collected and fertilized with IVF or ICSI techniques under strict lab protocols.',
  },
  {
    step: '04',
    title: 'Embryo transfer and support',
    description: 'Selected embryos are transferred with guided post-transfer support and follow-up testing.',
  },
];

const whyIcsi = [
  'Useful in selected male-factor infertility situations',
  'Supports fertilization when prior IVF outcomes were limited',
  'Performed by trained embryology specialists in controlled lab conditions',
];

export default function IvfIcsiPage() {
  return (
    <SiteShell mainClassName="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-rose-100 bg-white p-6 shadow-[0_20px_80px_-30px_rgba(190,24,93,0.35)] sm:p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">IVF & ICSI</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Advanced IVF and ICSI care with structured, transparent treatment planning.
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Inspired by high-standard fertility center workflows, our IVF and ICSI programs focus on precision, safety, and personalized decision-making at every stage.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {ivfFlow.map((item) => (
          <article key={item.step} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-rose-600">Step {item.step}</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
        <div>
          <h2 className="text-3xl font-semibold">When ICSI may be recommended</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            ICSI is typically considered in specific clinical scenarios. Your consultant and embryology team explain whether ICSI is appropriate for your diagnosis and cycle goals.
          </p>
        </div>
        <ul className="space-y-3 rounded-[1.5rem] border border-white/10 bg-white/10 p-6 text-sm leading-7 text-slate-200">
          {whyIcsi.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>
    </SiteShell>
  );
}