'use client';

import Link from 'next/link';
import { useState, type ReactNode } from 'react';

type SiteShellProps = {
  children: ReactNode;
  mainClassName?: string;
};

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/treatments', label: 'Treatments' },
  { href: '/ivf-icsi', label: 'IVF & ICSI' },
  { href: '/international-patients', label: 'International Patients' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/appointment', label: 'Contact' },
];

export function SiteShell({ children, mainClassName }: SiteShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col bg-[linear-gradient(135deg,#fff8fb_0%,#fdf2f8_45%,#ffffff_100%)] text-slate-800">
      <div className="border-b border-rose-100 bg-slate-900 px-4 py-2 text-sm text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="text-base">
              📞
            </span>
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="text-base">
              🕒
            </span>
            <span>Mon–Sat • 9:30 AM – 8:30 PM</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-4 py-5 sm:px-6 lg:px-8">
          <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center">
            <Link href="/" className="hidden items-center justify-self-start md:inline-flex" aria-label="Mahita Fertility Centre home">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-rose-200 bg-white text-base font-bold uppercase tracking-[0.18em] text-rose-500 shadow-sm">
                MF
              </span>
            </Link>

            <Link href="/" className="block text-center">
              <p className="text-xl font-semibold uppercase tracking-[0.35em] text-rose-500 sm:text-3xl">
                Mahita Fertility Centre
              </p>
              <p className="mt-1 text-base text-slate-600 sm:text-lg">Leading fertility care for hopeful families</p>
            </Link>

            <Link
              href="/appointment"
              className="hidden justify-self-end rounded-full bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-[0_12px_30px_-15px_rgba(15,23,42,0.65)] transition hover:-translate-y-0.5 hover:bg-slate-700 md:inline-flex"
            >
              Book a consultation
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="col-start-3 justify-self-end rounded-full border border-slate-200 px-5 py-2.5 text-base font-semibold text-slate-700 transition hover:border-rose-200 hover:text-rose-600 md:hidden"
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>

          <nav className="hidden w-full items-center justify-start gap-8 border-t border-slate-200 pt-5 text-base font-medium text-slate-700 md:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-rose-600">
                {item.label}
              </Link>
            ))}
          </nav>

        </div>
      </header>

      {menuOpen && (
        <div className="mx-auto mb-4 flex w-full max-w-7xl flex-col gap-2 rounded-[1.25rem] border border-slate-200 bg-white/90 px-4 py-3 shadow-sm md:hidden lg:px-8">
          {navItems.map((item) => (
            <Link
              key={`mobile-${item.label}`}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-rose-50 hover:text-rose-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <main className={`flex-1 ${mainClassName ?? ""}`.trim()}>{children}</main>

      <footer className="border-t border-slate-200 bg-white/80 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6 text-center">
          <div>
            <p className="text-lg font-semibold uppercase tracking-[0.3em] text-rose-500 sm:text-xl">Mahita Fertility Centre</p>
            <p className="mt-2">Compassionate, advanced fertility care for every family.</p>
          </div>
          <div className="mt-2 flex w-full flex-wrap justify-center gap-4 border-t border-slate-200 pt-4">
            {navItems.map((item) => (
              <Link key={`footer-${item.label}`} href={item.href} className="transition hover:text-rose-600">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
