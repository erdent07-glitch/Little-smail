import React from 'react';
import {
  Moon,
  Baby,
  User,
  MessageCircle,
  Calendar,
  HelpCircle,
  Quote,
  Info,
  ExternalLink,
} from 'lucide-react';
import { REVIEWS_2GIS, SEDATION_QUESTIONS, CLINIC_INFO, Language } from '../data/clinicData';

interface SedationSectionProps {
  lang: Language;
  onOpenBooking: (preselectedService?: string, preselectedDoctor?: string) => void;
}

const sedationReviews = REVIEWS_2GIS.filter((r) => r.category === 'sedation').slice(0, 3);

export const SedationSection: React.FC<SedationSectionProps> = ({ lang, onOpenBooking }) => {
  return (
    <section id="sedation" className="py-16 lg:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0F292A] via-[#123536] to-[#0F766E] text-white p-6 sm:p-10 mb-10 relative overflow-hidden">
          <div
            className="pointer-events-none absolute -right-16 -bottom-24 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)' }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#FBBF24] text-xs font-bold">
                <Moon className="w-4 h-4" />
                <span>{lang === 'ru' ? 'Услуга заявлена в карточке 2ГИС' : '2ГИС карточкасында көрсетілген'}</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl leading-tight">
                {lang === 'ru'
                  ? 'Лечение во сне и седация для детей и взрослых'
                  : 'Балалар мен ересектерге ұйқыда емдеу және седация'}
              </h2>

              <p className="text-white/80 text-base leading-relaxed">
                {lang === 'ru'
                  ? 'В перечне услуг Little Smile в 2ГИС указаны «Лечение во сне / седация для детей» и «Лечение во сне / седация для взрослых». В отзывах родители упоминают лечение под седацией и благодарят анестезиолога Нурбека Калдарбековича. Конкретный препарат, подготовку и противопоказания на сайте мы не описываем — это медицинские детали, которые клиника должна подтвердить сама.'
                  : '2ГИС тізімінде «Балаларға ұйқыда емдеу / седация» және «Ересектерге ұйқыда емдеу / седация» қызметтері көрсетілген. Нақты препарат пен дайындық туралы клиниканың өзінен нақтылаңыз.'}
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => onOpenBooking('Лечение во сне / седация для детей')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-[#0F292A] font-extrabold text-sm transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{lang === 'ru' ? 'Записаться на консультацию' : 'Консультацияға жазылу'}</span>
                </button>
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#4ADE80]" />
                  <span>{lang === 'ru' ? 'Задать вопрос клинике' : 'Клиникаға сұрақ қою'}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/5">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full aspect-[4/3]"
                  role="img"
                  aria-label="Иллюстрация: спокойный персонаж-зубик спит под луной"
                >
                  <defs>
                    <linearGradient id="nightBg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0B2425" />
                      <stop offset="100%" stopColor="#115E59" />
                    </linearGradient>
                    <linearGradient id="dreamTooth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#D9EDE8" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="300" fill="url(#nightBg)" />
                  <circle cx="70" cy="54" r="2.5" fill="#FDE68A" />
                  <circle cx="120" cy="34" r="2" fill="#FFFFFF" opacity="0.7" />
                  <circle cx="180" cy="62" r="2.5" fill="#FDE68A" opacity="0.8" />
                  <circle cx="300" cy="40" r="2" fill="#FFFFFF" opacity="0.6" />
                  <circle cx="340" cy="96" r="2.5" fill="#FDE68A" />
                  <circle cx="44" cy="118" r="2" fill="#FFFFFF" opacity="0.5" />
                  <path d="M300 40 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 z" fill="#FBBF24" opacity="0.85" />
                  <path
                    d="M320 70 A34 34 0 1 0 320 138 A26 26 0 1 1 320 70 Z"
                    fill="#FCE3A6"
                    opacity="0.95"
                  />
                  <rect x="86" y="196" width="228" height="46" rx="23" fill="#F6E3BD" opacity="0.95" />
                  <rect x="106" y="208" width="188" height="24" rx="12" fill="#E8CE9C" opacity="0.6" />
                  <g transform="translate(128 92)">
                    <path
                      d="M55 8 C28 8 12 26 12 56 C12 88 26 112 35 142 C41 164 50 172 62 172 C74 172 78 146 95 146 C112 146 116 172 128 172 C140 172 149 164 155 142 C164 112 178 88 178 56 C178 26 162 8 135 8 C116 8 106 18 95 18 C84 18 74 8 55 8 Z"
                      fill="url(#dreamTooth)"
                      stroke="#7DD3C7"
                      strokeWidth="6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M58 84 Q68 92 78 84"
                      stroke="#0F292A"
                      strokeWidth="5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M112 84 Q122 92 132 84"
                      stroke="#0F292A"
                      strokeWidth="5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M84 108 Q95 116 106 108"
                      stroke="#0F766E"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </g>
                  <text x="316" y="118" fill="#FCE3A6" fontSize="26" fontFamily="serif" opacity="0.9">
                    z
                  </text>
                  <text x="338" y="96" fill="#FCE3A6" fontSize="18" fontFamily="serif" opacity="0.7">
                    z
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Two service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {[
            {
              icon: <Baby className="w-6 h-6" />,
              title: 'Лечение во сне / седация для детей',
              description:
                'Услуга заявлена отдельной строкой в карточке клиники. В отзывах есть истории лечения детей под седацией, в том числе с благодарностью анестезиологу.',
            },
            {
              icon: <User className="w-6 h-6" />,
              title: 'Лечение во сне / седация для взрослых',
              description:
                'Также указана в перечне услуг. Подробности проведения, подготовки и ограничений в открытых данных 2ГИС отсутствуют.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white border border-[#0F292A]/10 p-6 shadow-clinical flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F0F6F6] text-[#0F766E] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-[#0F292A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#476364] leading-relaxed">{item.description}</p>
              </div>
              <div className="mt-5 pt-4 border-t border-[#0F292A]/8 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0F766E]">
                  <Info className="w-3.5 h-3.5" />
                  Источник: карточка 2ГИС
                </span>
                <a
                  href={CLINIC_INFO.twoGisUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0F292A] hover:text-[#0F766E]"
                >
                  Открыть
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Reviews */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <Quote className="w-5 h-5 text-[#0F766E]" />
              <h3 className="font-display font-extrabold text-xl text-[#0F292A]">
                Что пишут пациенты о лечении под седацией
              </h3>
            </div>
            <p className="text-xs text-[#476364]">
              Дословные фрагменты отзывов из карточки клиники в 2ГИС. Это мнения пациентов, а не
              заявления клиники.
            </p>
            <div className="space-y-3">
              {sedationReviews.map((review) => (
                <div
                  key={review.id}
                  className="rounded-2xl bg-white border border-[#0F292A]/10 p-5 shadow-2xs"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#0F766E] text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {review.initials}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#0F292A]">{review.author}</div>
                        <div className="text-[11px] text-[#476364]">
                          {review.authorReviewsCount || 'Отзыв в 2ГИС'}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#B45309] bg-[#FFF9EE] border border-[#F59E0B]/25 px-2 py-0.5 rounded-md">
                      ★ 5
                    </span>
                  </div>
                  <p className="text-sm text-[#0F292A]/90 leading-relaxed">«{review.text}»</p>
                </div>
              ))}
            </div>
            <a
              href={CLINIC_INFO.twoGisReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F766E] hover:underline"
            >
              Все отзывы, включая критические, — в 2ГИС
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Questions checklist */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-[#0F292A]/10 p-6 shadow-clinical">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-9 h-9 rounded-xl bg-[#FFF9EE] text-[#D97706] flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#0F292A]">
                Что уточнить у клиники
              </h3>
            </div>
            <p className="text-xs text-[#476364] mb-4">
              Мы не публикуем медицинские протоколы за клинику. Эти вопросы стоит задать
              администратору и анестезиологу до процедуры.
            </p>
            <ul className="space-y-2.5">
              {SEDATION_QUESTIONS.map((q, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#0F292A]/90">
                  <span className="font-mono-num text-[10px] font-bold text-[#0F766E] bg-[#F0F6F6] w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Спросить клинику в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
