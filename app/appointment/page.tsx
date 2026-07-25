'use client';

import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { SiteShell } from '@/components/site-shell';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  treatment: 'IVF Treatment',
  branch: 'Khairatabad, Hyderabad',
  contactTime: 'Morning (9:30 AM - 12:30 PM)',
  message: '',
};

type FormErrors = Partial<Record<keyof typeof initialForm, string>>;

const nextSteps = [
  'Our coordinator reviews your request within a few hours.',
  'We call you to confirm history, branch preference, and slot options.',
  'You receive appointment details and pre-visit guidance.',
];

const firstVisitChecklist = [
  'Previous fertility reports and scan summaries (if available)',
  'Current medications and known medical conditions',
  'A short timeline of your fertility journey or concerns',
];

const clinicLocations = [
  {
    name: 'Mahita Fertility Clinic - Khairatabad',
    address:
      '#6-2-966/4, Lane No 10, Opp. Hindi Prachar Sabha, Beside Nirmala High School, Khairatabad, Hyderabad',
  },
];

const mapEmbedUrl =
  'https://maps.google.com/maps?ll=17.4184,78.4567&z=16&t=m&output=embed';

export default function AppointmentPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = 'Please enter your full name.';
    }

    const phoneDigits = form.phone.replace(/\D/g, '');
    if (!phoneDigits) {
      nextErrors.phone = 'Please enter your phone number.';
    } else if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      nextErrors.phone = 'Enter a valid phone number (10 to 15 digits).';
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Please share a short note about your journey.';
    }

    return nextErrors;
  };

  const clearFieldError = (field: keyof typeof initialForm) => {
    if (!errors[field]) {
      return;
    }

    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Treatment: ${form.treatment}`,
      `Preferred Branch: ${form.branch}`,
      `Preferred Contact Time: ${form.contactTime}`,
      `Message: ${form.message}`,
    ].join('\n');

    window.location.href = `mailto:hello@mahitafertility.com?subject=${encodeURIComponent('New Appointment Request')}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <SiteShell mainClassName="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-10">
        <section className="grid gap-8 rounded-[2rem] border border-rose-100 bg-white/80 p-6 shadow-[0_20px_80px_-30px_rgba(190,24,93,0.35)] backdrop-blur sm:p-8 lg:grid-cols-[1.02fr_0.98fr] lg:p-12">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700">
              Book an appointment
            </span>
            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Start your fertility journey with a personal consultation.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Share a few details and our care team will reach out to help you choose the right treatment path with confidence.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#appointment-form"
                className="inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700"
              >
                Fill appointment form
              </a>
            </div>
            <div className="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Call us</p>
                <p className="mt-2 text-sm text-slate-700">+91 98765 43210</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Email</p>
                <p className="mt-2 text-sm text-slate-700">hello@mahitafertility.com</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Hours</p>
                <p className="mt-2 text-sm text-slate-700">Mon–Sat • 9:30 AM – 8:30 PM</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Location</p>
                <p className="mt-2 text-sm text-slate-700">Khairatabad, Hyderabad</p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-amber-50 p-6">
            <div className="overflow-hidden rounded-[1.25rem] border border-white/80 bg-white p-2 shadow-[0_20px_70px_-30px_rgba(190,24,93,0.3)]">
              <Image
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
                alt="A warm fertility clinic consultation space"
                width={640}
                height={720}
                className="h-[22rem] w-full rounded-[1rem] object-cover"
              />
            </div>
            <div className="mt-4 rounded-[1.25rem] border border-rose-100 bg-white/80 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-700">Trusted support</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">From your first question to your first appointment, our team is here to help you move forward with clarity.</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Visit our Hyderabad clinic</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Find the branch that is most convenient for you.</h2>
            <div className="mt-5 space-y-4">
              {clinicLocations.map((location) => (
                <div key={location.name} className="rounded-[1.25rem] border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">{location.name}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{location.address}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-2 shadow-sm">
            <iframe
              title="Mahita Fertility Clinic Location Map"
              src={mapEmbedUrl}
              className="h-[26rem] w-full rounded-[1.15rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>

        <section className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-2 lg:p-8">
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">What happens next</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              {nextSteps.map((step) => (
                <li key={step}>• {step}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">For your first visit</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              {firstVisitChecklist.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="appointment-form" className="scroll-mt-28 grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="rounded-[1.5rem] bg-slate-900 p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-300">Why book with us</p>
            <h2 className="mt-3 text-3xl font-semibold">A calm, guided path to the right care.</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
              <li>• Personalized consultation for every patient journey</li>
              <li>• Guidance on IVF, ICSI, IUI, egg freezing, and more</li>
              <li>• Clear communication and support before, during, and after treatment</li>
            </ul>
            <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-white/10 p-4">
              <p className="text-sm font-semibold">Same-week consultation availability</p>
              <p className="mt-2 text-sm text-slate-300">Our clinic team can help you schedule a visit quickly and comfortably.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
            {submitted && (
              <div className="mb-5 flex animate-[fadeIn_0.25s_ease-out] items-start gap-3 rounded-[1rem] border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-base font-semibold text-white">
                  ✓
                </div>
                <div>
                  <p className="font-semibold">Thank you — your request is ready to send.</p>
                  <p className="mt-1">We’ll be in touch shortly to help you with the next step.</p>
                </div>
              </div>
            )}
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">
                Full name
                <input
                  required
                  value={form.name}
                  onChange={(event) => {
                    setForm({ ...form, name: event.target.value });
                    clearFieldError('name');
                  }}
                  className="mt-2 w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-rose-300"
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-2 text-xs text-rose-600">{errors.name}</p>}
              </label>
              <label className="text-sm font-medium text-slate-700">
                Phone number
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(event) => {
                    setForm({ ...form, phone: event.target.value });
                    clearFieldError('phone');
                  }}
                  className="mt-2 w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-rose-300"
                  placeholder="Your phone number"
                />
                {errors.phone && <p className="mt-2 text-xs text-rose-600">{errors.phone}</p>}
              </label>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">
                Email address
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => {
                    setForm({ ...form, email: event.target.value });
                    clearFieldError('email');
                  }}
                  className="mt-2 w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-rose-300"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-2 text-xs text-rose-600">{errors.email}</p>}
              </label>
              <label className="text-sm font-medium text-slate-700">
                Treatment interest
                <select
                  value={form.treatment}
                  onChange={(event) => setForm({ ...form, treatment: event.target.value })}
                  className="mt-2 w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-rose-300"
                >
                  <option>IVF Treatment</option>
                  <option>ICSI & IUI</option>
                  <option>PCOS & Infertility Care</option>
                  <option>Egg Freezing</option>
                  <option>Gynecology & Pregnancy Care</option>
                </select>
              </label>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">
                Preferred branch
                <select
                  value={form.branch}
                  onChange={(event) => setForm({ ...form, branch: event.target.value })}
                  className="mt-2 w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-rose-300"
                >
                  <option>Khairatabad, Hyderabad</option>
                </select>
              </label>
              <label className="text-sm font-medium text-slate-700">
                Best time to call
                <select
                  value={form.contactTime}
                  onChange={(event) => setForm({ ...form, contactTime: event.target.value })}
                  className="mt-2 w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-rose-300"
                >
                  <option>Morning (9:30 AM - 12:30 PM)</option>
                  <option>Afternoon (12:30 PM - 4:30 PM)</option>
                  <option>Evening (4:30 PM - 8:30 PM)</option>
                </select>
              </label>
            </div>

            <label className="mt-4 block text-sm font-medium text-slate-700">
              Tell us about your journey
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(event) => {
                  setForm({ ...form, message: event.target.value });
                  clearFieldError('message');
                }}
                className="mt-2 w-full rounded-[1.25rem] border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-rose-300"
                placeholder="Share a short note about your concerns or goals."
              />
              {errors.message && <p className="mt-2 text-xs text-rose-600">{errors.message}</p>}
            </label>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex rounded-full bg-rose-600 px-6 py-3 font-semibold text-white transition hover:bg-rose-700"
              >
                Send appointment request
              </button>
              <button
                type="button"
                onClick={() => {
                  setForm(initialForm);
                  setErrors({});
                  setSubmitted(false);
                }}
                className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-rose-200 hover:text-rose-700"
              >
                Clear form
              </button>
            </div>
            <p className="mt-3 text-xs text-slate-500">By submitting, you agree to be contacted by our care coordinator for scheduling support.</p>
          </form>
        </section>
    </SiteShell>
  );
}
