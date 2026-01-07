import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Datenschutz() {
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
          <h1 className="text-3xl md:text-4xl font-semibold mb-8">Datenschutzerklärung</h1>

          <div style={{ color: 'rgba(255,255,255,0.86)' }}>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">1. Kurzüberblick</h2>
            <p className="leading-relaxed">
              Diese Website ist eine <strong>Informations- und Weiterleitungsplattform</strong> zur Veranstaltung
              <strong> „First Nightshift – Opening Party“</strong>. Wir sind <strong>kein Veranstalter</strong> und
              <strong> nehmen keine Zahlungen entgegen</strong>. Es gibt <strong>kein Tracking</strong> und
              <strong> keine Analyse</strong>.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mb-3 mt-10">2. Hosting (Vercel) & Repository (GitHub)</h2>
            <p className="leading-relaxed">
              Die Website wird über <strong>Vercel</strong> bereitgestellt. Der Quellcode wird in einem Repository bei
              <strong> GitHub</strong> verwaltet. Beim Aufruf der Website verarbeitet der Hosting-Provider technisch
              notwendige Zugriffsdaten (z. B. IP-Adresse, Datum/Uhrzeit, aufgerufene Seite, User-Agent/Browser,
              Referrer). Diese Daten sind erforderlich, um die Website auszuliefern, Sicherheit zu gewährleisten und
              technische Fehler zu erkennen.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mb-3 mt-10">3. Cookies & Tracking</h2>
            <p className="leading-relaxed">
              Diese Website verwendet <strong>keine</strong> Analyse- oder Tracking-Tools und setzt <strong>keine</strong>
              Marketing-Cookies ein.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mb-3 mt-10">4. Ticketkauf über PayPal (externer Link)</h2>
            <p className="leading-relaxed">
              Beim Klick auf „Get your ticket“ werden Sie zu einem externen Zahlungslink von <strong>PayPal</strong>
              weitergeleitet. Die Zahlungsabwicklung erfolgt ausschließlich über PayPal und direkt zugunsten des
              <strong> STUCK e.V.</strong>.
            </p>
            <p className="leading-relaxed mt-3">
              Wir erhalten <strong>keine Zahlungsdaten</strong> und <strong>keinen Zahlungseingang</strong>. Welche Daten
              PayPal verarbeitet, entnehmen Sie bitte der Datenschutzerklärung von PayPal.
              <br />
              <span className="opacity-80">https://www.paypal.com/privacy</span>
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mb-3 mt-10">5. Empfänger / Drittland</h2>
            <p className="leading-relaxed">
              Im Rahmen der Zahlungsabwicklung über PayPal kann eine Verarbeitung personenbezogener Daten auch in
              Staaten außerhalb der EU/des EWR erfolgen. Details finden Sie in den Datenschutzinformationen von
              PayPal.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mb-3 mt-10">6. Kontakt</h2>
            <p className="leading-relaxed">
              Datenschutzanfragen: <span className="opacity-80">firstnightshift@outlook.de</span>
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mb-3 mt-10">7. Ihre Rechte</h2>
            <p className="leading-relaxed">
              Sie haben nach der DSGVO insbesondere das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung sowie Widerspruch. Außerdem haben Sie das Recht auf Beschwerde bei
              einer Datenschutzaufsichtsbehörde.
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