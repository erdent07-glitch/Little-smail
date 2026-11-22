import { useState } from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { CLINIC_INFO, Language } from './data/clinicData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { SedationSection } from './components/SedationSection';
import { PricingSection } from './components/PricingSection';
import { TeamSection } from './components/TeamSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationAndBooking } from './components/LocationAndBooking';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export function App() {
  const [lang, setLang] = useState<Language>('ru');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);
  const [modalDoctor, setModalDoctor] = useState<string | undefined>(undefined);

  const handleOpenBooking = (preselectedService?: string, preselectedDoctor?: string) => {
    setModalService(preselectedService);
    setModalDoctor(preselectedDoctor);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#0F292A]">
      <Navbar lang={lang} setLang={setLang} onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        <HeroSection lang={lang} onOpenBooking={handleOpenBooking} />
        <ServicesSection lang={lang} onOpenBooking={handleOpenBooking} />
        <SedationSection lang={lang} onOpenBooking={handleOpenBooking} />
        <PricingSection lang={lang} onOpenBooking={handleOpenBooking} />
        <TeamSection lang={lang} onOpenBooking={handleOpenBooking} />
        <ReviewsSection lang={lang} />
        <LocationAndBooking lang={lang} />
      </main>

      <Footer lang={lang} onOpenBooking={handleOpenBooking} />

      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <button
          type="button"
          onClick={() => handleOpenBooking('Бесплатная консультация')}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#0F292A] hover:bg-[#0F766E] text-white text-xs font-bold shadow-xl border border-white/15 transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-[#FBBF24]" />
          <span>{lang === 'ru' ? 'Оставить заявку' : 'Өтінім қалдыру'}</span>
        </button>

        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold shadow-xl transition-all"
          title="Официальный WhatsApp клиники из карточки 2ГИС"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={modalService}
        initialDoctor={modalDoctor}
      />
    </div>
  );
}

export default App;
