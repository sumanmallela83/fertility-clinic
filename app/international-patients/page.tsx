import { SiteShell } from '@/components/site-shell';

const supportAreas = [
  'Video consultations before travel',
  'Treatment timeline planning and documentation guidance',
  'Airport pickup and accommodation coordination support',
  'Dedicated care coordinator during your stay',
  'Clear communication on follow-up once you return home',
];

const travelChecklist = [
  'Share prior reports and treatment history for pre-arrival review',
  'Confirm travel dates and expected stay duration with our team',
  'Prepare passport, visa, and medical documents before travel',
  'Schedule partner consultations where applicable',
];

export default function InternationalPatientsPage() {
  return (
    <SiteShell mainClassName="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <section className="rounded-[2rem] border border-rose-100 bg-white p-6 shadow-[0_20px_80px_-30px_rgba(190,24,93,0.35)] sm:p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">International Patients</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          International fertility support with planning, coordination, and continuity of care.
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Modeled after globally focused fertility centers, we offer structured support for overseas patients so treatment can be planned with fewer surprises and clearer timelines.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">How we support your journey</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            {supportAreas.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Pre-travel checklist</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            {travelChecklist.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white lg:p-10">
        <h2 className="text-3xl font-semibold">Start with an international care consultation</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
          Our international coordination desk will review your case, suggest the right clinical pathway, and help map your travel and treatment window.
        </p>
        <a
          href="/appointment"
          className="mt-6 inline-flex rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-600"
        >
          Talk to international desk
        </a>
      </section>
    </SiteShell>
  );
}