import React from 'react';
import {
  Star,
  MapPin,
  Phone,
  Clock,
  Calendar,
  MessageCircle,
  ExternalLink,
  Baby,
  Stethoscope,
  Moon,
  Info,
} from 'lucide-react';
import { CLINIC_INFO, Language } from '../data/clinicData';

interface HeroSectionProps {
  lang: Language;
  onOpenBooking: (preselectedService?: string, preselectedDoctor?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang, onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-14 lg:pb-20">
      <div
        className="pointer-events-none absolute -top-32 left-1/4 w-[560px] h-[560px] rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(15, 118, 110, 0.10) 0%, rgba(250, 248, 245, 0) 70%)' }}
      />
      <div
        className="pointer-events-none absolute top-20 right-0 w-[420px] h-[420px] rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, rgba(250, 248, 245, 0) 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex flex-wrap items-center gap-2.5 p-1.5 pr-4 rounded-full bg-white border border-[#0F292A]/10 shadow-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9EE] text-[#B45309] font-semibold text-xs border border-[#F59E0B]/30">
                <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                <span className="font-mono-num font-bold">{CLINIC_INFO.rating}</span>
                <span>в 2ГИС</span>
              </span>
              <span className="text-xs font-medium text-[#476364]">
                {CLINIC_INFO.ratingsCount} {lang === 'ru' ? 'оценка в карточке Алматы' : 'баға Алматы карточкасында'}
              </span>
              <a
                href={CLINIC_INFO.twoGisUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 text-xs font-semibold text-[#0F766E] hover:underline"
              >
                <span>2ГИС</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
                {lang === 'ru' ? 'Детская и взрослая стоматология' : 'Балалар мен ересектер стоматологиясы'}
              </div>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] tracking-tight text-[#0F292A]">
                Little Smile <br className="hidden sm:block" />
                <span className="text-[#0F766E]">
                  {lang === 'ru' ? 'в Алматы' : 'Алматыда'}
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#476364] leading-relaxed max-w-2xl">
              {lang === 'ru'
                ? 'В карточке клиники в 2ГИС заявлено 11 услуг: приём детских и взрослых стоматологов, лечение во сне и седация для детей и взрослых, имплантация, ортопедия и бесплатная консультация. На этом сайте собраны только открытые данные о клинике, её услугах и отзывах пациентов.'
                : '2ГИС карточкасында 11 қызмет көрсетілген: балалар мен ересектер стоматологтары, балалар мен ересектерге ұйқыда емдеу, имплантация, ортопедия және тегін консультация. Бұл сайтта клиника туралы тек ашық деректер жиналған.'}
            </p>

            {/* Verified data tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#0F292A]/8 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-[#F0F6F6] text-[#0F766E] flex items-center justify-center shrink-0">
                  <Baby className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0F292A]">Детский приём</div>
                  <div className="text-xs text-[#476364] mt-0.5">
                    Терапевт, хирург и седация для детей
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#0F292A]/8 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-[#FFF9EE] text-[#D97706] flex items-center justify-center shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0F292A]">Взрослый приём</div>
                  <div className="text-xs text-[#476364] mt-0.5">
                    Хирург, ортопед, пародонтолог, имплантация
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#0F292A]/8 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-[#F0F6F6] text-[#0F766E] flex items-center justify-center shrink-0">
                  <Moon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0F292A]">Лечение во сне</div>
                  <div className="text-xs text-[#476364] mt-0.5">
                    Седация заявлена для детей и взрослых
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#0F292A]/8 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-[#FFF9EE] text-[#D97706] flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0F292A]">Бесплатная консультация</div>
                  <div className="text-xs text-[#476364] mt-0.5">
                    Указана в перечне услуг 2ГИС
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => onOpenBooking('Бесплатная консультация')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#0F766E] hover:bg-[#115E59] text-white font-bold text-base shadow-lg shadow-[#0F766E]/25 transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>{lang === 'ru' ? 'Записаться на консультацию' : 'Консультацияға жазылу'}</span>
              </button>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white hover:bg-[#F0F6F6] text-[#0F292A] font-semibold text-base border border-[#0F292A]/15 shadow-xs transition-all"
              >
                <MessageCircle className="w-5 h-5 text-[#16A34A]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-4 rounded-2xl text-[#0F292A] hover:bg-white font-mono-num font-bold text-sm border border-transparent hover:border-[#0F292A]/10 transition-all"
              >
                <Phone className="w-4 h-4 text-[#0F766E]" />
                <span className="hidden xl:inline">{CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>

            <div className="flex items-start gap-2 text-xs text-[#476364] pt-1">
              <Info className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
              <span>{CLINIC_INFO.sourceNote}</span>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-3xl bg-white p-3 border border-[#0F292A]/10 shadow-clinical-lg">
                <div className="relative rounded-2xl overflow-hidden bg-[#EAF2F0] aspect-[4/3]">
                  <svg
                    viewBox="0 0 400 300"
                    className="absolute inset-0 w-full h-full"
                    role="img"
                    aria-label="Иллюстрация: дружелюбный персонаж-зубик"
                  >
                    <defs>
                      <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#F6FBF9" />
                        <stop offset="100%" stopColor="#D6ECE6" />
                      </linearGradient>
                      <linearGradient id="toothFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#E7F4F0" />
                      </linearGradient>
                    </defs>
                    <rect width="400" height="300" fill="url(#heroBg)" />
                    <circle cx="64" cy="58" r="46" fill="#CBEAE1" opacity="0.55" />
                    <circle cx="344" cy="228" r="74" fill="#E6F3EE" />
                    <circle cx="326" cy="48" r="16" fill="#FCE3A6" />
                    <circle cx="352" cy="84" r="8" fill="#F59E0B" opacity="0.5" />
                    <path
                      d="M24 250 Q110 205 196 240 T380 232"
                      stroke="#B5D8CF"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="7 9"
                    />
                    <g transform="translate(108 48)">
                      <path
                        d="M55 8 C28 8 12 26 12 56 C12 88 26 112 35 142 C41 164 50 172 62 172 C74 172 78 146 95 146 C112 146 116 172 128 172 C140 172 149 164 155 142 C164 112 178 88 178 56 C178 26 162 8 135 8 C116 8 106 18 95 18 C84 18 74 8 55 8 Z"
                        fill="url(#toothFill)"
                        stroke="#0F766E"
                        strokeWidth="6"
                        strokeLinejoin="round"
                      />
                      <ellipse cx="70" cy="82" rx="6" ry="8" fill="#0F292A" />
                      <ellipse cx="120" cy="82" rx="6" ry="8" fill="#0F292A" />
                      <circle cx="52" cy="102" r="7" fill="#FBBF24" opacity="0.45" />
                      <circle cx="138" cy="102" r="7" fill="#FBBF24" opacity="0.45" />
                      <path
                        d="M76 104 Q95 124 114 104"
                        stroke="#0F766E"
                        strokeWidth="6"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </g>
                    <path
                      d="M78 88 l5 12 l12 5 l-12 5 l-5 12 l-5 -12 l-12 -5 l12 -5 z"
                      fill="#F59E0B"
                      opacity="0.9"
                    />
                    <path
                      d="M320 128 l4 9 l9 4 l-9 4 l-4 9 l-4 -9 l-9 -4 l9 -4 z"
                      fill="#0F766E"
                      opacity="0.35"
                    />
                  </svg>

                  <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-xs shadow-sm">
                    <span className="w-6 h-6 rounded-md bg-[#16A34A] text-white text-[9px] font-extrabold flex items-center justify-center">
                      2ГИС
                    </span>
                    <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                    <span className="font-mono-num text-sm font-extrabold text-[#0F292A]">
                      {CLINIC_INFO.rating}
                    </span>
                    <span className="text-[11px] text-[#476364]">
                      / {CLINIC_INFO.ratingsCount}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-[#0F292A]/88 backdrop-blur-xs text-white">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold">
                      <span className="w-2 h-2 rounded-full bg-[#4ADE80]" />
                      {CLINIC_INFO.workingHours}
                    </span>
                    <span className="text-[11px] text-white/70">Алматы</span>
                  </div>
                </div>
              </div>

              {/* Data card */}
              <div className="mt-4 rounded-3xl bg-white border border-[#0F292A]/10 shadow-clinical p-5 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-bold text-[#0F766E]">
                      Адрес в карточке 2ГИС
                    </div>
                    <div className="font-display font-bold text-lg text-[#0F292A] mt-0.5">
                      {CLINIC_INFO.address}
                    </div>
                    <div className="text-xs text-[#476364]">
                      {CLINIC_INFO.district} • {CLINIC_INFO.addressComment}
                    </div>
                  </div>
                  <a
                    href={CLINIC_INFO.twoGisUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F0F6F6] hover:bg-[#0F766E] text-[#0F766E] hover:text-white text-[11px] font-bold transition-colors shrink-0"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    Маршрут
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#0F292A]/8">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] text-[#476364]">График</div>
                      <div className="text-xs font-bold text-[#0F292A]">10:00 – 20:00</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] text-[#476364]">Телефон</div>
                      <a
                        href={`tel:${CLINIC_INFO.phoneRaw}`}
                        className="text-xs font-bold font-mono-num text-[#0F292A] hover:text-[#0F766E]"
                      >
                        {CLINIC_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
