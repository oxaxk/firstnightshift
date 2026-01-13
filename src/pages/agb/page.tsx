import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function AGB() {
  return (
    <div
      className="min-h-screen"
      style={{ background: '#000000', color: 'rgba(255,255,255,0.92)' }}
    >
      <Header />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20 md:pt-36 md:pb-28">
        <div
          className="rounded-[28px] md:rounded-[32px] backdrop-blur-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.55)] p-6 sm:p-8 lg:p-10"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
          <p className="leading-relaxed opacity-90">
            Für die Nutzung dieser Website gelten keine Allgemeinen Geschäftsbedingungen.
            Diese Website dient ausschließlich der Information über die Veranstaltung
            <strong> „First Nightshift – Opening Party“</strong>.
          </p>
          <p className="leading-relaxed opacity-90 mt-4">
            Über diese Website werden keine Tickets verkauft und keine Zahlungen abgewickelt.
            Der Ticketkauf erfolgt – sofern angeboten – ausschließlich über externe Anbieter
            bzw. direkt über den Veranstalter <strong>STUCK e.V.</strong>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
