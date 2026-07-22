import Image from "next/image";

const appointmentHref =
  "mailto:hello@horizonfertility.com?subject=Book%20a%20Consultation&body=Hello%20Horizon%20Fertility%20team%2C%20I%20would%20like%20to%20book%20a%20consultation.%20Please%20let%20me%20know%20the%20best%20time%20for%20an%20appointment.";

const services = [
  {
    title: "Fertility Assessment",
    description:
      "Advanced diagnostic evaluations to uncover the root causes of infertility with compassion and clarity.",
  },
  {
    title: "IVF & ICSI",
    description:
      "Tailored treatment pathways that combine expert care, precision diagnostics, and supportive counseling.",
  },
  {
    title: "Egg Freezing",
    description:
      "Flexible reproductive preservation options for patients planning for the future on their own timeline.",
  },
];

const highlights = [
  "Board-certified fertility specialists",
  "Personalized treatment plans for every journey",
  "Transparent guidance from consultation to follow-up",
];

const steps = [
  "Meet your care team for a comprehensive consultation",
  "Receive a tailored plan built around your medical history and goals",
  "Move forward with ongoing support and clear next steps",
];

const testimonials = [
  {
    quote:
      "The team made a deeply personal journey feel calm, informed, and hopeful.",
    name: "Maya & Daniel",
  },
  {
    quote:
      "Every step was explained with care, and we always felt like we had a partner in our treatment.",
    name: "Aisha & James",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#fff8fb_0%,#fdf2f8_45%,#ffffff_100%)] text-slate-800">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-500">
            Horizon Fertility
          </p>
          <p className="text-sm text-slate-600">Compassionate care for growing families</p>
        </div>
        <a
          href={appointmentHref}
          className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Book a consultation
        </a>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-16 lg:px-8">
        <section className="grid items-center gap-8 rounded-[2rem] border border-rose-100 bg-white/80 p-8 shadow-[0_20px_80px_-30px_rgba(190,24,93,0.35)] backdrop-blur lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700">
              Trusted fertility care with a human touch
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Helping hopeful parents build their next chapter with confidence.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                From first questions to treatment planning, our expert team provides evidence-based care in a calm, supportive environment.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                className="rounded-full bg-rose-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-rose-700"
              >
                Explore treatments
              </a>
              <a
                href="#about"
                className="rounded-full border border-slate-200 px-6 py-3 text-center font-semibold text-slate-700 transition hover:border-rose-200 hover:text-rose-700"
              >
                Why choose us
              </a>
            </div>
            <dl className="grid gap-4 pt-2 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <dt className="text-2xl font-semibold text-slate-900">94%</dt>
                <dd className="mt-1 text-sm text-slate-600">Patient satisfaction</dd>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <dt className="text-2xl font-semibold text-slate-900">15+</dt>
                <dd className="mt-1 text-sm text-slate-600">Years of specialist experience</dd>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <dt className="text-2xl font-semibold text-slate-900">1:1</dt>
                <dd className="mt-1 text-sm text-slate-600">Dedicated care coordination</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[1.75rem] border border-rose-100 bg-rose-50 p-6">
            <div className="overflow-hidden rounded-[1.25rem] border border-white/80 bg-white p-2 shadow-inner">
              <Image
                src="/clinic-hero.svg"
                alt="Illustration of a caring fertility clinic team"
                width={640}
                height={720}
                priority
                className="h-auto w-full rounded-[1rem]"
              />
            </div>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-rose-700">
              New patient experience
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              Personalized fertility planning from day one.
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-rose-500">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="services" className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
                Services
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">
                Care pathways designed around your goals.
              </h2>
            </div>
            <p className="max-w-xl text-slate-600">
              Our clinic offers advanced fertility treatment and compassionate support for individuals and couples at every stage of the journey.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
              Why families choose us
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Calm guidance, clear answers, and thoughtful treatment.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We combine leading-edge reproductive medicine with a supportive clinical experience so you feel informed and cared for at every stage.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">Your journey in three steps</h3>
            <ol className="mt-5 space-y-4">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100 font-semibold text-rose-700">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-7 text-slate-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-300">
              Patient stories
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Words of encouragement from families we’ve supported.
            </h2>
            <div className="mt-6 space-y-4">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.name} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <p className="text-sm leading-7 text-slate-100">“{testimonial.quote}”</p>
                  <footer className="mt-3 text-sm font-semibold text-rose-200">{testimonial.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
          <div id="contact" className="rounded-[2rem] border border-rose-100 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
              Start with confidence
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Schedule a private consultation today.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Speak with our team about your fertility goals and receive a thoughtful plan designed for you.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={appointmentHref}
                className="inline-flex rounded-full bg-rose-600 px-6 py-3 font-semibold text-white transition hover:bg-rose-700"
              >
                Book appointment
              </a>
              <a
                href="tel:+15550199"
                className="inline-flex rounded-full border border-slate-200 px-6 py-3 font-semibold text-slate-700 transition hover:border-rose-200 hover:text-rose-700"
              >
                Call clinic
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/70 px-6 py-6 text-center text-sm text-slate-600 lg:px-8">
        Horizon Fertility • Fertility care that feels personal, precise, and hopeful.
      </footer>
    </div>
  );
}
