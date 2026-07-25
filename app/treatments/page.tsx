import { SiteShell } from '@/components/site-shell';

const treatmentTracks = [
  {
    title: 'Fertility Evaluation',
    description:
      'Comprehensive testing for female and male fertility factors, hormone balance, and cycle timing.',
  },
  {
    title: 'IUI & Ovulation Support',
    description:
      'Structured first-line pathways for couples beginning assisted fertility treatment.',
  },
  {
    title: 'IVF & ICSI',
    description:
      'Advanced embryo laboratory support with individualized protocols based on diagnosis and goals.',
  },
  {
    title: 'Donor Programs',
    description:
      'Carefully managed donor options with ethical guidance and transparent counseling.',
  },
  {
    title: 'Fertility Preservation',
    description:
      'Egg and sperm freezing pathways for future family planning with long-term confidence.',
  },
  {
    title: 'Pregnancy Follow-up',
    description:
      'Ongoing support after conception with planned follow-up milestones and continuity of care.',
  },
];

export default function TreatmentsPage() {
  return (
    <SiteShell mainClassName="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-rose-100 bg-white/80 p-6 shadow-[0_20px_80px_-30px_rgba(190,24,93,0.35)] sm:p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Treatments</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Complete fertility treatment pathways under one specialist-led team.
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Based on the multi-stage model used by leading fertility centers, we offer stepwise treatment options from diagnosis to advanced assisted reproduction and follow-up.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {treatmentTracks.map((item) => (
          <article key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 lg:p-10">
        <h2 className="text-3xl font-semibold text-slate-900">Need help choosing the right treatment?</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          Our consultants review your history, current reports, and timeline to recommend the most practical next step, whether that is IUI, IVF, ICSI, preservation, or combined planning.
        </p>
        <a
          href="/appointment"
          className="mt-6 inline-flex rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700"
        >
          Book treatment consultation
        </a>
      </section>
    </SiteShell>
  );
}