import React, { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function CookieSettingsPage() {
  return (
    <>
      <Header />
      <main
        className="min-h-screen pt-28 md:pt-32 pb-20 px-4"
        style={{ background: 'var(--page-bg)', color: 'var(--page-fg)' }}
      >
        <div
          className="max-w-3xl mx-auto rounded-[28px] md:rounded-[32px] backdrop-blur-2xl border border-[rgba(15,23,42,0.14)] dark:border-white/10 shadow-[0_24px_80px_rgba(15,23,42,0.14)] px-6 sm:px-10 lg:px-12 py-10 md:py-12"
          style={{ background: 'var(--section-glass)' }}
        >
          <h1
            className="text-[1.9rem] md:text-[2.3rem] lg:text-[2.5rem] font-light leading-snug tracking-[0.08em] uppercase"
            style={{
              fontFamily:
                'Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
            }}
          >
            Cookie-Hinweis
          </h1>

          <p className="mt-6 text-sm md:text-[0.95rem] opacity-80 leading-relaxed">
            Diese Website verwendet keine Cookies zu Analyse-, Marketing- oder Tracking-Zwecken.
          </p>

          <p className="mt-4 text-sm md:text-[0.95rem] opacity-80 leading-relaxed">
            Es werden ausschließlich technisch notwendige Funktionen genutzt, die für den Betrieb
            der Website erforderlich sind (z. B. Darstellung, Navigation und Sicherheit).
          </p>

          <p className="mt-4 text-sm md:text-[0.95rem] opacity-80 leading-relaxed">
            Eine Zustimmung über einen Cookie-Banner ist daher nicht erforderlich.
          </p>

          <p className="mt-6 text-xs opacity-60">
            Weitere Informationen findest du in unserer{' '}
            <a
              href="/datenschutz"
              className="text-[#0891b2] dark:text-[#22d3ee] hover:opacity-100 underline underline-offset-2"
            >
              Datenschutzerklärung
            </a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
