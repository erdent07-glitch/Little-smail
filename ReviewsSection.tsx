import React, { useState } from 'react';
import { Star, ExternalLink, MessageSquareQuote, Info, ShieldAlert } from 'lucide-react';
import { REVIEWS_2GIS, CLINIC_INFO, Language } from '../data/clinicData';

interface ReviewsSectionProps {
  lang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'sedation' | 'kids' | 'adult' | 'kz'>('all');

  const visibleReviews =
    filter === 'all' ? REVIEWS_2GIS : REVIEWS_2GIS.filter((r) => r.category === filter);

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white border-t border-[#0F292A]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9EE] text-[#B45309] border border-[#F59E0B]/30 text-xs font-bold uppercase tracking-wider">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>Отзывы из карточки 2ГИС</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F292A] tracking-tight">
              {lang === 'ru'
                ? 'Что пациенты пишут о Little Smile'
                : 'Пациенттер Little Smile туралы не жазады'}
            </h2>
            <p className="text-[#476364] text-base">
              {lang === 'ru'
                ? 'Ниже — фрагменты реальных отзывов, опубликованных в 2ГИС. Мы не добавляли отзывы от себя и не приписывали авторам имена врачей.'
                : 'Төменде 2ГИС-те жарияланған нақты пікірлердің үзінділері берілген. Біз өз тарапымыздан пікір қоспадық.'}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#FAF8F5] border border-[#0F292A]/10 p-6 shadow-clinical space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#16A34A] text-white flex flex-col items-center justify-center shrink-0">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider">2ГИС</span>
                  <span className="font-mono-num font-extrabold text-2xl leading-none mt-0.5">
                    {CLINIC_INFO.rating}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#F59E0B] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                    ))}
                  </div>
                  <div className="font-bold text-sm text-[#0F292A]">
                    {CLINIC_INFO.ratingsCount} оценок
                  </div>
                  <div className="text-xs text-[#476364]">
                    {CLINIC_INFO.reviewsCount} отзывов в карточке
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 p-3 rounded-xl bg-white border border-[#0F292A]/8 text-[11px] text-[#476364]">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#0F766E]" />
                <span>
                  Показатели взяты из открытой карточки 2ГИС. Мы приводим и положительные, и
                  критические отзывы — полный список доступен по ссылке.
                </span>
              </div>

              <a
                href={CLINIC_INFO.twoGisReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0F766E] hover:bg-[#115E59] text-white text-xs font-bold transition-colors"
              >
                Все отзывы в 2ГИС
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          {[
            { id: 'all', label: `Все фрагменты (${REVIEWS_2GIS.length})` },
            { id: 'sedation', label: 'Лечение под седацией' },
            { id: 'kids', label: 'Детский приём' },
            { id: 'adult', label: 'Взрослый приём' },
            { id: 'kz', label: 'Қазақша пікірлер' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id as typeof filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                filter === tab.id
                  ? 'bg-[#0F766E] text-white border-[#0F766E] shadow-xs'
                  : 'bg-[#FAF8F5] text-[#476364] hover:text-[#0F292A] border-[#0F292A]/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleReviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl bg-[#FAF8F5] hover:bg-white border border-[#0F292A]/10 p-5 flex flex-col justify-between transition-all shadow-clinical"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#0F766E] text-white font-bold text-xs flex items-center justify-center shrink-0">
                      {rev.initials}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#0F292A]">{rev.author}</div>
                      <div className="text-[11px] text-[#476364]">
                        {rev.authorReviewsCount || 'Отзыв в 2ГИС'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-[#F59E0B] shrink-0">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B]" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-[#0F292A]/90 leading-relaxed">«{rev.text}»</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#0F292A]/8 flex items-center justify-between text-[11px]">
                <span className="inline-flex items-center gap-1 text-[#476364]">
                  {rev.excerpt ? 'Фрагмент отзыва' : 'Отзыв опубликован'}
                </span>
                <a
                  href={CLINIC_INFO.twoGisReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F766E] hover:underline font-semibold"
                >
                  Оригинал в 2ГИС →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-[#FAF8F5] border border-[#0F292A]/10 p-4 flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
          <p className="text-xs text-[#476364]">
            В 2ГИС есть и критические отзывы. Мы не скрываем их наличие и не выдаём подборку выше за
            все мнения о клинике. Актуальный рейтинг, полные тексты и ответы клиники смотрите в
            первоисточнике.
          </p>
        </div>
      </div>
    </section>
  );
};
