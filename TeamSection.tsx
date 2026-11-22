import React from 'react';
import { Users, Calendar, Quote, Info, MessageCircle } from 'lucide-react';
import { TEAM, CLINIC_INFO, Language } from '../data/clinicData';

interface TeamSectionProps {
  lang: Language;
  onOpenBooking: (preselectedService?: string, preselectedDoctor?: string) => void;
}

const groupLabels = {
  doctors: 'Врачи и анестезиолог',
  assistants: 'Ассистенты',
  admin: 'Администратор',
};

export const TeamSection: React.FC<TeamSectionProps> = ({ lang, onOpenBooking }) => {
  return (
    <section id="team" className="py-16 lg:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F6F6] text-[#0F766E] text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>{lang === 'ru' ? 'Имена из отзывов пациентов' : 'Пациент пікірлеріндегі есімдер'}</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F292A] tracking-tight">
              {lang === 'ru'
                ? 'Команда, которую благодарят в 2ГИС'
                : '2ГИС-те алғыс алған команда'}
            </h2>
            <p className="text-[#476364] text-base">
              {lang === 'ru'
                ? 'Мы не придумывали биографии, стаж и специализации. Ниже — только имена и роли, которые упоминаются в опубликованных отзывах пациентов.'
                : 'Біз өмірбаян, өтіл мен мамандықтарды ойдан құрастырмадық. Төменде пациент пікірлерінде аталған есімдер мен рөлдер ғана берілген.'}
            </p>
          </div>

          <div className="inline-flex items-start gap-2 p-3.5 rounded-2xl bg-white border border-[#0F292A]/10 max-w-sm self-start">
            <Info className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
            <span className="text-xs text-[#476364]">
              Фотографии специалистов в открытых источниках не опубликованы, поэтому на сайте их нет.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TEAM.map((member) => (
            <div
              key={member.id}
              className="rounded-3xl bg-white border border-[#0F292A]/10 p-5 shadow-clinical flex flex-col justify-between hover:border-[#0F766E]/35 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F766E] text-white font-display font-extrabold text-base flex items-center justify-center shrink-0">
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[#0F292A] leading-tight">
                        {member.name}
                      </h3>
                      <div className="text-xs font-semibold text-[#0F766E] mt-0.5">{member.role}</div>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-md bg-[#FAF8F5] border border-[#0F292A]/10 text-[10px] font-bold text-[#476364] shrink-0">
                    {groupLabels[member.group]}
                  </span>
                </div>

                <p className="text-xs text-[#476364] leading-relaxed mb-3">{member.note}</p>

                <div className="flex items-start gap-2 p-2.5 rounded-xl bg-[#FAF8F5] border border-[#0F292A]/6">
                  <Quote className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
                  <span className="text-[11px] text-[#476364] italic">{member.roleSource}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking(undefined, member.name)}
                className="mt-4 w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#F0F6F6] hover:bg-[#0F766E] text-[#0F766E] hover:text-white text-xs font-bold transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                {lang === 'ru' ? 'Записаться на приём' : 'Қабылдауға жазылу'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-white border border-[#0F292A]/10 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#476364]">
            Если вы пациент клиники и хотите дополнить информацию о специалистах — напишите администратору.
          </p>
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#16A34A]/10 hover:bg-[#16A34A] text-[#15803D] hover:text-white text-xs font-bold transition-colors shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
