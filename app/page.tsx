"use client";

import Image from "next/image";
import { SiteShell } from "@/components/site-shell";

const appointmentHref =
  "mailto:hello@mahitafertility.com?subject=Book%20a%20Consultation&body=Hello%20Mahita%20Fertility%20team%2C%20I%20would%20like%20to%20book%20a%20consultation.%20Please%20let%20me%20know%20the%20best%20time%20for%20an%20appointment.";

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
      "We provide IVF, ICSI, IUI, fertility preservation, donor support, and surrogacy guidance tailored to your goals.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "You can book online or call our clinic directly to arrange a private consultation with our specialists.",
  },
  {
    question: "Do you support patients beyond treatment?",
    answer:
      "Yes. We guide patients through planning, monitoring, pregnancy support, and follow-up care with ongoing communication.",
  },
];

const treatments = [
  {
    title: "IVF & ICSI",
    description: "Advanced fertility treatment with precise laboratory support and personalized care.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "IUI & Fertility Planning",
    description: "Gentle, evidence-based options for couples beginning or continuing their fertility journey.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Fertility Preservation",
    description: "Egg freezing and sperm preservation solutions designed for long-term family planning.",
    image:
      "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Surrogacy & Donor Support",
    description: "Ethical, well-guided support for families exploring donor and surrogacy options.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
  },
];

const experts = [
  {
    name: "Dr. Asha Rao",
    role: "Senior Fertility Consultant",
    description: "Specialist in IVF, ICSI, and fertility preservation with a calm, evidence-led approach.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. Neha Kumar",
    role: "Reproductive Medicine Specialist",
    description: "Experienced in complex fertility cases, donor support, and tailored treatment planning.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. Vijay Menon",
    role: "Andrology & Embryology Lead",
    description: "Guides patients through advanced diagnostics, lab care, and treatment monitoring.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
  },
];

const testimonials = [
  {
    quote: "Every step felt clear, calm, and genuinely supportive. We felt informed throughout the journey.",
    name: "Ananya & Ravi",
    location: "Hyderabad",
  },
  {
    quote: "The team was thoughtful, professional, and always there when we needed guidance.",
    name: "Meera S.",
    location: "Warangal",
  },
  {
    quote: "We appreciated the honesty, warmth, and expertise at every stage of treatment.",
    name: "Sanjay & Priya",
    location: "Vijayawada",
  },
];

export default function Home() {
  return (
    <SiteShell mainClassName="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-rose-100 bg-[linear-gradient(120deg,#fdf2f8_0%,#fff7ed_45%,#ffffff_100%)] p-6 shadow-[0_25px_90px_-35px_rgba(190,24,93,0.35)] sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,207,232,0.35),transparent_45%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-rose-200 bg-white/80 px-3 py-1 text-sm font-medium text-rose-700 shadow-sm">
              Trusted IVF & fertility care in Hyderabad
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Helping build families with advanced fertility care and compassionate support.
            </h1>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white p-3 shadow-xl lg:self-start">
            <Image
              src="https://images.pexels.com/photos/3398675/pexels-photo-3398675.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Mother hugging her newborn baby"
              width={900}
              height={1100}
              className="h-[30rem] w-full rounded-[1.3rem] object-cover"
            />
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="space-y-3">
              <p className="text-lg leading-8 text-slate-600">
                Mahita Fertility brings together expert specialists, modern reproductive technology, and a calm, patient-first approach for every step of your journey.
              </p>
              <p className="text-base leading-7 text-slate-600 sm:text-lg">
                From your first fertility assessment to advanced treatment planning, our team focuses on clear communication, realistic guidance, and continuous support for couples and individuals.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/appointment"
                className="inline-flex rounded-full bg-rose-600 px-6 py-3 text-center font-semibold text-white shadow-[0_15px_35px_-15px_rgba(190,24,93,0.5)] transition hover:-translate-y-0.5 hover:bg-rose-700"
              >
                Book a consultation
              </a>
              <a
                href="/treatments"
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

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
            <div className="rounded-2xl border border-rose-100 bg-white/80 p-4">
              <p className="text-sm font-semibold text-slate-900">Personalized Treatment Roadmap</p>
              <p className="mt-1 text-sm text-slate-600">Step-by-step guidance tailored to your diagnosis and timeline.</p>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-white/80 p-4">
              <p className="text-sm font-semibold text-slate-900">Integrated Emotional Support</p>
              <p className="mt-1 text-sm text-slate-600">Compassionate care that supports your wellbeing through each stage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Why choose Mahita Fertility</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Expert-led fertility care with a calm, personal, and transparent approach.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              We combine advanced reproductive medicine with deep empathy and clear guidance so every family feels supported from their first question to their next milestone.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-rose-50 px-4 py-2 text-sm font-medium text-rose-700">Specialist-led care</span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">Transparent treatment plans</span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">Comfort-focused support</span>
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-slate-50 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-sm leading-7 text-slate-700">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Comprehensive fertility care</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Advanced treatments for every step of your family-building journey.</h2>
          </div>
          <p className="max-w-xl text-slate-600">From IVF and ICSI to surrogacy and fertility preservation, we offer the support and expertise you need.</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {treatments.map((treatment) => (
            <article key={treatment.title} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-sm">
              <div className="relative h-40 w-full">
                <Image src={treatment.image} alt={treatment.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{treatment.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{treatment.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white lg:p-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-300">Your journey starts here</p>
            <h2 className="text-3xl font-semibold">A clear path from first consultation to confident care.</h2>
          </div>
          <p className="max-w-xl text-slate-300">Every treatment plan is built around your unique goals, timeline, and comfort.</p>
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

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Meet our experts</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Specialists dedicated to compassionate, evidence-based fertility care.</h2>
          </div>
          <a href="/appointment" className="inline-flex rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-700">
            Book with our team
          </a>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {experts.map((expert) => (
            <article key={expert.name} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-sm">
              <div className="relative h-48 w-full">
                <Image src={expert.image} alt={expert.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{expert.name}</h3>
                <p className="mt-1 text-sm font-medium text-rose-600">{expert.role}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{expert.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-rose-100 bg-[linear-gradient(135deg,#fff8fb_0%,#fffdfb_100%)] p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Patient stories</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Families trust us for clarity, comfort, and expert support.</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-[1.25rem] border border-rose-100 bg-white p-5 shadow-sm">
              <p className="text-sm leading-8 text-slate-700">“{testimonial.quote}”</p>
              <p className="mt-4 font-semibold text-slate-900">{testimonial.name}</p>
              <p className="text-sm text-slate-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Visit our centre</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Conveniently located for patients seeking trusted fertility care in Hyderabad.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            We welcome patients from across India and around the world with a calm, supportive experience from consultation to treatment.
          </p>
          <div className="mt-6 space-y-3 rounded-[1.5rem] border border-rose-100 bg-rose-50 p-5">
            <div>
              <p className="font-semibold text-slate-900">Main Centre</p>
              <p className="mt-1 text-sm text-slate-700">Khairatabad, Hyderabad</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Satellite Centre</p>
              <p className="mt-1 text-sm text-slate-700">Manikonda, Hyderabad</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Call us today</p>
              <p className="mt-1 text-sm text-slate-700">+91 98765 43210</p>
            </div>
            <a href="/appointment" className="mt-4 inline-flex rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-700">
              Schedule a consultation
            </a>
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-xl font-semibold text-slate-900">Frequently asked questions</h3>
          <div className="mt-5 space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-[1.25rem] border border-slate-200 bg-white p-4">
                <h4 className="font-semibold text-slate-900">{item.question}</h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
