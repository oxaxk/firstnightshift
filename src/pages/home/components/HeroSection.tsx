import { type MouseEvent } from 'react';

export default function HeroSection() {
  const handleSmoothLinkClick = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    if (typeof document === 'undefined') return;

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-36 pb-16 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[820px] h-[820px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,163,102,0.18), rgba(0,0,0,0) 60%)' }}
        />
        <div
          className="absolute top-24 -right-40 w-[620px] h-[620px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle at 40% 40%, rgba(255,122,74,0.16), rgba(0,0,0,0) 62%)' }}
        />
        <div
          className="absolute -bottom-56 -left-56 w-[760px] h-[760px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle at 45% 45%, rgba(255,196,160,0.12), rgba(0,0,0,0) 62%)' }}
        />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)',
            backgroundSize: '56px 56px'
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto w-[94%] px-4 sm:px-6">
        <div
          className="relative border border-white/10 rounded-[28px] sm:rounded-[32px] px-5 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 backdrop-blur-2xl"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-7 sm:gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="text-[11px] tracking-[0.22em] uppercase text-white/75">Opening Party</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-[11px] tracking-[0.22em] uppercase text-white/75">STUCK e.V.</span>
              </div>

              <h1 className="mt-5 sm:mt-6 text-[2.05rem] sm:text-[2.6rem] md:text-[3rem] leading-[1.12] font-semibold tracking-[0.08em] uppercase text-white">
                First Nightshift
              </h1>

              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/75 tracking-[0.06em]">
                Reggaeton · Afro / House · Hits
              </p>

              <div className="mt-5 sm:mt-6 text-sm sm:text-base text-white/70 leading-relaxed">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2">
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-[0.18em] uppercase">
                    14.01.2026
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-[0.18em] uppercase">
                    21:00–04:00
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-[0.18em] uppercase">
                    Frankfurt (Oder)
                  </span>
                </div>
                <div className="mt-3 opacity-80">STUCK e.V., Lindenstraße 7, 15230 Frankfurt (Oder)</div>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <a
                  href="/#expect"
                  onClick={(e) => handleSmoothLinkClick(e, 'expect')}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/10 bg-transparent hover:bg-white/5 hover:border-white/20 transition-colors"
                  aria-label="What to expect"
                >
                  <span className="text-xs sm:text-[0.8rem] font-semibold tracking-[0.22em] uppercase text-white/80">
                    What to expect
                  </span>
                </a>
              </div>

              <div className="mt-5 sm:mt-4 text-xs tracking-[0.16em] uppercase text-white/55">
                Student event · 18+
              </div>
            </div>

            {/* Hero image */}
            <img
              src="/images/1.png"
              alt="First Nightshift poster"
              loading="eager"
              className="mx-auto md:mx-0 w-[240px] sm:w-[300px] md:w-[360px] h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
