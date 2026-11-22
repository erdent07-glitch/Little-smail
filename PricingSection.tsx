import React from 'react';
import {
  CircleDollarSign,
  CreditCard,
  Gift,
  HelpCircle,
  Phone,
  MessageCircle,
  Info,
  ShieldCheck,
} from 'lucide-react';
import {
  CLINIC_INFO,
  PRICING_QUESTIONS,
  PAYMENT_NOTE,
  Language,
} from '../data/clinicData';

interface PricingSectionProps {
  lang: Language;
  onOpenBooking: (preselectedService?: string, preselectedDoctor?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ lang, onOpenBooking }) => {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white border-y border-[#0F292A]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F6F6] text-[#0F766E] text-xs font-bold uppercase tracking-wider">
            <CircleDollarSign className="w-3.5 h-3.5" />
            <span>{lang === 'ru' ? 'Стоимость и оплата' : 'Құны және төлем'}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F292A] tracking-tight">
            {lang === 'ru'
              ? 'Мы не публикуем цены, которых нет в открытых источниках'
              : 'Ашық дереккөздерде жоқ бағаларды жарияламаймыз'}
          </h2>
          <p className="text-[#476364] text-base">
            {lang === 'ru'
              ? 'В карточке Little Smile в 2ГИС стоимость услуг не указана. Поэтому на сайте нет прайса и «калькулятора»: любые конкретные суммы были бы догадкой, а не фактом. Актуальную смету можно запросить у клиники напрямую.'
              : '2ГИС карточкасында қызмет құны көрсетілмеген. Сондықтан сайтта баға мен «калькулятор» жоқ. Нақты сметаны клиникадан сұраңыз.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: what is known + payments */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl bg-[#FAF8F5] border border-[#0F292A]/10 p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#16A34A]/12 text-[#15803D] flex items-center justify-center">
                  <Gift className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-bold text-[#0F766E]">
                    Указано в карточке 2ГИС
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#0F292A]">
                    Бесплатная консультация
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[#476364] leading-relaxed mb-5">
                В перечне услуг клиники есть бесплатная консультация. Точный объём приёма —
                осмотр, консультация врача, необходимость снимка — уточняйте при записи: в открытых
                данных состав консультации не расписан.
              </p>
              <button
                type="button"
                onClick={() => onOpenBooking('Бесплатная консультация')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0F766E] hover:bg-[#115E59] text-white font-bold text-sm transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                {lang === 'ru' ? 'Записаться на консультацию' : 'Консультацияға жазылу'}
              </button>
            </div>

            <div className="rounded-3xl bg-white border border-[#0F292A]/10 p-6 sm:p-7 shadow-clinical">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F0F6F6] text-[#0F766E] flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#0F292A]">
                  Способы оплаты (из 2ГИС)
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {CLINIC_INFO.paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="px-3 py-1.5 rounded-xl bg-[#FAF8F5] border border-[#0F292A]/10 text-xs font-semibold text-[#0F292A]"
                  >
                    {method}
                  </span>
                ))}
              </div>
              <div className="flex items-start gap-2 p-3.5 rounded-xl bg-[#FFF9EE] border border-[#F59E0B]/25 text-xs text-[#7C4A03]">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-[#D97706]" />
                <span>{PAYMENT_NOTE}</span>
              </div>
            </div>
          </div>

          {/* Right: questions to ask */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0F292A] text-white p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#FBBF24]" />
                <h3 className="font-display font-bold text-xl">Что уточнить по стоимости</h3>
              </div>
              <p className="text-xs text-white/70 mb-5">
                Сохраните этот список и задайте вопросы администратору до начала лечения.
              </p>
              <ul className="space-y-2.5">
                {PRICING_QUESTIONS.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-white/90">
                    <span className="font-mono-num text-[10px] font-bold text-[#0F292A] bg-[#FBBF24] w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 space-y-2.5">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Запросить смету в WhatsApp
              </a>
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-mono-num font-bold text-xs transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FBBF24]" />
                {CLINIC_INFO.phoneDisplay}
              </a>
              <div className="flex items-start gap-2 text-[11px] text-white/60 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#2DD4BF]" />
                <span>
                  На сайте нет цен, рассрочек и «гарантий»: такие условия подтверждает только клиника.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
