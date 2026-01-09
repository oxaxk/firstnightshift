import type { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleSmoothFooterNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const [path, hash] = href.split('#');
    const isHome = window.location.pathname === '/' || window.location.pathname === '';

    // Kein Hash, anderer Pfad oder wir sind nicht auf der Startseite → normal navigieren
    if (!hash || (path && path !== '' && path !== '/') || !isHome) {
      return;
    }

    event.preventDefault();

    const targetElement = document.getElementById(hash);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <footer className="pt-14 pb-10 text-[color:var(--page-fg)]">
      <div className="max-w-5xl mx-auto px-6">
        <div
          className="relative border border-white/10 rounded-3xl px-6 sm:px-8 py-8"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <a
                href="/#hero"
                onClick={(e) => handleSmoothFooterNavClick(e, '/#hero')}
                aria-label="Back to top"
                className="inline-flex items-center"
              >
                <img
                  src="/images/4.png"
                  alt="First Nightshift"
                  className="h-[72px] sm:h-[84px] w-auto opacity-[0.92] hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </a>

              <p className="mt-3 text-sm opacity-70 leading-relaxed">
                Opening Party · 14.01.2026 · 21:00–04:00<br className="sm:hidden" />
                STUCK e.V., Frankfurt (Oder)
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <Link to="/impressum" className="opacity-75 hover:opacity-100 transition-opacity">
                Impressum
              </Link>
              <Link to="/datenschutz" className="opacity-75 hover:opacity-100 transition-opacity">
                Datenschutz
              </Link>
              <Link to="/agb" className="opacity-75 hover:opacity-100 transition-opacity">
                AGB
              </Link>
              <a
                href="https://instagram.com/firstnightshift"
                target="_blank"
                rel="noreferrer"
                className="opacity-75 hover:opacity-100 transition-opacity"
              >
                Instagram
              </a>
              <a
                href="https://maps.google.com/?q=STUCK%20e.V.%2C%20Lindenstra%C3%9Fe%207%2C%2015230%20Frankfurt%20%28Oder%29"
                target="_blank"
                rel="noreferrer"
                className="opacity-75 hover:opacity-100 transition-opacity"
              >
                Google Maps
              </a>
            </div>
          </div>

          <div className="mt-7 pt-6 border-t border-white/10">
            <p className="text-xs opacity-55">
              This event is organized in cooperation with STUCK e.V. and local students.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
