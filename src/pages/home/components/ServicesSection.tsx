import { type MouseEvent } from 'react';

export default function ServicesSection() {

  return (
    <section className="py-18 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -top-56 left-[-20%] w-[760px] h-[760px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,196,160,0.10), rgba(0,0,0,0) 62%)' }}
        />
        <div
          className="absolute bottom-[-45%] right-[-25%] w-[820px] h-[820px] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle at 45% 45%, rgba(255,122,74,0.10), rgba(0,0,0,0) 64%)' }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto w-[94%] px-4 sm:px-6">
        {/* LINE-UP */}
        <div
          id="lineup"
          className="scroll-mt-28 md:scroll-mt-32 relative border border-white/10 rounded-[28px] sm:rounded-[32px] px-5 sm:px-8 md:px-10 py-9 sm:py-10 md:py-12 backdrop-blur-2xl"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-white/60">
                Line-up
              </p>
              <h2 className="mt-3 text-[1.55rem] sm:text-[1.9rem] md:text-[2.1rem] leading-[1.18] font-semibold tracking-[0.10em] uppercase text-white">
                Line-up
              </h2>
              <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">Reggaeton · Afro/House · Hits</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5">
              <div className="text-xs tracking-[0.18em] uppercase text-white/55">DJ</div>
              <div className="mt-2 text-base font-semibold text-white/90">DJ NOËLLE</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5">
              <div className="text-xs tracking-[0.18em] uppercase text-white/55">DJ</div>
              <div className="mt-2 text-base font-semibold text-white/90">DJ MUKH:TAR</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5">
              <div className="text-xs tracking-[0.18em] uppercase text-white/55">DJ</div>
              <div className="mt-2 text-base font-semibold text-white/90">DJ ALCARÂH</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5">
              <div className="text-xs tracking-[0.18em] uppercase text-white/55">DJ</div>
              <div className="mt-2 text-base font-semibold text-white/90">DJ VYTAURAS</div>
            </div>
          </div>
        </div>

        {/* LOCATION */}
        <div
          id="location"
          className="scroll-mt-28 md:scroll-mt-32 mt-6 relative border border-white/10 rounded-[28px] sm:rounded-[32px] px-5 sm:px-8 md:px-10 py-9 sm:py-10 md:py-12 backdrop-blur-2xl"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-white/60">
                Location
              </p>
              <h2 className="mt-3 text-[1.55rem] sm:text-[1.9rem] md:text-[2.1rem] leading-[1.18] font-semibold tracking-[0.10em] uppercase text-white">
                STUCK e.V.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                Lindenstraße 7, 15230 Frankfurt (Oder)
              </p>
              <p className="mt-2 text-sm text-white/60">Right next to Europa-Universität Viadrina</p>
            </div>

            <a
              href="https://maps.google.com/?q=STUCK%20e.V.%2C%20Lindenstra%C3%9Fe%207%2C%2015230%20Frankfurt%20%28Oder%29"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/10 bg-transparent hover:bg-white/5 hover:border-white/20 transition-colors"
              aria-label="Open in Google Maps"
            >
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-white/80">Open in Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
