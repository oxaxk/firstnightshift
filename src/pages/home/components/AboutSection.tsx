import React from 'react';

export default function AboutSection() {
  const items = [
    {
      title: 'Reggaeton & Latin bangers all night',
      description: 'Fast, loud, and sing-along energy — zero filler.'
    },
    {
      title: 'Afro / House warm-up',
      description: 'Smooth groove early — then the tempo goes up.'
    },
    {
      title: 'International crowd',
      description: 'Erasmus & Viadrina vibe — open, social, and mixed.'
    },
    {
      title: 'Glow / neon visuals at STUCK',
      description: 'Dark room, warm lights, clean atmosphere. No kitsch.'
    }
  ];

  return (
    <section id="expect" className="py-18 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -top-48 left-1/2 -translate-x-1/2 w-[760px] h-[760px] rounded-full blur-[130px]"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,163,102,0.14), rgba(0,0,0,0) 62%)' }}
        />
        <div
          className="absolute bottom-[-40%] right-[-20%] w-[720px] h-[720px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,122,74,0.10), rgba(0,0,0,0) 64%)' }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto w-[94%] px-4 sm:px-6">
        <div
          className="relative border border-white/10 rounded-[28px] sm:rounded-[32px] px-5 sm:px-8 md:px-10 py-9 sm:py-10 md:py-12 backdrop-blur-2xl"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-white/60">
                What to expect
              </p>
              <h2 className="mt-3 text-[1.55rem] sm:text-[1.9rem] md:text-[2.1rem] leading-[1.18] font-semibold tracking-[0.10em] uppercase text-white">
                A clean night. High energy.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                Simple concept: good music, international crowd, and a room that feels right.
              </p>
            </div>

            <div className="text-xs tracking-[0.18em] uppercase text-white/55">
              21:00 warm-up · peak after midnight
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/7 transition-colors px-5 py-5"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="mt-0.5 w-9 h-9 rounded-full border border-white/12 bg-black/30 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: 'rgba(255,163,102,0.95)', boxShadow: '0 0 16px rgba(255,163,102,0.35)' }}
                    />
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-white/90 leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/65 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}