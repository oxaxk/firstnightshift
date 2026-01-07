import { useEffect, useRef, useState, type MouseEvent } from 'react';

export default function Header() {
  const Icon = ({ name, className }: { name: 'menu' | 'close' | 'arrowUpRight' | 'instagram'; className?: string }) => {
    const common = {
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      className
    } as const;

    switch (name) {
      case 'menu':
        return (
          <svg {...common} aria-hidden="true">
            <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
          </svg>
        );
      case 'close':
        return (
          <svg {...common} aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
          </svg>
        );
      case 'arrowUpRight':
        return (
          <svg {...common} aria-hidden="true">
            <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M10 7h7v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'instagram':
        return (
          <svg {...common} aria-hidden="true">
            <path
              d="M7.7 3h8.6A4.7 4.7 0 0 1 21 7.7v8.6A4.7 4.7 0 0 1 16.3 21H7.7A4.7 4.7 0 0 1 3 16.3V7.7A4.7 4.7 0 0 1 7.7 3Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <path
              d="M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
              stroke="currentColor"
              strokeWidth="1.7"
            />
            <path
              d="M17.3 6.7h.01"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const headerRef = useRef<HTMLElement | null>(null);
  const lastScrollYRef = useRef(0);

  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ticketUrl =
    // Vite preferred
    (import.meta as any)?.env?.VITE_TICKET_URL ||
    // fallback if you insist on NEXT_PUBLIC_* naming
    (import.meta as any)?.env?.NEXT_PUBLIC_TICKET_URL ||
    '';

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const currentY = window.scrollY || window.pageYOffset;
      const lastY = lastScrollYRef.current;
      const THRESHOLD = 10;

      if (Math.abs(currentY - lastY) < THRESHOLD) return;

      if (currentY > lastY && currentY > 90) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollYRef.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (headerRef.current && target && !headerRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.assign('/#hero');
    setIsMenuOpen(false);
  };

  const handleSmoothNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const [path, hashRaw] = href.split('#');
    const hash = hashRaw || '';

    if (!hash || (path && path !== '' && path !== '/')) return;

    event.preventDefault();

    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
      return;
    }

    window.location.assign(`/#${hash}`);
    setIsMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-5 left-1/2 -translate-x-1/2 max-w-5xl w-[94%] z-50 transition-transform duration-300 ${
        isHidden ? '-translate-y-[180%]' : 'translate-y-0'
      }`}
      role="banner"
      aria-label="Main navigation"
    >
      <div
        className="relative w-full px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3 backdrop-blur-2xl border border-white/10 rounded-full overflow-visible"
        style={{ background: 'rgba(0,0,0,0.45)' }}
      >
        <a
          href="/#hero"
          onClick={handleLogoClick}
          className="group flex items-center"
          aria-label="First Nightshift"
        >
          <img
            src="/images/4.png"
            alt="First Nightshift"
            className="h-[68px] sm:h-[76px] w-auto opacity-[0.92] group-hover:opacity-100 transition-opacity"
            loading="eager"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6 text-xs tracking-[0.18em] uppercase">
          <a
            href="/#expect"
            onClick={(e) => handleSmoothNavClick(e, '/#expect')}
            className="text-white/70 hover:text-white transition-colors"
          >
            Expect
          </a>
          <a
            href="/#lineup"
            onClick={(e) => handleSmoothNavClick(e, '/#lineup')}
            className="text-white/70 hover:text-white transition-colors"
          >
            Line-up
          </a>
          <a
            href="/#tickets"
            onClick={(e) => handleSmoothNavClick(e, '/#tickets')}
            className="text-white/70 hover:text-white transition-colors"
          >
            Tickets
          </a>
          <a
            href="/#location"
            onClick={(e) => handleSmoothNavClick(e, '/#location')}
            className="text-white/70 hover:text-white transition-colors"
          >
            Location
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://instagram.com/firstnightshift"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-transparent hover:bg-white/5 hover:border-white/20 transition-colors"
            aria-label="Instagram: firstnightshift"
          >
            <Icon name="instagram" className="w-4 h-4 text-white/75" />
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white/80">Instagram</span>
          </a>
          <a
            href={ticketUrl || '#tickets'}
            target={ticketUrl ? '_blank' : undefined}
            rel={ticketUrl ? 'noreferrer' : undefined}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-colors"
            aria-label="Get your ticket"
          >
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white/90">Ticket</span>
            <Icon name="arrowUpRight" className="w-4 h-4 text-white/75" />
          </a>

          <a
            href="https://instagram.com/firstnightshift"
            target="_blank"
            rel="noreferrer"
            className="sm:hidden w-10 h-10 flex items-center justify-center text-white rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-colors"
            aria-label="Instagram: firstnightshift"
          >
            <Icon name="instagram" className="w-5 h-5 text-white/80" />
          </a>

          <button
            type="button"
            className="md:hidden w-10 h-10 flex items-center justify-center text-white rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobileMenu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="relative w-5 h-5 flex items-center justify-center">
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ease-out pointer-events-none ${
                  isMenuOpen ? 'opacity-0 scale-75 rotate-90' : 'opacity-100 scale-100 rotate-0'
                }`}
              >
                <Icon name="menu" className="w-5 h-5" />
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ease-out pointer-events-none ${
                  isMenuOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-90'
                }`}
              >
                <Icon name="close" className="w-5 h-5" />
              </span>
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobileMenu"
          className="md:hidden mt-3 ml-auto w-[260px] rounded-2xl backdrop-blur-2xl border border-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
          style={{ background: 'rgba(0,0,0,0.55)' }}
        >
          <div className="px-4 py-3">
            <div className="flex flex-col gap-1 text-xs tracking-[0.18em] uppercase">
              <a
                href="/#expect"
                className="block px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                onClick={(e) => handleSmoothNavClick(e, '/#expect')}
              >
                Expect
              </a>
              <a
                href="/#lineup"
                className="block px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                onClick={(e) => handleSmoothNavClick(e, '/#lineup')}
              >
                Line-up
              </a>
              <a
                href="/#tickets"
                className="block px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                onClick={(e) => handleSmoothNavClick(e, '/#tickets')}
              >
                Tickets
              </a>
              <a
                href="/#location"
                className="block px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                onClick={(e) => handleSmoothNavClick(e, '/#location')}
              >
                Location
              </a>
            </div>

            <div className="mt-3 pt-3 border-t border-white/10">
              <a
                href={ticketUrl || '#tickets'}
                target={ticketUrl ? '_blank' : undefined}
                rel={ticketUrl ? 'noreferrer' : undefined}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-colors"
              >
                <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white/90">Get your ticket</span>
                <Icon name="arrowUpRight" className="w-4 h-4 text-white/75" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
