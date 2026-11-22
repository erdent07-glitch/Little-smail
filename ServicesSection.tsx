import React, { useState } from 'react';
import {
  Baby,
  Moon,
  Sparkles,
  Shield,
  Crown,
  Scan,
  Heart,
  Syringe,
  Gift,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  Info,
} from 'lucide-react';
import { SERVICES, ServiceItem, Language } from '../data/clinicData';

interface ServicesSectionProps {
  lang: Language;
  onOpenBooking: (preselectedService?: string, preselectedDoctor?: string) => void;
}

const renderIcon = (iconName: ServiceItem['iconName']) => {
  const props = { className: 'w-6 h-6' };
  switch (iconName) {
    case 'baby':
      return <Baby {...props} />;
    case 'moon':
      return <Moon {...props} />;
    case 'sparkles':
      return <Sparkles {...props} />;
    case 'shield':
      return <Shield {...props} />;
    case 'crown':
      return <Crown {...props} />;
    case 'scan':
      return <Scan {...props} />;
    case 'heart':
      return <Heart {...props} />;
    case 'syringe':
      return <Syringe {...props} />;
    case 'gift':
      return <Gift {...props} />;
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'pediatric' | 'adult' | 'sedation'>('all');

  const filteredServices =
    activeTab === 'all' ? SERVICES : SERVICES.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-16 lg:py-24 bg-white border-y border-[#0F292A]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F6F6] text-[#0F766E] text-xs font-bold uppercase tracking-wider">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Перечень услуг из карточки 2ГИС</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F292A] tracking-tight">
              {lang === 'ru'
                ? 'Что заявлено у Little Smile в 2ГИС'
                : '2ГИС-те Little Smile көрсеткен қызметтер'}
            </h2>
            <p className="text-[#476364] text-base">
              {lang === 'ru'
                ? 'Ниже — официальный список услуг клиники без дополнений. Цены, препараты и протоколы лечения в открытых источниках не опубликованы, поэтому мы их не указываем.'
                : 'Төменде клиниканың ресми қызмет тізімі берілген. Бағалар мен емдеу хаттамалары ашық дереккөздерде жарияланбаған.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#FAF8F5] border border-[#0F292A]/10 self-start">
            {[
              { id: 'all', label: `Все услуги (${SERVICES.length})` },
              { id: 'pediatric', label: 'Детям' },
              { id: 'adult', label: 'Взрослым' },
              { id: 'sedation', label: 'Во сне / диагностика' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0F766E] text-white shadow-sm'
                    : 'text-[#476364] hover:text-[#0F292A] hover:bg-white/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-2 p-3.5 mb-8 rounded-2xl bg-[#FFF9EE] border border-[#F59E0B]/25 text-xs text-[#7C4A03]">
          <Info className="w-4 h-4 shrink-0 mt-0.5 text-[#D97706]" />
          <span>
            «Лечение во сне» — формулировка из карточки 2ГИС. Конкретный препарат, подготовка и состав
            анестезиологической бригады на сайте не утверждаются: уточняйте их напрямую у клиники.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service, index) => {
            const isPediatric = service.category === 'pediatric';
            return (
              <div
                key={service.id}
                className="group rounded-3xl p-6 flex flex-col justify-between bg-[#FAF8F5]/70 hover:bg-white border border-[#0F292A]/10 hover:border-[#0F766E]/35 shadow-clinical transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                        isPediatric
                          ? 'bg-[#FFF9EE] text-[#D97706] border border-[#F59E0B]/30'
                          : 'bg-[#F0F6F6] text-[#0F766E] border border-[#0F766E]/20'
                      }`}
                    >
                      {renderIcon(service.iconName)}
                    </div>
                    <span className="font-mono-num text-[11px] font-bold text-[#476364] bg-white border border-[#0F292A]/10 px-2 py-1 rounded-lg">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#0F292A] leading-snug mb-2">
                    {lang === 'ru' ? service.title : service.titleKz}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0F766E] mb-3">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Заявлено в 2ГИС</span>
                  </div>

                  <p className="text-sm text-[#476364] leading-relaxed">{service.description}</p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#0F292A]/10">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(service.officialName)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-[#0F766E] text-[#0F766E] hover:text-white border border-[#0F766E]/25 text-xs font-bold transition-all cursor-pointer"
                  >
                    <span>{lang === 'ru' ? 'Уточнить условия и записаться' : 'Шарттарын нақтылау'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
