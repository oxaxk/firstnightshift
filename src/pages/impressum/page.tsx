import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Impressum() {
  return (
    <div
      className="min-h-screen"
      style={{ background: '#000000', color: 'rgba(255,255,255,0.92)' }}
    >
      <Header />
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 md:pt-36 md:pb-28">
        <div
          className="rounded-[28px] md:rounded-[32px] backdrop-blur-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.55)] p-6 sm:p-8 lg:p-10"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          <h1 className="text-3xl md:text-4xl font-semibold mb-8">Impressum</h1>

          <div style={{ color: 'rgba(255,255,255,0.86)' }}>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">Angaben gemäß § 5 TMG</h2>
            <p className="leading-relaxed">
              Diese Website ist eine <strong>Informations- und Weiterleitungsplattform</strong> zur Veranstaltung
              <strong> „First Nightshift – Opening Party“</strong>.
              <br />
              Wir sind <strong>kein Veranstalter</strong> und <strong>nehmen keine Zahlungen entgegen</strong>.
              <br />
              Kontakt: <span className="opacity-80">firstnightshift@outlook.de</span>
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mb-3 mt-10">Ticketzahlungen</h2>
            <p className="leading-relaxed">
              Ticketzahlungen erfolgen über einen externen Zahlungslink (PayPal) und direkt zugunsten des
              <strong> STUCK e.V.</strong>. Wir verarbeiten keine Zahlungsdaten.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mb-3 mt-10">Haftung für Links</h2>
            <p className="leading-relaxed">
              Diese Website enthält Links zu externen Websites. Für deren Inhalte sind ausschließlich die jeweiligen
              Anbieter verantwortlich.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mb-3 mt-10">Datenschutz</h2>
            <p className="leading-relaxed">
              Informationen zur Verarbeitung personenbezogener Daten finden Sie in der{' '}
              <a href="/datenschutz" className="underline underline-offset-4 opacity-90 hover:opacity-100">
                Datenschutzerklärung
              </a>
              .
            </p>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm opacity-70">Stand: Januar 2026</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}