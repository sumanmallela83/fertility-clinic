'use client';

import Image from 'next/image';
import { FormEvent, useState } from 'react';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  treatment: 'IVF Treatment',
  message: '',
};

export default function AppointmentPage() {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Treatment: ${form.treatment}`,
      `Message: ${form.message}`,
    ].join('\n');

    window.location.href = `mailto:hello@horizonfertility.com?subject=${encodeURIComponent('New Appointment Request')}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#fff8fb_0%,#fdf2f8_45%,#ffffff_100%)] text-slate-800">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="/" className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-500">
          Horizon Fertility
        </a>
        <a
          href="mailto:hello@horizonfertility.com"
          className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Contact clinic
        </a>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-16 lg:px-8">
        <section className="grid gap-8 rounded-[2rem] border border-rose-100 bg-white/80 p-8 shadow-[0_20px_80px_-30px_rgba(190,24,93,0.35)] backdrop-blur lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700">
              Book an appointment
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Start your fertility journey with a personal consultation.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Share a few details and our care team will reach out to help you choose the right treatment path with confidence.
              </p>
            </div>
            <div className="grid gap-4 rounded-[1.5rem] bg-slate-50 p-5 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Call us</p>
                <p className="mt-2 text-sm text-slate-700">+91 98765 43210</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Email</p>
                <p className="mt-2 text-sm text-slate-700">hello@horizonfertility.com</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Hours</p>
                <p className="mt-2 text-sm text-slate-700">Mon–Sat • 9:30 AM – 8:30 PM</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Location</p>
                <p className="mt-2 text-sm text-slate-700">Hyderabad • Warangal • Vijayawada</p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-rose-100 bg-rose-50 p-6">
            <div className="overflow-hidden rounded-[1.25rem] border border-white/80 bg-white p-2 shadow-inner">
              <Image
                src="/clinic-hero.svg"
                alt="Illustration for booking a fertility consultation"
                width={640}
                height={720}
                className="h-auto w-full rounded-[1rem]"
              />
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="rounded-[1.5rem] bg-slate-900 p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-300">Why book with us</p>
            <h2 className="mt-3 text-3xl font-semibold">A calm, guided path to the right care.</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
              <li>• Personalized consultation for every patient journey</li>
              <li>• Guidance on IVF, ICSI, IUI, egg freezing, and more</li>
              <li>• Clear communication and support before, during, and after treatment</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">
                Full name
                <input
                  required
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="mt-2 w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0"
                  placeholder="Your full name"
                />
              </label>
              <label className="text-sm font-medium text-slate-700">
                Phone number
                <input
                  required
                  value={form.phone}
                  onChange={(event) => setForm({ ...form, phone: event.target.value })}
                  className="mt-2 w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0"
                  placeholder="Your phone number"
                />
              </label>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">
                Email address
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className="mt-2 w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0"
                  placeholder="you@example.com"
                />
              </label>
              <label className="text-sm font-medium text-slate-700">
                Treatment interest
                <select
                  value={form.treatment}
                  onChange={(event) => setForm({ ...form, treatment: event.target.value })}
                  className="mt-2 w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0"
                >
                  <option>IVF Treatment</option>
                  <option>ICSI & IUI</option>
                  <option>PCOS & Infertility Care</option>
                  <option>Egg Freezing</option>
                  <option>Gynecology & Pregnancy Care</option>
                </select>
              </label>
            </div>

            <label className="mt-4 block text-sm font-medium text-slate-700">
              Tell us about your journey
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                className="mt-2 w-full rounded-[1.25rem] border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0"
                placeholder="Share a short note about your concerns or goals."
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex rounded-full bg-rose-600 px-6 py-3 font-semibold text-white transition hover:bg-rose-700"
            >
              Send appointment request
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/70 px-6 py-6 text-center text-sm text-slate-600 lg:px-8">
        Horizon Fertility • Compassionate care for every family.
      </footer>
    </div>
  );
}
