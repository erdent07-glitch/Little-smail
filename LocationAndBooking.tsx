import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Copy,
  Check,
  CreditCard,
  Train,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Info,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { CLINIC_INFO, TEAM, SERVICES, Language } from '../data/clinicData';

interface LocationAndBookingProps {
  lang: Language;
}

const mapEmbedUrl =
  'https://www.openstreetmap.org/export/embed.html?bbox=76.8450%2C43.2220%2C76.8655%2C43.2380&layer=mapnik&marker=43.230069%2C76.855165';
const mapLinkUrl = 'https://www.openstreetmap.org/?mlat=43.230069&mlon=76.855165#map=17/43.23007/76.85517';

export const LocationAndBooking: React.FC<LocationAndBookingProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [patientType, setPatientType] = useState<'child' | 'adult'>('child');
  const [service, setService] = useState('Бесплатная консультация');
  const [doctor, setDoctor] = useState('Любой свободный специалист');
  const [preferredTime, setPreferredTime] = useState('Ближайшее удобное время');
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CLINIC_INFO.addressFull);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  const whatsappBookingUrl = `https://wa.me/77719152094?text=${encodeURIComponent(
    `Здравствуйте! Заявка с сайта Little Smile:\n• Имя: ${name || '-'}\n• Телефон: ${
      phone || '-'
    }\n• Пациент: ${patientType === 'child' ? 'Ребёнок' : 'Взрослый'}\n• Услуга: ${service}\n• Специалист: ${doctor}\n• Время: ${preferredTime}`
  )}`;

  return (
    <section id="contacts" className="py-16 lg:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Location */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F6F6] text-[#0F766E] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Адрес из карточки 2ГИС</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F292A] tracking-tight">
                {lang === 'ru' ? 'Как нас найти' : 'Бізді қалай табуға болады'}
              </h2>
              <p className="text-[#476364] text-base">
                {lang === 'ru'
                  ? 'В открытой карточке указан один адрес. Если у клиники есть другие точки приёма, уточняйте их у администратора — на сайте мы не публикуем неподтверждённые адреса.'
                  : 'Ашық карточкада бір мекенжай көрсетілген. Басқа мекенжайлар туралы әкімшіден нақтылаңыз.'}
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-[#0F292A]/10 overflow-hidden shadow-clinical">
              <div className="relative h-[280px] sm:h-[320px] bg-[#E9F2F1]">
                <iframe
                  title="Карта: Алматы, 1-й микрорайон, 46"
                  src={mapEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-2 max-w-[90%]">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-xs text-[11px] font-bold text-[#0F292A] shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                    {CLINIC_INFO.addressFull}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-xs text-[11px] font-semibold text-[#476364] shadow-xs">
                    {CLINIC_INFO.coords.lat.toFixed(6)}, {CLINIC_INFO.coords.lon.toFixed(6)}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-[#476364] font-medium">Адрес</div>
                    <div className="font-display font-bold text-base text-[#0F292A]">
                      {CLINIC_INFO.addressFull}
                    </div>
                    <div className="text-xs text-[#476364]">
                      {CLINIC_INFO.addressComment} • {CLINIC_INFO.district} • индекс {CLINIC_INFO.postcode}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-[#476364] font-medium">График работы</div>
                    <div className="font-display font-bold text-base text-[#0F292A] flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#0F766E]" />
                      {CLINIC_INFO.workingHours}
                    </div>
                    <div className="text-xs text-[#0F766E] font-semibold">По данным 2ГИС</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {CLINIC_INFO.metro.map((m) => (
                    <span
                      key={m.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#FAF8F5] border border-[#E11D48]/20 text-[11px] font-semibold text-[#0F292A]"
                    >
                      <Train className="w-3.5 h-3.5 text-[#E11D48]" />
                      {m.name} — {m.distance}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  <a
                    href={CLINIC_INFO.twoGisUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Маршрут в 2ГИС
                  </a>
                  <a
                    href={mapLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#0F292A]/12 text-[#0F292A] text-xs font-bold hover:bg-[#F0F6F6] transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#0F766E]" />
                    Открыть карту
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#0F292A]/12 text-[#0F292A] text-xs font-bold hover:bg-[#F0F6F6] transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                        Скопировано
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#0F766E]" />
                        Копировать адрес
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-4 border-t border-[#0F292A]/8 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2.5 font-mono-num font-extrabold text-lg text-[#0F292A] hover:text-[#0F766E]"
                  >
                    <span className="w-9 h-9 rounded-xl bg-[#F0F6F6] text-[#0F766E] flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </span>
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                  <div className="flex items-center gap-2">
                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#16A34A]/10 text-[#15803D] hover:bg-[#16A34A] hover:text-white text-xs font-bold transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                    <a
                      href={CLINIC_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF8F5] hover:bg-[#0F292A] text-[#0F292A] hover:text-white border border-[#0F292A]/10 text-xs font-bold transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-[#E11D48]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      {CLINIC_INFO.instagramHandle}
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#0F292A]/8">
                  <div className="text-xs font-bold text-[#476364] mb-2 flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-[#0F766E]" />
                    Способы оплаты по данным 2ГИС
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {CLINIC_INFO.paymentMethods.map((pm) => (
                      <span
                        key={pm}
                        className="px-3 py-1 rounded-lg bg-[#FAF8F5] border border-[#0F292A]/10 text-xs font-semibold text-[#0F292A]"
                      >
                        {pm}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-[#476364] mt-2">
                    Условия рассрочки и банковские программы в открытых данных не указаны.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#476364] flex items-start gap-1.5">
              <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#0F766E]" />
              Карта построена по координатам из карточки 2ГИС через OpenStreetMap. Для актуального
              маршрута откройте карточку в 2ГИС.
            </p>
          </div>

          {/* Booking form */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white border border-[#0F292A]/10 p-6 sm:p-8 shadow-clinical-lg">
              {submitted ? (
                <div className="py-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#16A34A]/15 text-[#16A34A] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-[#0F292A]">
                    Заявка заполнена
                  </h3>
                  <p className="text-sm text-[#476364]">
                    Спасибо, <strong>{name}</strong>! Мы не подключены к CRM клиники, поэтому заявка
                    не отправляется автоматически. Нажмите кнопку ниже, чтобы отправить её в WhatsApp
                    администратору.
                  </p>
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#0F292A]/8 text-left text-xs space-y-1.5">
                    <div><strong>Услуга:</strong> {service}</div>
                    <div><strong>Специалист:</strong> {doctor}</div>
                    <div><strong>Телефон:</strong> {phone}</div>
                    <div><strong>Время:</strong> {preferredTime}</div>
                  </div>
                  <a
                    href={whatsappBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-5 rounded-2xl bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Отправить заявку в WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#0F766E] hover:underline cursor-pointer"
                  >
                    Изменить данные
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="pb-3 border-b border-[#0F292A]/8">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0F766E]">
                      <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                      Запись на консультацию
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-[#0F292A] mt-0.5">
                      Оставить заявку
                    </h3>
                    <p className="text-xs text-[#476364] mt-1">
                      Заявка откроется в WhatsApp — это официальный контакт из карточки 2ГИС.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setPatientType('child')}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        patientType === 'child'
                          ? 'bg-[#0F766E] text-white border-[#0F766E]'
                          : 'bg-[#FAF8F5] text-[#0F292A] border-[#0F292A]/10'
                      }`}
                    >
                      🧸 Ребёнок
                    </button>
                    <button
                      type="button"
                      onClick={() => setPatientType('adult')}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        patientType === 'adult'
                          ? 'bg-[#0F766E] text-white border-[#0F766E]'
                          : 'bg-[#FAF8F5] text-[#0F292A] border-[#0F292A]/10'
                      }`}
                    >
                      🦷 Взрослый
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#476364] mb-1">Ваше имя *</label>
                    <input
                      type="text"
                      required
                      placeholder="Имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#0F292A]/15 text-sm text-[#0F292A] focus:outline-none focus:border-[#0F766E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#476364] mb-1">
                      Телефон / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (7__) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#0F292A]/15 text-sm font-mono-num text-[#0F292A] focus:outline-none focus:border-[#0F766E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#476364] mb-1">Услуга</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#0F292A]/15 text-sm text-[#0F292A] focus:outline-none focus:border-[#0F766E]"
                    >
                      <option value="Бесплатная консультация">Бесплатная консультация</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.officialName}>
                          {s.officialName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#476364] mb-1">Специалист</label>
                      <select
                        value={doctor}
                        onChange={(e) => setDoctor(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#0F292A]/15 text-xs text-[#0F292A]"
                      >
                        <option value="Любой свободный специалист">Любой специалист</option>
                        {TEAM.filter((t) => t.group === 'doctors').map((t) => (
                          <option key={t.id} value={t.name}>
                            {t.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#476364] mb-1">Удобное время</label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#0F292A]/15 text-xs text-[#0F292A]"
                      >
                        <option value="Ближайшее удобное время">Ближайшее время</option>
                        <option value="Утро (10:00 – 13:00)">Утро (10:00 – 13:00)</option>
                        <option value="День (13:00 – 17:00)">День (13:00 – 17:00)</option>
                        <option value="Вечер (17:00 – 20:00)">Вечер (17:00 – 20:00)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-[#0F766E] hover:bg-[#115E59] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#0F766E]/20 transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    Подготовить заявку
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 rounded-xl bg-[#16A34A]/10 hover:bg-[#16A34A] text-[#15803D] hover:text-white text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      WhatsApp
                    </a>
                    <a
                      href={`tel:${CLINIC_INFO.phoneRaw}`}
                      className="py-2.5 rounded-xl bg-[#F0F6F6] hover:bg-[#0F292A] text-[#0F292A] hover:text-white text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Позвонить
                    </a>
                  </div>

                  <p className="text-[11px] text-[#476364] text-center">
                    Мы не публикуем цены и не обещаем условия лечения — их подтверждает клиника.
                  </p>

                  <a
                    href={CLINIC_INFO.twoGisUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#0F766E] hover:underline inline-flex items-center gap-1"
                  >
                    Карточка клиники в 2ГИС
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
