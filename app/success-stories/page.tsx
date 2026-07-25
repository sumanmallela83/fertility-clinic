import { SiteShell } from '@/components/site-shell';

const stories = [
  {
    family: 'Aparna & Karthik',
    journey: '4 years of trying to conceive',
    highlight:
      'After a structured evaluation and IVF cycle planning, they welcomed a healthy baby and now mentor new patients.',
  },
  {
    family: 'Nadia, International Patient',
    journey: 'Cross-border IVF coordination',
    highlight:
      'With remote planning and a time-bound treatment schedule, she completed treatment smoothly and returned for pregnancy follow-up.',
  },
  {
    family: 'Sana & Imran',
    journey: 'Male-factor infertility pathway',
    highlight:
      'ICSI with lab-led guidance improved fertilization outcomes and helped the couple move forward confidently.',
  },
];

const trustSignals = [
  { label: 'Patient satisfaction focus', value: 'High-touch care' },
  { label: 'Clinical transparency', value: 'Clear treatment milestones' },
  { label: 'Support continuity', value: 'Before and after treatment' },
];

export default function SuccessStoriesPage() {
  return (
    <SiteShell mainClassName="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-rose-100 bg-white p-6 shadow-[0_20px_80px_-30px_rgba(190,24,93,0.35)] sm:p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Success Stories</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Real families, real journeys, and meaningful milestones.
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Inspired by the testimonial-led format of top fertility centers, this page highlights patient outcomes, care experience, and the support systems that made each journey possible.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        {stories.map((story) => (
          <article key={story.family} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">{story.journey}</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">{story.family}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{story.highlight}</p>
          </article>
        ))}
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 lg:p-10">
        <h2 className="text-3xl font-semibold text-slate-900">What families value most</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {trustSignals.map((item) => (
            <div key={item.label} className="rounded-[1.25rem] border border-slate-200 bg-white p-5 text-center">
              <p className="text-lg font-semibold text-slate-900">{item.value}</p>
              <p className="mt-1 text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}