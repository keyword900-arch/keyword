import React from 'react';

interface QuickAccessHubProps {
  onOpenInquiry: () => void;
  onOpenBranches: () => void;
  onOpenNews: () => void;
  onOpenCompany: () => void;
  lang: 'KOR' | 'ENG';
}

export const QuickAccessHub: React.FC<QuickAccessHubProps> = ({
  onOpenInquiry,
  onOpenBranches,
  onOpenNews,
  onOpenCompany,
  lang,
}) => {
  return (
    <section className="w-full py-space-2xl bg-[#162B38] text-white" id="contact-solution">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="font-headline-md text-headline-md text-white font-bold">
            {lang === 'KOR' ? '신속 지원 바로가기 서비스' : 'Quick Access Support Hub'}
          </h3>
          <p className="font-body-sm text-body-sm text-[#e7f2ff]/70">
            {lang === 'KOR'
              ? '가스 공급 상담부터 본사 및 각 지역별 영업지소 안내까지 쉽고 빠르게 연결됩니다.'
              : 'Directly connect from initial gas consulting to local branch offices and technical safety assistance.'}
          </p>
        </div>

        {/* 4 Quick Utility Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 01 회사소개 */}
          <div
            onClick={onOpenCompany}
            role="button"
            tabIndex={0}
            className="group p-6 rounded-xl bg-[#0E1E28]/80 hover:bg-[#0E1E28] transition-all shadow-md flex items-center justify-between border border-white/5 hover:border-[#38BDF8]/40 cursor-pointer"
          >
            <div className="space-y-1">
              <h4 className="font-headline-sm text-headline-sm text-white group-hover:text-[#38BDF8] transition-colors font-bold">
                {lang === 'KOR' ? '회사소개' : 'About Us'}
              </h4>
              <p className="font-body-sm text-body-sm text-[#e7f2ff]/60">
                {lang === 'KOR' ? 'MS가스 경영철학 & 연혁' : 'Philosophy & History'}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[24px]">corporate_fare</span>
            </div>
          </div>

          {/* 02 온라인 문의 */}
          <div
            onClick={onOpenInquiry}
            role="button"
            tabIndex={0}
            className="group p-6 rounded-xl bg-[#0E1E28]/80 hover:bg-[#0E1E28] transition-all shadow-md flex items-center justify-between border border-white/5 hover:border-[#38BDF8]/40 cursor-pointer"
          >
            <div className="space-y-1">
              <h4 className="font-headline-sm text-headline-sm text-white group-hover:text-[#38BDF8] transition-colors font-bold">
                {lang === 'KOR' ? '온라인 문의' : 'Online Inquiry'}
              </h4>
              <p className="font-body-sm text-body-sm text-[#e7f2ff]/60">
                {lang === 'KOR' ? '견적 요청 및 1:1 기술상담' : 'Quotes & 1:1 Consulting'}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[24px]">chat</span>
            </div>
          </div>

          {/* 03 새로운 소식 */}
          <div
            onClick={onOpenNews}
            role="button"
            tabIndex={0}
            className="group p-6 rounded-xl bg-[#0E1E28]/80 hover:bg-[#0E1E28] transition-all shadow-md flex items-center justify-between border border-white/5 hover:border-[#38BDF8]/40 cursor-pointer"
          >
            <div className="space-y-1">
              <h4 className="font-headline-sm text-headline-sm text-white group-hover:text-[#38BDF8] transition-colors font-bold">
                {lang === 'KOR' ? '새로운 소식' : 'Newsroom'}
              </h4>
              <p className="font-body-sm text-body-sm text-[#e7f2ff]/60">
                {lang === 'KOR' ? '입찰공고 및 기업 뉴스룸' : 'Public Tenders & Press'}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[24px]">campaign</span>
            </div>
          </div>

          {/* 04 오시는 길 */}
          <div
            onClick={onOpenBranches}
            role="button"
            tabIndex={0}
            className="group p-6 rounded-xl bg-[#0E1E28]/80 hover:bg-[#0E1E28] transition-all shadow-md flex items-center justify-between border border-white/5 hover:border-[#38BDF8]/40 cursor-pointer"
          >
            <div className="space-y-1">
              <h4 className="font-headline-sm text-headline-sm text-white group-hover:text-[#38BDF8] transition-colors font-bold">
                {lang === 'KOR' ? '오시는 길' : 'Locations'}
              </h4>
              <p className="font-body-sm text-body-sm text-[#e7f2ff]/60">
                {lang === 'KOR' ? '전국 직영 영업지소 위치' : '17 Direct Branches'}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[24px]">pin_drop</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
