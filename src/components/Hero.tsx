import React from 'react';
import { ArrowRight, Headphones, Shield, Truck, Cpu, ExternalLink } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: () => void;
  onOpenFleetModal: () => void;
  lang: 'KOR' | 'ENG';
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onOpenFleetModal, lang }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0E1E28] text-white -mt-20 pt-28 pb-space-3xl">
      {/* Atmospheric Ambient Visual Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 pointer-events-none"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_0Tvmw32Wit7BDWYu8k2AUw-WUKk37pXVnifZcLPMEaBBsv9s_8Y57fDEjztlGbQlQr8Xr7gddGfcVPGZP1NDWNdq5F9WcbYspq7_OFpIluQ75ZMnP9pl-7Biv-NXqKPCydY79KLxX2kAX3NNN3BpGkuIveuWmzOtdYsnsd1ZQZ-Oxxne53FP3M2BrZPHf5lNhlY_ObbQBmnYacgMxCWsbgfFw3FJHdGS_P7Dv-jIhy8wLuU_pJS-')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E1E28] via-[#0E1E28]/90 to-transparent pointer-events-none" />
      <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-[#38BDF8]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Column: Core Value Proposition */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              <span className="font-label-badge text-label-badge tracking-wider uppercase">
                {lang === 'KOR'
                  ? 'SINCE 1974 · 대한민국 고압가스 반세기 신뢰'
                  : 'SINCE 1974 · HALF A CENTURY OF TRUST IN INDUSTRIAL GAS'}
              </span>
            </div>

            <h1 className="font-display-hero text-display-hero tracking-tight text-white leading-tight">
              {lang === 'KOR' ? (
                <>
                  가스 설계부터 공급, 유지까지<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#9acbff] to-white">
                    전 공정을 아우르는 원스톱 토탈 솔루션
                  </span>
                </>
              ) : (
                <>
                  From Gas Design to Supply & Maintenance<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#9acbff] to-white">
                    Total One-Stop Engineering Solutions
                  </span>
                </>
              )}
            </h1>

            <p className="font-body-lg text-body-lg text-[#e7f2ff]/80 max-w-2xl leading-relaxed">
              {lang === 'KOR'
                ? '고객과 함께하는 신뢰받는 기업 (주)MS가스는 전국적인 운송 인프라와 실시간 통합 모니터링 시스템을 통해 가장 안전하고 효율적인 산업 에너지 솔루션을 실현합니다.'
                : 'Trusted energy partner MS GAS Co., Ltd. delivers the safest and most efficient industrial gas solutions through nationwide cryogenic logistics infrastructure and real-time integrated fleet monitoring.'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#product-showcase"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#0075bc] text-white font-label-button text-label-button shadow-lg shadow-[#005c95]/40 hover:bg-[#005c95] transition-all hover:translate-y-[-1px] active:scale-95"
              >
                <span>{lang === 'KOR' ? '제품 라인업 살펴보기' : 'Explore Product Lineup'}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>

              <button
                onClick={onOpenInquiry}
                type="button"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-label-button text-label-button transition-all backdrop-blur-md border border-white/15 active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px] text-[#38BDF8]">support_agent</span>
                <span>{lang === 'KOR' ? '솔루션 상담 신청' : 'Request Technical Quote'}</span>
              </button>
            </div>

            {/* Feature Quick Tags */}
            <div className="pt-6 flex flex-wrap items-center gap-6 text-[#e7f2ff]/70 font-body-sm text-body-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#38BDF8] text-[20px]">verified_user</span>
                <span>{lang === 'KOR' ? 'KGS 고압가스 안전관리 승인' : 'KGS Gas Safety Certified'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#38BDF8] text-[20px]">local_shipping</span>
                <span>{lang === 'KOR' ? '전국 24시간 실시간 배송 관제' : '24/7 Nationwide Fleet Tracking'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#38BDF8] text-[20px]">precision_manufacturing</span>
                <span>{lang === 'KOR' ? '반도체·의료 초고순도 정밀분석' : 'UHP 5N-7N Precision Analysis'}</span>
              </div>
            </div>
          </div>

          {/* Hero Right Column: Floating Fleet Control Card */}
          <div className="lg:col-span-4 relative">
            <div
              onClick={onOpenFleetModal}
              role="button"
              tabIndex={0}
              className="group cursor-pointer rounded-xl p-6 bg-[#162B38]/85 backdrop-blur-xl shadow-2xl space-y-5 border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-300 hover:shadow-[#38BDF8]/10"
              title="클릭하여 전국 물류관제 시스템 열기"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="font-headline-sm text-headline-sm text-white">
                    {lang === 'KOR' ? '전국 물류관제 현황' : 'Fleet Operations'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] text-label-badge font-label-badge">
                    LIVE TRACKING
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#38BDF8] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Fleet Realtime Status Snapshot */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-lg bg-[#0E1E28]/90 flex items-center justify-between border border-white/5 group-hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#38BDF8]">fire_truck</span>
                    <div>
                      <p className="font-label-button text-label-button text-white">
                        {lang === 'KOR' ? '초저온 탱크로리 선단' : 'Cryogenic Tanker Fleet'}
                      </p>
                      <p className="font-body-sm text-body-sm text-[#e7f2ff]/60">
                        {lang === 'KOR' ? '전국 고속망 실시간 운행 중' : 'Active nationwide transit'}
                      </p>
                    </div>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-[#38BDF8] font-bold">128기</span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0E1E28]/90 flex items-center justify-between border border-white/5 group-hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#38BDF8]">warehouse</span>
                    <div>
                      <p className="font-label-button text-label-button text-white">
                        {lang === 'KOR' ? '충전 플랜트 가동률' : 'Plant Operating Rate'}
                      </p>
                      <p className="font-body-sm text-body-sm text-[#e7f2ff]/60">
                        {lang === 'KOR' ? '부산·경남·중부권 직영' : 'Busan, Gyeongnam & Central'}
                      </p>
                    </div>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-[#10B981] font-bold">99.9%</span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0E1E28]/90 flex items-center justify-between border border-white/5 group-hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#38BDF8]">speed</span>
                    <div>
                      <p className="font-label-button text-label-button text-white">
                        {lang === 'KOR' ? '평균 긴급 공급 대응' : 'Emergency Response'}
                      </p>
                      <p className="font-body-sm text-body-sm text-[#e7f2ff]/60">
                        {lang === 'KOR' ? '원콜 긴급 배차 시스템' : 'One-call rapid dispatch'}
                      </p>
                    </div>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-[#38BDF8] font-bold">&lt; 3.2h</span>
                </div>
              </div>

              {/* Telemetry Bar Visual Indicator */}
              <div className="pt-2">
                <div className="flex justify-between items-center mb-1.5 font-label-badge text-label-badge text-[#e7f2ff]/70">
                  <span>{lang === 'KOR' ? '실시간 인프라 안전 가동 지수' : 'Real-time Infrastructure Safety Index'}</span>
                  <span className="text-[#38BDF8] font-bold">SAFE PASS</span>
                </div>
                <div className="w-full bg-[#0E1E28] h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[#005c95] to-[#38BDF8] h-full rounded-full w-[96%]" />
                </div>
                <p className="text-[11px] text-right text-[#38BDF8]/80 mt-1">상세 관제 화면 열기 →</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
