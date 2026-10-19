import React from 'react';

interface MetricsBarProps {
  onOpenBranches: () => void;
  lang: 'KOR' | 'ENG';
}

export const MetricsBar: React.FC<MetricsBarProps> = ({ onOpenBranches, lang }) => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 -mt-10 w-full">
      <div className="rounded-xl bg-white p-8 shadow-xl border border-[#c0c7d2]/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {/* Metric 1 */}
          <div
            onClick={onOpenBranches}
            role="button"
            tabIndex={0}
            className="flex flex-col space-y-2 pl-2 group cursor-pointer pt-4 md:pt-0"
            title="클릭하여 권역별 거점 확인"
          >
            <div className="flex items-baseline gap-1">
              <span className="font-metric-kpi text-metric-kpi text-[#005c95] tracking-tight group-hover:text-[#0075bc] transition-colors">
                8
              </span>
              <span className="font-headline-sm text-headline-sm text-[#005c95] font-bold">
                {lang === 'KOR' ? '개' : ' Regions'}
              </span>
            </div>
            <p className="font-headline-sm text-headline-sm text-[#0b1d2b] group-hover:text-[#005c95] transition-colors">
              {lang === 'KOR' ? '권역별 핵심 거점' : 'Regional Strategic Hubs'}
            </p>
            <p className="font-body-sm text-body-sm text-[#404751]">
              {lang === 'KOR'
                ? '수도권부터 영남·호남까지 전국 전역을 유기적으로 커버하는 물류망'
                : 'Organic logistics network comprehensively covering nationwide industrial corridors.'}
            </p>
          </div>

          {/* Metric 2 */}
          <div
            onClick={onOpenBranches}
            role="button"
            tabIndex={0}
            className="flex flex-col space-y-2 pl-2 md:pl-6 group cursor-pointer pt-4 md:pt-0"
            title="클릭하여 직영 영업소 확인"
          >
            <div className="flex items-baseline gap-1">
              <span className="font-metric-kpi text-metric-kpi text-[#005c95] tracking-tight group-hover:text-[#0075bc] transition-colors">
                17
              </span>
              <span className="font-headline-sm text-headline-sm text-[#005c95] font-bold">
                {lang === 'KOR' ? '개' : ' Offices'}
              </span>
            </div>
            <p className="font-headline-sm text-headline-sm text-[#0b1d2b] group-hover:text-[#005c95] transition-colors">
              {lang === 'KOR' ? '직영 영업소 인프라' : 'Direct Branch Offices'}
            </p>
            <p className="font-body-sm text-body-sm text-[#404751]">
              {lang === 'KOR'
                ? '현장 밀착형 관리체계와 결함 없는 공급 안정성을 보장하는 지사망'
                : 'Direct management system ensuring zero-defect supply reliability and swift support.'}
            </p>
          </div>

          {/* Metric 3 */}
          <div className="flex flex-col space-y-2 pl-2 md:pl-6 pt-4 md:pt-0">
            <div className="flex items-baseline gap-1">
              <span className="font-metric-kpi text-metric-kpi text-[#005c95] tracking-tight">
                10
              </span>
              <span className="font-headline-sm text-headline-sm text-[#005c95] font-bold">
                {lang === 'KOR' ? '개국' : ' Countries'}
              </span>
            </div>
            <p className="font-headline-sm text-headline-sm text-[#0b1d2b]">
              {lang === 'KOR' ? '해외 글로벌 네트워크' : 'Global Trade Network'}
            </p>
            <p className="font-body-sm text-body-sm text-[#404751]">
              {lang === 'KOR'
                ? 'ISO 탱크 컨테이너 및 고순도 특수가스 글로벌 수출입 공급 허브'
                : 'ISO tank container fleet and high-purity specialty gas global trade hub.'}
            </p>
          </div>

          {/* Metric 4 */}
          <div className="flex flex-col space-y-2 pl-2 md:pl-6 pt-4 md:pt-0">
            <div className="flex items-baseline gap-1">
              <span className="font-metric-kpi text-metric-kpi text-[#005c95] tracking-tight">
                935
              </span>
              <span className="font-headline-sm text-headline-sm text-[#005c95] font-bold">
                {lang === 'KOR' ? '억' : 'B KRW'}
              </span>
            </div>
            <p className="font-headline-sm text-headline-sm text-[#0b1d2b]">
              {lang === 'KOR' ? '연간 매출액' : 'Annual Revenue'}
            </p>
            <p className="font-body-sm text-body-sm text-[#404751]">
              {lang === 'KOR'
                ? '2024년 GAAP 기준 흔들림 없는 재무건전성과 지속 가능한 투자 역량'
                : 'Solid financial soundess under 2024 GAAP with sustainable continuous reinvestment.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
