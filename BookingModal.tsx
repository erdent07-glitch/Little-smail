import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageCircle, CheckCircle2, Phone, Info } from 'lucide-react';
import { CLINIC_INFO, TEAM, SERVICES } from '../data/clinicData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialDoctor?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialDoctor,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [patientType, setPatientType] = useState<'child' | 'adult'>('child');
  const [service, setService] = useState(initialService || 'Бесплатная консультация');
  const [doctor, setDoctor] = useState(initialDoctor || 'Любой свободный специалист');
  const [time, setTime] = useState('Ближайшее удобное время');
  const [prepared, setPrepared] = useState(false);

  useEffect(() => {
    if (initialService) setService(initialService);
    if (initialDoctor) setDoctor(initialDoctor);
    setPrepared(false);
  }, [initialService, initialDoctor, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setPrepared(true);
  };

  const whatsappUrl = `https://wa.me/77719152094?text=${encodeURIComponent(
    `Здравствуйте! Заявка с сайта Little Smile:\n• Имя: ${name || '-'}\n• Телефон: ${
      phone || '-'
    }\n• Пациент: ${patientType === 'child' ? 'Ребёнок' : 'Взрослый'}\n• Услуга: ${service}\n• Специалист: ${doctor}\n• Время: ${time}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F292A]/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-[#0F292A]/10 p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#FAF8F5] hover:bg-[#F0F6F6] text-[#476364] hover:text-[#0F292A] transition-colors cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {prepared ? (
          <div className="py-4 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-[#16A34A]/15 text-[#16A34A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-display font-extrabold text-2xl text-[#0F292A] text-center">
              Заявка подготовлена
            </h3>
            <p className="text-sm text-[#476364] text-center">
              Сайт не подключён к системе записи клиники. Нажмите кнопку ниже — и заявка откроется в
              WhatsApp на официальном номере из карточки 2ГИС.
            </p>
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#0F292A]/8 text-left text-xs space-y-1.5">
              <div><strong>Имя:</strong> {name}</div>
              <div><strong>Телефон:</strong> {phone}</div>
              <div><strong>Услуга:</strong> {service}</div>
              <div><strong>Специалист:</strong> {doctor}</div>
              <div><strong>Время:</strong> {time}</div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-2xl bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Отправить в WhatsApp
            </a>
            <div className="flex items-center justify-center gap-4 text-xs font-semibold">
              <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-[#0F766E] hover:underline">
                Позвонить: {CLINIC_INFO.phoneDisplay}
              </a>
              <button
                type="button"
                onClick={() => setPrepared(false)}
                className="text-[#476364] hover:text-[#0F292A] cursor-pointer"
              >
                Изменить
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="pr-8">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F0F6F6] text-[#0F766E] text-xs font-bold">
                <Calendar className="w-3.5 h-3.5" />
                Запись на приём
              </span>
              <h3 className="font-display font-extrabold text-2xl text-[#0F292A] mt-2">
                Оставить заявку
              </h3>
              <p className="text-xs text-[#476364] mt-1">
                Телефон клиники: {CLINIC_INFO.phoneDisplay} • {CLINIC_INFO.workingHours}
              </p>
            </div>

            <div className="flex items-start gap-2 p-3 rounded-xl bg-[#FFF9EE] border border-[#F59E0B]/25 text-[11px] text-[#7C4A03]">
              <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#D97706]" />
              <span>
                Заявка не отправляется автоматически: она откроется в WhatsApp, чтобы вы могли
                отправить её клинике сами.
              </span>
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
                🧸 Детский приём
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
                🦷 Взрослый приём
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#476364] mb-1">Ваше имя *</label>
                <input
                  type="text"
                  required
                  placeholder="Имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#0F292A]/15 text-sm text-[#0F292A] focus:outline-none focus:border-[#0F766E]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#476364] mb-1">Телефон *</label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (7__) ___-__-__"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#0F292A]/15 text-sm font-mono-num text-[#0F292A] focus:outline-none focus:border-[#0F766E]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#476364] mb-1">Услуга</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#0F292A]/15 text-xs sm:text-sm text-[#0F292A] focus:outline-none focus:border-[#0F766E]"
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
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#0F292A]/15 text-xs text-[#0F292A]"
                >
                  <option value="Ближайшее удобное время">Ближайшее время</option>
                  <option value="Утро (10:00 – 13:00)">Утро (10:00 – 13:00)</option>
                  <option value="День (13:00 – 17:00)">День (13:00 – 17:00)</option>
                  <option value="Вечер (17:00 – 20:00)">Вечер (17:00 – 20:00)</option>
                </select>
              </div>
            </div>

            <div className="pt-1 space-y-2.5">
              <button
                type="submit"
                className="w-full py-3.5 px-5 rounded-2xl bg-[#0F766E] hover:bg-[#115E59] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Подготовить заявку
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#16A34A]/10 hover:bg-[#16A34A] text-[#15803D] hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp клиники
                </a>
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="py-2.5 px-3 rounded-xl bg-[#F0F6F6] hover:bg-[#0F292A] text-[#0F292A] hover:text-white font-mono-num font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Позвонить
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
