import React, { useState } from 'react';
import { NEWS_DATA, NewsItem } from '../data/portalData';

interface NewsSectionProps {
  onSelectNotice: (notice: NewsItem) => void;
  lang: 'KOR' | 'ENG';
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onSelectNotice, lang }) => {
  const [activeFilter, setActiveFilter] = useState<string>('전체');

  const filters = ['전체', '용역입찰', '실증특례고지', '수상실적', '훈장수훈'];

  const filteredNews = activeFilter === '전체'
    ? NEWS_DATA
    : NEWS_DATA.filter((n) => n.category === activeFilter);

  const getBadgeStyle = (category: string) => {
    switch (category) {
      case '용역입찰':
        return 'bg-[#005c95]/10 text-[#005c95]';
      case '실증특례고지':
        return 'bg-[#49607e]/15 text-[#49607e]';
      case '수상실적':
        return 'bg-[#10B981]/20 text-[#10B981]';
      case '훈장수훈':
        return 'bg-[#F59E0B]/20 text-[#F59E0B]';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="w-full py-space-3xl" id="support-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8eafe] text-[#005c95] font-label-badge text-label-badge uppercase">
              <span>{lang === 'KOR' ? 'Notice & Press' : 'Newsroom & Tenders'}</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-[#0b1d2b]">
              {lang === 'KOR' ? 'MS가스의 새로운 소식을 전달드립니다.' : 'Latest News & Official Procurement'}
            </h2>
            <p className="font-body-md text-body-md text-[#404751]">
              {lang === 'KOR'
                ? '공개 입찰 공고 및 산학연 국책 실증 연구, 수상 실적을 신속하게 공지합니다.'
                : 'Rapidly sharing official public procurement notices, national R&D trials, and industry awards.'}
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <button
              onClick={() => onSelectNotice(NEWS_DATA[0])}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#005c95] text-white font-label-button text-label-button hover:bg-[#0075bc] transition-all shadow-sm active:scale-95"
            >
              <span>{lang === 'KOR' ? '공지사항 전체보기' : 'View All Notices'}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeFilter === filter
                  ? 'bg-[#005c95] text-white shadow-sm'
                  : 'bg-white text-[#404751] border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* News / Tender List (Clean Elevated Rows) */}
        <div className="space-y-3">
          {filteredNews.map((news) => (
            <div
              key={news.id}
              onClick={() => onSelectNotice(news)}
              role="button"
              tabIndex={0}
              className="group p-6 rounded-xl bg-white shadow-sm hover:shadow-md hover:translate-x-1.5 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 border border-[#c0c7d2]/30 cursor-pointer hover:border-[#005c95]/30"
              title="클릭하여 상세 공고문 보기"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1 min-w-0">
                <span className={`px-3 py-1 rounded-full font-label-badge text-label-badge shrink-0 w-fit ${getBadgeStyle(news.category)}`}>
                  {news.category}
                </span>
                <h4 className="font-headline-sm text-headline-sm text-[#0b1d2b] group-hover:text-[#005c95] transition-colors truncate">
                  {news.title}
                </h4>
              </div>

              <div className="flex items-center gap-6 text-[#404751] font-body-sm text-body-sm shrink-0">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  <span>{news.date}</span>
                </span>
                <span className="material-symbols-outlined text-[#005c95] text-[20px] group-hover:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
