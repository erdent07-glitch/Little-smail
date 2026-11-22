import React, { useState } from 'react';
import { Phone, MapPin, Star, Calendar, MessageCircle, Menu, X, Clock } from 'lucide-react';
import { CLINIC_INFO, Language } from '../data/clinicData';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenBooking: (preselectedService?: string, preselectedDoctor?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#services', label: lang === 'ru' ? 'Услуги' : 'Қызметтер' },
    { href: '#sedation', label: lang === 'ru' ? 'Лечение во сне' : 'Ұйқыда емдеу' },
    { href: '#pricing', label: lang === 'ru' ? 'Стоимость' : 'Құны' },
    { href: '#team', label: lang === 'ru' ? 'Команда' : 'Команда' },
    { href: '#reviews', label: lang === 'ru' ? 'Отзывы 2ГИС' : '2ГИС пікірлер' },
    { href: '#contacts', label: lang === 'ru' ? 'Контакты' : 'Байланыс' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#0F292A]/8">
      <div className="bg-[#0F292A] text-white/90 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={CLINIC_INFO.twoGisUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white hover:text-[#FBBF24] transition-colors font-medium"
            >
              <span className="inline-flex items-center justify-center bg-[#16A34A] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                2ГИС
              </span>
              <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
              <span className="font-mono-num font-semibold">{CLINIC_INFO.rating}</span>
              <span className="text-white/70">
                ({CLINIC_INFO.ratingsCount} {lang === 'ru' ? 'оценка' : 'баға'})
              </span>
            </a>

            <span className="hidden md:inline-block text-white/25">•</span>

            <div className="hidden md:flex items-center gap-1.5 text-white/80">
              <MapPin className="w-3.5 h-3.5 text-[#2DD4BF]" />
              <span>
                {lang === 'ru'
                  ? `Алматы, ${CLINIC_INFO.address} (${CLINIC_INFO.district})`
                  : `Алматы, ${CLINIC_INFO.address}`}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <div className="hidden sm:flex items-center gap-1.5 text-white/80">
              <Clock className="w-3.5 h-3.5 text-[#2DD4BF]" />
              <span>{lang === 'ru' ? CLINIC_INFO.workingHours : CLINIC_INFO.workingHoursKz}</span>
            </div>

            <div className="inline-flex items-center bg-white/10 rounded-full p-0.5 border border-white/15">
              <button
                type="button"
                onClick={() => setLang('ru')}
                className={`px-2 py-0.5 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                  lang === 'ru' ? 'bg-[#0F766E] text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                RU
              </button>
              <button
                type="button"
                onClick={() => setLang('kz')}
                className={`px-2 py-0.5 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                  lang === 'kz' ? 'bg-[#0F766E] text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                ҚАЗ
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0F766E] to-[#115E59] flex items-center justify-center shadow-md shadow-[#0F766E]/20 group-hover:scale-105 transition-transform">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 3C4.5 3 3 5 3 8C3 11.5 4.5 14 5.5 17.5C6.2 20 7.2 21 8.5 21C9.8 21 10.2 18 12 18C13.8 18 14.2 21 15.5 21C16.8 21 17.8 20 18.5 17.5C19.5 14 21 11.5 21 8C21 5 19.5 3 17 3C15.2 3 13.8 4 12 4C10.2 4 8.8 3 7 3Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 10.5C9.8 11.8 11 12.3 12 12.3C13 12.3 14.2 11.8 15 10.5"
                stroke="#FBBF24"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="9.5" cy="7.5" r="1" fill="currentColor" />
              <circle cx="14.5" cy="7.5" r="1" fill="currentColor" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-xl tracking-tight text-[#0F292A]">
                Little Smile
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#FFF9EE] text-[#B45309] border border-[#F59E0B]/30">
                {CLINIC_INFO.category}
              </span>
            </div>
            <p className="text-xs text-[#476364] font-medium">
              {lang === 'ru' ? 'Детский и взрослый приём' : 'Балалар мен ересектер қабылдауы'}
            </p>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#0F292A]/85 hover:text-[#0F766E] transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${CLINIC_INFO.phoneRaw}`}
            className="flex flex-col items-end px-2.5 py-1 rounded-xl hover:bg-[#F0F6F6] transition-colors"
          >
            <span className="font-mono-num font-bold text-sm text-[#0F292A] flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#0F766E]" />
              {CLINIC_INFO.phoneDisplay}
            </span>
            <span className="text-[11px] text-[#0F766E] font-medium">
              {lang === 'ru' ? 'Контакты из 2ГИС' : '2ГИС контактілері'}
            </span>
          </a>

          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#16A34A]/10 text-[#15803D] hover:bg-[#16A34A] hover:text-white font-semibold text-sm transition-all border border-[#16A34A]/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F766E] hover:bg-[#115E59] text-white font-semibold text-sm shadow-md shadow-[#0F766E]/20 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{lang === 'ru' ? 'Записаться' : 'Жазылу'}</span>
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#16A34A]/10 text-[#15803D]"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white border border-[#0F292A]/10 text-[#0F292A]"
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#0F292A]/10 px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-base font-medium text-[#0F292A] hover:bg-[#F0F6F6]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#0F292A]/10 flex flex-col gap-2.5">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F0F6F6] text-[#0F292A] font-mono-num font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-[#0F766E]" />
              {CLINIC_INFO.phoneDisplay}
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-[#0F766E] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              {lang === 'ru' ? 'Оставить заявку' : 'Өтінім қалдыру'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
