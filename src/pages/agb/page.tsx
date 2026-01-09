import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function AGB() {
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
          <h1 className="text-3xl md:text-4xl font-semibold mb-8">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>

          <div style={{ color: 'rgba(255,255,255,0.86)' }}>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              1. Geltungsbereich
            </h2>
            <p className="leading-relaxed">
              Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der Website
              <strong> First Nightshift</strong> als Informations- und Weiterleitungsplattform
              zur Veranstaltung <strong>„First Nightshift – Opening Party“</strong>.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mb-3 mt-10">
              2. Rolle von First Nightshift
            </h2>
            <p className="leading-relaxed">
              First Nightshift tritt <strong>nicht als Veranstalter</strong> der Veranstaltung auf.
              Veranstalter im rechtlichen Sinne ist <strong>STUCK e.V.</strong>.
            </p>
            <p className="leading-relaxed mt-3">
              Diese Website dient ausschließlich der <strong>Information</strong> sowie der
              <strong> Weiterleitung</strong> zum externen Ticketkauf.
              Über die Website selbst werden keine Tickets verkauft und keine Zahlungen abgewickelt.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mb-3 mt-10">
              3. Ticketkauf
            </h2>
            <p className="leading-relaxed">
              Der Ticketkauf erfolgt ausschließlich über einen externen Zahlungslink des
              Zahlungsdienstleisters <strong>Stripe</strong>.
            </p>
            <p className="leading-relaxed mt-3">
              Mit dem Klick auf den Ticket-Button werden Nutzer auf eine externe Website
              weitergeleitet. Der Kaufvertrag kommt zwischen dem Käufer und dem Veranstalter
              bzw. über den Zahlungsdienstleister zustande.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mb-3 mt-10">
              4. Zahlungsabwicklung
            </h2>
            <p className="leading-relaxed">
              Die Zahlungsabwicklung sowie die Verarbeitung personenbezogener Daten (z. B. Name,
              E-Mail-Adresse) erfolgen eigenverantwortlich durch Stripe.
              First Nightshift hat keinen Zugriff auf Zahlungs- oder Transaktionsdaten.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mb-3 mt-10">
              5. Rückerstattung & Veranstaltungsänderungen
            </h2>
            <p className="leading-relaxed">
              Regelungen zu Rückerstattungen, Absagen oder Änderungen der Veranstaltung
              obliegen dem Veranstalter STUCK e.V.
            </p>
            <p className="leading-relaxed mt-3">
              First Nightshift übernimmt keine Haftung für Ausfälle, Terminänderungen
              oder sonstige Abweichungen der Veranstaltung.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mb-3 mt-10">
              6. Haftung
            </h2>
            <p className="leading-relaxed">
              First Nightshift haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem
              Verhalten beruhen. Für Inhalte externer Links sowie die Durchführung der Veranstaltung
              wird keine Haftung übernommen.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mb-3 mt-10">
              7. Schlussbestimmungen
            </h2>
            <p className="leading-relaxed">
              Es gilt das Recht der Bundesrepublik Deutschland.
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden,
              bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
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