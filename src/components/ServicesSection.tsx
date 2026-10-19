import React from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/portalData';

interface ServicesSectionProps {
  onOpenInquiry: (serviceName?: string) => void;
  lang: 'KOR' | 'ENG';
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry, lang }) => {
  return (
    <section className="w-full py-space-2xl bg-[#edf4ff]" id="services-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-[#005c95]/10 text-[#005c95] font-label-badge text-label-badge uppercase">
            {lang === 'KOR' ? 'Total Engineering Service' : 'Total Engineering Services'}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-[#0b1d2b]">
            {lang === 'KOR' ? '전 공정을 아우르는 종합 솔루션' : 'Integrated End-to-End Solutions'}
          </h2>
          <p className="font-body-md text-body-md text-[#404751]">
            {lang === 'KOR'
              ? '단순 원료 판매를 넘어 플랜트 기획, 정밀 순도 측정, 유지보수, 글로벌 물류까지 빈틈없이 연결합니다.'
              : 'Beyond simple gas sales, seamlessly connecting plant engineering, precision purity verification, plant maintenance, and global logistics.'}
          </p>
        </div>

        {/* Service 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((srv: ServiceItem) => (
            <div
              key={srv.id}
              onClick={() => onOpenInquiry(srv.title)}
              role="button"
              tabIndex={0}
              className="p-8 rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 border border-[#c0c7d2]/30 hover:border-[#005c95]/30 cursor-pointer hover:-translate-y-1 group"
              title="클릭하여 서비스 상담 신청"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-[#005c95]/10 text-[#005c95] group-hover:bg-[#005c95] group-hover:text-white transition-colors flex items-center justify-center">
                  <span className="material-symbols-outlined text-[32px]">{srv.icon}</span>
                </div>

                <div className="space-y-1">
                  <span className="font-label-badge text-label-badge text-[#005c95] group-hover:underline">
                    {srv.step}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-[#0b1d2b] group-hover:text-[#005c95] transition-colors">
                    {srv.title}
                  </h3>
                </div>

                <p className="font-body-sm text-body-sm text-[#404751] leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-100">
                <ul className="space-y-2 text-[#404751] font-body-sm text-body-sm">
                  {srv.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#005c95] text-[16px]">
                        check_circle
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#005c95] font-semibold flex items-center gap-1 pt-1 opacity-80 group-hover:opacity-100">
                  <span>상담 신청하기</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
