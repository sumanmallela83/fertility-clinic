import Image from "next/image";

const appointmentHref =
  "mailto:hello@horizonfertility.com?subject=Book%20a%20Consultation&body=Hello%20Horizon%20Fertility%20team%2C%20I%20would%20like%20to%20book%20a%20consultation.%20Please%20let%20me%20know%20the%20best%20time%20for%20an%20appointment.";

const services = [
  {
    title: "IVF Treatment",
    description:
      "Advanced fertility treatment with personalized protocols, embryo assessment, and thoughtful support at every stage.",
  },
  {
    title: "ICSI & IUI",
    description:
      "Targeted assisted reproduction options designed to improve fertilization and increase the chance of success.",
  },
  {
    title: "PCOS & Infertility Care",
    description:
      "Comprehensive evaluation and care for hormonal imbalances, ovulation concerns, and male-factor infertility.",
  },
  {
    title: "Surrogacy & Egg Freezing",
    description:
      "Flexible fertility preservation and family-building pathways tailored to your long-term goals.",
  },
  {
    title: "Gynecology & Pregnancy Care",
    description:
      "Gentle, evidence-based support for women’s reproductive health, pregnancy planning, and follow-up care.",
  },
  {
    title: "Fertility Preservation",
    description:
      "A calm, expert-led approach to protecting your reproductive future with clarity and confidence.",
  },
];

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

const branches = [
  "Hyderabad",
  "Warangal",
  "Nizamabad",
  "Vijayawada",
  "Kurnool",
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
    <div className="min-h-screen bg-[linear-gradient(135deg,#fff8fb_0%,#fdf2f8_45%,#ffffff_100%)] text-slate-800">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-500">
            Horizon Fertility
          </p>
          <p className="text-sm text-slate-600">Leading fertility care for hopeful families</p>
        </div>
        <a
          href={appointmentHref}
          className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Book a consultation
        </a>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-16 lg:px-8">
        <section className="grid items-center gap-8 rounded-[2rem] border border-rose-100 bg-white/80 p-8 shadow-[0_20px_80px_-30px_rgba(190,24,93,0.35)] backdrop-blur lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700">
              Trusted IVF, ICSI, IUI & fertility care
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Helping couples and individuals build parenthood journeys with confidence.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                At Horizon Fertility, we combine advanced reproductive medicine with compassionate guidance to support you from the first consultation through every step of treatment.
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
                href="#contact"
                className="rounded-full border border-slate-200 px-6 py-3 text-center font-semibold text-slate-700 transition hover:border-rose-200 hover:text-rose-700"
              >
                Book appointment
              </a>
            </div>
            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-slate-50 p-4">
                  <dt className="text-2xl font-semibold text-slate-900">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-slate-600">{stat.label}</dd>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-rose-100 bg-rose-50 p-6">
            <div className="overflow-hidden rounded-[1.25rem] border border-white/80 bg-white p-2 shadow-inner">
              <Image
                src="/clinic-hero.svg"
                alt="Illustration representing a supportive fertility clinic experience"
                width={640}
                height={720}
                priority
                className="h-auto w-full rounded-[1rem]"
              />
            </div>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-rose-700">
              Personalized fertility planning
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              A calm, expert-led experience for every patient journey.
            </h2>
          </div>
        </section>

        <section id="services" className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
                Our Services
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">
                Comprehensive fertility solutions under one roof.
              </h2>
            </div>
            <p className="max-w-xl text-slate-600">
              We offer advanced treatment options for infertility, fertility preservation, gynecological care, and pregnancy planning with a focus on expertise and empathy.
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
              About Our Clinic
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Leading fertility specialists dedicated to thoughtful, results-driven care.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our team brings together experienced fertility experts, advanced diagnostics, and a patient-centered approach to help you move forward with clarity, comfort, and confidence.
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

        <section className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="overflow-hidden rounded-[1.5rem] border border-rose-100 bg-rose-50 p-3">
            <Image
              src="/doctor-portrait.svg"
              alt="Illustrated fertility specialist portrait"
              width={720}
              height={900}
              className="h-auto w-full rounded-[1.2rem]"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
              Meet Our Specialist
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Experienced care for your most personal journey.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Dr. Ananya Rao brings years of expertise in reproductive medicine and has helped many families navigate fertility treatment with compassion, transparency, and confidence.
            </p>
            <div className="mt-6 rounded-[1.25rem] bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              <p><span className="font-semibold text-slate-900">Qualifications:</span> MBBS, DGO, Reproductive Medicine Specialist</p>
              <p className="mt-2"><span className="font-semibold text-slate-900">Focus:</span> IVF, IUI, fertility preservation, PCOS, and gynecological care</p>
            </div>
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
                Our Branches
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">
                Caring for patients across multiple cities.
              </h2>
            </div>
            <p className="max-w-xl text-slate-600">
              With a growing network of centers, patients can access trusted fertility support close to home and feel confident about ongoing care.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {branches.map((branch) => (
              <span key={branch} className="rounded-full border border-rose-100 bg-rose-50 px-4 py-2 text-sm font-medium text-rose-700">
                {branch}
              </span>
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

        <section id="contact" className="grid gap-6 rounded-[2rem] border border-rose-100 bg-white p-8 shadow-sm lg:grid-cols-[1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
              Start your consultation
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Book an appointment with our fertility team today.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Whether you are exploring fertility treatment for the first time or returning for continued care, we’re here to guide you with compassion and clarity.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <p><span className="font-semibold text-slate-900">Phone:</span> +91 98765 43210</p>
              <p><span className="font-semibold text-slate-900">Email:</span> hello@horizonfertility.com</p>
              <p><span className="font-semibold text-slate-900">Hours:</span> Mon–Sat • 9:30 AM – 8:30 PM</p>
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-rose-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-700">
              Contact us
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={appointmentHref}
                className="inline-flex rounded-full bg-rose-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-rose-700"
              >
                Book appointment
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex rounded-full border border-slate-200 px-6 py-3 text-center font-semibold text-slate-700 transition hover:border-rose-200 hover:text-rose-700"
              >
                Call clinic
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/70 px-6 py-6 text-center text-sm text-slate-600 lg:px-8">
        Horizon Fertility • Compassionate, advanced fertility care for every family.
      </footer>
    </div>
  );
}
