import React from 'react';

interface CorporateMosaicProps {
  onOpenFleetModal: () => void;
  onOpenMSDS: () => void;
  lang: 'KOR' | 'ENG';
}

export const CorporateMosaic: React.FC<CorporateMosaicProps> = ({
  onOpenFleetModal,
  onOpenMSDS,
  lang,
}) => {
  return (
    <section className="w-full py-space-3xl bg-[#0E1E28] text-white" id="esg-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] font-label-badge text-label-badge uppercase">
              {lang === 'KOR' ? 'Corporate Value' : 'Corporate Value'}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-white">
              {lang === 'KOR' ? 'MS가스 Overview' : 'MS GAS Corporate Overview'}
            </h2>
            <p className="font-body-md text-body-md text-[#e7f2ff]/70 max-w-xl">
              {lang === 'KOR'
                ? '1974년 출범 이래 50여 년간 사람과 기술, 환경이 상생하는 청정 에너지 산업의 새로운 지평을 열어왔습니다.'
                : 'Since 1974, pioneering sustainable industrial gas ecosystems where human safety, engineering excellence, and the environment thrive together.'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-headline-sm text-headline-sm text-[#38BDF8] font-bold tracking-wide">
              SUSTAINABLE LEADERSHIP
            </span>
          </div>
        </div>

        {/* 4 Mosaic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* History Card */}
          <div
            role="button"
            tabIndex={0}
            className="group relative rounded-xl overflow-hidden h-96 flex flex-col justify-end p-6 bg-[#162B38] hover:scale-[1.02] transition-transform duration-300 border border-white/5 cursor-pointer shadow-lg"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-55 transition-opacity duration-500"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVbKJc04Vyr6oEQSCy2NWCQ1cxXWXO4tx10M1NJ1uPAn7UM7uD4C_WF5quyt8RRahyFXo3Au52JvES8RVbqEERfV2XsbUkS0TsfNn9BURldq_CZMEkOYpjFpCxB5_xVNqQXpH-e2zfxwtvvuwqR6anQdpXNU5ibY8VgAXCZsxy50oCvs-moSbdeaN8QvqDnEGwEi6xHKQMVTvLp2adf_k2C90QENC2f15vN1cL-ZuqJG2UPTYWJvBr')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E28] via-[#0E1E28]/60 to-transparent" />
            <div className="relative z-10 space-y-2">
              <span className="inline-block px-2.5 py-1 rounded-full bg-white/10 text-[#38BDF8] text-label-badge font-label-badge backdrop-blur-sm">
                History
              </span>
              <h3 className="font-headline-md text-headline-md text-white font-bold">
                {lang === 'KOR' ? '1974년 설립' : 'Founded in 1974'}
              </h3>
              <p className="font-body-sm text-body-sm text-[#e7f2ff]/80">
                {lang === 'KOR'
                  ? '반세기를 이어온 독보적 가스 전문 기술 노하우와 국가 기간산업 기여'
                  : 'Half a century of unparalleled gas expertise powering major national heavy industries.'}
              </p>
            </div>
          </div>

          {/* ESG 경영 Card */}
          <div
            role="button"
            tabIndex={0}
            className="group relative rounded-xl overflow-hidden h-96 flex flex-col justify-end p-6 bg-[#162B38] hover:scale-[1.02] transition-transform duration-300 border border-white/5 cursor-pointer shadow-lg"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-55 transition-opacity duration-500"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_0njBhEGMEF7kRCJ51MB1uop4ORdSzP4sELXPaVSdnlX99MO9SZD_eU9RiR9sJbWtlodezvT15xHl3lve2KLmviq3KhV0o8gZWwATR2Y6FM-YB7HL8TPbleU9GXxb1U3iZX2gd4qvFwCRL5AUwkk_OqiKX88cZynR25FH1GFhPTopmloN9ealXCxRSj1LxWNdOUG4qRb_zCgfOA3mD1i-pIUongiaYIE2U4Bgj_UJ8RdGSFP4us8m')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E28] via-[#0E1E28]/60 to-transparent" />
            <div className="relative z-10 space-y-2">
              <span className="inline-block px-2.5 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-label-badge font-label-badge backdrop-blur-sm">
                ESG Management
              </span>
              <h3 className="font-headline-md text-headline-md text-white font-bold">
                {lang === 'KOR' ? 'ESG 경영 실천' : 'ESG Practice'}
              </h3>
              <p className="font-body-sm text-body-sm text-[#e7f2ff]/80">
                {lang === 'KOR'
                  ? '탄소중립 기술 실증, 안전 최우선 작업환경, 투명하고 윤리적인 지배구조 확립'
                  : 'Carbon-neutral tech demonstrations, safety-first workplace, and ethical corporate governance.'}
              </p>
            </div>
          </div>

          {/* Networks Card */}
          <div
            onClick={onOpenFleetModal}
            role="button"
            tabIndex={0}
            className="group relative rounded-xl overflow-hidden h-96 flex flex-col justify-end p-6 bg-[#162B38] hover:scale-[1.02] transition-transform duration-300 border border-white/5 cursor-pointer shadow-lg"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-55 transition-opacity duration-500"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQST8nB2dRqjxFsJ4c8IXWHQsC6vO5VfVpZChGIPsP-8n8Uaez37ax10zWvsQ1PdP2EWBeEZPlXlRfsbpt4s_JH6_1IjMNQyxPWossGsswRlqziziPWGFCUrbaxy062AcYzF3AR4uoXZEhVmsXLBAH8Wb4fsklvwol0Wfz9K_pptkY_YE6G-eINkzBhqnkwT7NkMfii61G826p5657QywBj-_vJ4ykeRjKBOk6CutFvwWt2G-Kb-k0')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E28] via-[#0E1E28]/60 to-transparent" />
            <div className="relative z-10 space-y-2">
              <span className="inline-block px-2.5 py-1 rounded-full bg-white/10 text-[#38BDF8] text-label-badge font-label-badge backdrop-blur-sm">
                Networks
              </span>
              <h3 className="font-headline-md text-headline-md text-white font-bold">
                {lang === 'KOR' ? '전국적 운송능력' : 'Nationwide Fleet'}
              </h3>
              <p className="font-body-sm text-body-sm text-[#e7f2ff]/80">
                {lang === 'KOR'
                  ? '고도화된 초저온 탱크로리 전단과 전국 거점 배차를 통한 무중단 안전 배송'
                  : 'Uninterrupted safe supply via advanced cryogenic tanker fleets and nationwide regional dispatch.'}
              </p>
            </div>
          </div>

          {/* MSDS & Services Card */}
          <div
            onClick={onOpenMSDS}
            role="button"
            tabIndex={0}
            className="group relative rounded-xl overflow-hidden h-96 flex flex-col justify-end p-6 bg-[#162B38] hover:scale-[1.02] transition-transform duration-300 border border-white/5 cursor-pointer shadow-lg"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-55 transition-opacity duration-500"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDuV6msiG2YL6973L_9DqknhSRV6ItyrfGpDSwziHRkh03CpUg_Dwzr559w637zYzfNHfLt7lqj21Zgd8fJfWP9f1yAdLlQH8wpgOC3R5EZonmlHXy-tAKkpsAwhdi8kVUpazd-MmbQeOGvbzoRohR1DUBUHFg_qc-jXPpko2dSA3MH2IEFNd_P5JyLsyNgJQHg9GIwblly8dMODCDcmSdnXf4rc3ejULxH_APbjoDElylAq_X3ah04')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E28] via-[#0E1E28]/60 to-transparent" />
            <div className="relative z-10 space-y-2">
              <span className="inline-block px-2.5 py-1 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] text-label-badge font-label-badge backdrop-blur-sm">
                Safety Docs
              </span>
              <h3 className="font-headline-md text-headline-md text-white font-bold">
                {lang === 'KOR' ? 'MSDS & 규정지원' : 'MSDS & Regulatory'}
              </h3>
              <p className="font-body-sm text-body-sm text-[#e7f2ff]/80">
                {lang === 'KOR'
                  ? '전 취급 품목 물질안전보건자료 실시간 열람 및 유해화학물질 적합성 가이드'
                  : 'Instant access to full product Material Safety Data Sheets and hazardous chemical compliance.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
