"use client";

import Image from "next/image";
import { SiteShell } from "@/components/site-shell";

const appointmentHref =
  "mailto:hello@horizonfertility.com?subject=Book%20a%20Consultation&body=Hello%20Horizon%20Fertility%20team%2C%20I%20would%20like%20to%20book%20a%20consultation.%20Please%20let%20me%20know%20the%20best%20time%20for%20an%20appointment.";

const processSteps = [
  {
    title: "Initial Consultation",
    description: "We begin with a detailed review of your medical history, tests, and goals.",
  },
  {
    title: "Personalized Treatment Plan",
    description: "Your care plan is built around your needs, timeline, and comfort level.",
  },
  {
    title: "Advanced Treatment & Monitoring",
    description: "We guide you through each step with precision, transparency, and compassionate care.",
  },
  {
    title: "Pregnancy Follow-Up",
    description: "We continue supporting you after treatment with clear next steps and ongoing guidance.",
  },
];

const reasons = [
  "Experienced fertility specialists with a patient-first approach",
  "Transparent communication and clear treatment guidance",
  "Modern reproductive technology and careful medical oversight",
  "Comfort-focused care for individuals, couples, and families",
];

const stats = [
  { value: "10k+", label: "Families supported" },
  { value: "94%", label: "Patient satisfaction" },
  { value: "20+", label: "Years of expertise" },
];

const faqItems = [
  {
    question: "What fertility treatments do you offer?",
    answer:
      "We provide IVF, ICSI, IUI, fertility preservation, PCOS care, and gynecological support tailored to your goals.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "You can book online via email or call our clinic directly to arrange a private consultation.",
  },
  {
    question: "Do you support patients beyond treatment?",
    answer:
      "Yes. We guide patients through planning, monitoring, and follow-up care with ongoing communication and support.",
  },
];

export default function Home() {
  return (
    <SiteShell mainClassName="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-10">
        <section className="relative overflow-hidden rounded-[2rem] border border-rose-100 bg-[linear-gradient(120deg,#fdf2f8_0%,#fff7ed_45%,#ffffff_100%)] p-6 shadow-[0_25px_90px_-35px_rgba(190,24,93,0.35)] sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,207,232,0.35),transparent_45%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-rose-200 bg-rose-100/80 px-3 py-1 text-sm font-medium text-rose-700 shadow-sm">
                Compassionate fertility care
              </span>
              <div className="space-y-4">
                <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Start your parenthood journey with expert guidance.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  Trusted IVF, ICSI, IUI, and fertility preservation care designed around your needs, timeline, and hopes.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 rounded-[1.25rem] border border-rose-100 bg-white/70 p-3 text-sm text-slate-600 shadow-sm">
                <span className="rounded-full bg-rose-50 px-3 py-1 font-medium text-rose-700">Personalized care</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">Transparent guidance</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">High-touch support</span>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/appointment"
                  className="inline-flex rounded-full bg-rose-600 px-6 py-3 text-center font-semibold text-white shadow-[0_15px_35px_-15px_rgba(190,24,93,0.5)] transition hover:-translate-y-0.5 hover:bg-rose-700"
                >
                  Book an appointment
                </a>
                <a
                  href="/services"
                  className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-center font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-rose-200 hover:text-rose-700"
                >
                  Explore treatments
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white/75 p-4">
                    <p className="text-xl font-semibold text-slate-900">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white p-3 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80"
                alt="Fertility specialist portrait"
                width={900}
                height={1100}
                className="h-[30rem] w-full rounded-[1.3rem] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div className="flex flex-col">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
                Why choose us
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                World-class fertility care with a personal, reassuring approach.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Our clinic combines advanced reproductive science with one-on-one support so every patient feels guided, informed, and cared for throughout the journey.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-rose-50 px-4 py-2 text-sm font-medium text-rose-700">Advanced IVF protocols</span>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">Transparent guidance</span>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">Patient-first care</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-[1.5rem] border border-rose-100 bg-rose-50 p-3 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1000&q=80"
                  alt="Doctor speaking with a patient about fertility treatment"
                  width={900}
                  height={900}
                  className="aspect-[4/3] w-full rounded-[1.2rem] object-cover sm:aspect-[5/4]"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.25rem] bg-slate-50 p-4 shadow-sm">
                  <p className="text-2xl font-semibold text-slate-900">1,800+</p>
                  <p className="mt-1 text-sm text-slate-600">Happy patient journeys</p>
                </div>
                <div className="rounded-[1.25rem] bg-slate-50 p-4 shadow-sm">
                  <p className="text-2xl font-semibold text-slate-900">12+</p>
                  <p className="mt-1 text-sm text-slate-600">Years of expertise</p>
                </div>
                <div className="rounded-[1.25rem] bg-slate-50 p-4 shadow-sm sm:col-span-1">
                  <p className="text-2xl font-semibold text-slate-900">4.9/5</p>
                  <p className="mt-1 text-sm text-slate-600">Patient trust</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
              About Our Clinic
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Thoughtful fertility care led by experienced specialists.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our team brings together advanced diagnostics and a patient-centered approach to support you with clarity, comfort, and confidence at every step.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">Why choose Horizon Fertility?</h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-2">
                  <span className="mt-1 text-rose-500">✦</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white lg:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-300">
                Treatment Process
              </p>
              <h2 className="text-3xl font-semibold">
                A clear path from consultation to care.
              </h2>
            </div>
            <p className="max-w-xl text-slate-300">
              Every treatment journey is guided with careful planning, modern medical insight, and consistent support.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-[1.25rem] border border-white/10 bg-white/10 p-5">
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
                FAQs
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">
                Answers to common questions about fertility care.
              </h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

    </SiteShell>
  );
}
