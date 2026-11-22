import React from 'react';
import { Phone, MapPin, Star, Clock, ExternalLink, Info } from 'lucide-react';
import { CLINIC_INFO, Language } from '../data/clinicData';

interface FooterProps {
  lang: Language;
  onOpenBooking: (preselectedService?: string, preselectedDoctor?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenBooking }) => {
  return (
    <footer className="bg-[#0F292A] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0F766E] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
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
                </svg>
              </div>
              <div>
                <div className="font-display font-extrabold text-xl">Little Smile</div>
                <div className="text-xs text-white/70">Стоматология • Алматы</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              {lang === 'ru'
                ? 'Карточка клиники в 2ГИС: детский и взрослый приём, лечение во сне и седация, хирургия, ортопедия и имплантация. Информация на сайте собрана из открытых источников.'
                : '2ГИС-тегі клиника карточкасы: балалар мен ересектер қабылдауы, ұйқыда емдеу, хирургия, ортопедия және имплантация.'}
            </p>

            <a
              href={CLINIC_INFO.twoGisUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 text-xs font-semibold transition-colors"
            >
              <span className="px-1.5 py-0.5 rounded bg-[#16A34A] text-white text-[10px] font-bold">
                2ГИС
              </span>
              <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
              <span className="font-mono-num font-bold">{CLINIC_INFO.rating}</span>
              <span className="text-white/75">• {CLINIC_INFO.ratingsCount} оценок</span>
              <ExternalLink className="w-3 h-3 text-white/60" />
            </a>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#2DD4BF]">
              Услуги из 2ГИС
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80">
              {[
                'Детский стоматолог-терапевт',
                'Детский стоматолог-хирург',
                'Лечение во сне для детей',
                'Лечение во сне для взрослых',
                'Взрослый стоматолог-хирург',
                'Взрослый стоматолог-ортопед',
                'Взрослый пародонтолог',
                'Имплантация',
                'Прицельный снимок зуба',
                'Цифровая стоматология',
                'Бесплатная консультация',
              ].map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() => onOpenBooking(service)}
                    className="hover:text-white text-left cursor-pointer"
                  >
                    • {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#2DD4BF]">
              Контакты
            </h4>
            <div className="space-y-2 text-xs text-white/85">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                <span>
                  <strong>{CLINIC_INFO.addressFull}</strong>
                  <br />
                  {CLINIC_INFO.addressComment} • {CLINIC_INFO.district}
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Clock className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <span>{CLINIC_INFO.workingHours}</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#FBBF24] shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="font-mono-num font-bold text-base text-white hover:text-[#FBBF24]"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pt-1 text-white/70 hover:text-white"
              >
                Instagram: {CLINIC_INFO.instagramHandle}
              </a>
            </div>

            <div className="mt-3 flex items-start gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-white/65">
              <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#2DD4BF]" />
              <span>{CLINIC_INFO.sourceNote}</span>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/55">
          <div>
            © {new Date().getFullYear()} Little Smile, Алматы. Информационный сайт на основе открытых
            данных 2ГИС.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={CLINIC_INFO.twoGisReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Отзывы в 2ГИС
            </a>
            <span>•</span>
            <a
              href={CLINIC_INFO.twoGisUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Карточка организации
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
