'use client';

import Link from 'next/link';
import { useState, type ReactNode } from 'react';

type SiteShellProps = {
  children: ReactNode;
  mainClassName?: string;
};

export function SiteShell({ children, mainClassName }: SiteShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#fff8fb_0%,#fdf2f8_45%,#ffffff_100%)] text-slate-800">
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

      <header className="sticky top-0 z-30 mx-auto flex w-full max-w-7xl items-center justify-between border-b border-slate-200/80 bg-white/80 px-6 py-4 backdrop-blur lg:px-8">
        <div>
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-500">
            Horizon Fertility
          </Link>
          <p className="text-sm text-slate-600">Leading fertility care for hopeful families</p>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/" className="transition hover:text-rose-600">
            Home
          </Link>
          <Link href="/services" className="transition hover:text-rose-600">
            Services
          </Link>
          <Link href="/appointment" className="transition hover:text-rose-600">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-rose-200 hover:text-rose-600 md:hidden"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          <Link
            href="/appointment"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Book a consultation
          </Link>
        </div>
      </header>

      {menuOpen && (
        <div className="mx-auto mb-4 flex w-full max-w-7xl flex-col gap-2 rounded-[1.25rem] border border-slate-200 bg-white/90 px-4 py-3 shadow-sm md:hidden lg:px-8">
          <Link href="/" className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-rose-50 hover:text-rose-600">
            Home
          </Link>
          <Link href="/services" className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-rose-50 hover:text-rose-600">
            Services
          </Link>
          <Link href="/appointment" className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-rose-50 hover:text-rose-600">
            Contact
          </Link>
        </div>
      )}

      <main className={mainClassName}>{children}</main>

      <footer className="border-t border-slate-200 bg-white/80 px-6 py-8 text-sm text-slate-600 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-500">Horizon Fertility</p>
            <p className="mt-2">Compassionate, advanced fertility care for every family.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="transition hover:text-rose-600">
              Home
            </Link>
            <Link href="/services" className="transition hover:text-rose-600">
              Services
            </Link>
            <Link href="/appointment" className="transition hover:text-rose-600">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
