import React from 'react';

interface QualitySectionProps {
  onOpenNotice: () => void;
  lang: 'KOR' | 'ENG';
}

export const QualitySection: React.FC<QualitySectionProps> = ({ onOpenNotice, lang }) => {
  return (
    <section className="w-full py-space-3xl" id="facilities-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Collage Column */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-md h-64 bg-[#0E1E28]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJYkPzmLaf4b1cNc7ikbbBbyqpbk2J2-Kmohoi-V3Bw8Pzp-KjKwp1H4SqxOtEY88lwSAfIHseGUbL--OqCtjAyImGnUAk4Efzt8F8WOaobdYvCsR-bqLxrJoTtWlQQwWxtXVLfOhR2GybqHKP8-U2NvJmImPa9CQhYqc8mPg9FLRfjirNEzDiWtYQrr85y43ERkj6vZOUiQw1tt9i-gvzU4zfuNVSiIF-pNoxihlFomD8TZIjhXZz"
                  alt="MS GAS plant inspection"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 rounded-xl bg-[#005c95] text-white space-y-2 shadow-md">
                <span className="font-metric-kpi text-metric-kpi font-extrabold">50+</span>
                <p className="font-headline-sm text-headline-sm font-bold">
                  {lang === 'KOR' ? '반세기 무사고 기술력' : '50+ Years Zero-Accident'}
                </p>
                <p className="font-body-sm text-body-sm text-[#f2f6ff]/80">
                  {lang === 'KOR'
                    ? '고압가스 안전관리법 및 화학물질관리법 무결점 준수'
                    : 'Flawless compliance with High-Pressure Gas Safety Act & CCA.'}
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-6 rounded-xl bg-[#d8eafe] space-y-3 shadow-sm border border-[#c4dcff]">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#005c95] text-[28px]">
                    verified
                  </span>
                  <span className="font-headline-sm text-headline-sm text-[#005c95] font-bold">
                    {lang === 'KOR' ? '인증 & 특허' : 'Certifications'}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-[#404751]">
                  {lang === 'KOR'
                    ? 'ISO 9001 품질경영, ISO 14001 환경경영, KGS 설비 공인 안전인증 획득'
                    : 'ISO 9001 Quality, ISO 14001 Environmental, and KGS official facility safety approvals.'}
                </p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-md h-64 bg-[#0E1E28]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0QB5ajQD6JFLRnwOF74MS__bjUPU0Ku5ms5Tp43FIjw00WUZy7q3n8siLH0KmWyVTuaBqxL8b1UG0NweAEXsswXIOXsPt14KKc4iS2Igl3HvoW1XGq-zDiTXqz_DIb_qncgppQ6FaHkEdQClR58utkAr1m9zIkIhhDxzW5gMIa09_HUou4hucAXVYgohsI_NgQTfIAW2ViDHyGTSYmOE_FF4UFNn8Yp3Hy7k6g4qxkLOg4Hv997Ft"
                  alt="Laboratory gas chromatography"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d8eafe] text-[#005c95] font-label-badge text-label-badge uppercase">
              <span>{lang === 'KOR' ? 'R&D & Quality Certification' : 'R&D & Quality Standards'}</span>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-[#0b1d2b]">
              {lang === 'KOR' ? (
                <>
                  지속적인 연구를 통해<br />품질 개선을 이어갑니다.
                </>
              ) : (
                <>
                  Pioneering Innovation<br />Through Continuous R&D
                </>
              )}
            </h2>

            <p className="font-body-lg text-body-lg text-[#404751] leading-relaxed">
              {lang === 'KOR'
                ? '(주)MS가스는 국가 규제자유특구의 핵심 실증 R&D 사업 주관기관으로서 차세대 청정 암모니아 벙커링 인프라 구축, 수소 및 친환경 선박 추진 시스템 실증을 이끌어가고 있습니다.'
                : 'As the principal institution for national regulation-free zone R&D demonstration projects, MS GAS leads clean ammonia bunkering infrastructure and eco-ship propulsion trials.'}
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-lg bg-white border border-[#c0c7d2]/30 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#edf4ff] text-[#005c95] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">science</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-[#0b1d2b] font-bold">
                    {lang === 'KOR' ? '울산 규제자유특구 실증 R&D 총괄' : 'Ulsan Free Zone Ammonia Bunkering'}
                  </h4>
                  <p className="font-body-sm text-body-sm text-[#404751] mt-1">
                    {lang === 'KOR'
                      ? '암모니아 TTS용 벙커링 인프라 구축 및 기자재·표준 개발, 3자 안전진단 평가 표준 수립'
                      : 'Developing TTS ammonia bunkering facilities, equipment standards, and 3rd-party safety diagnostics.'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#c0c7d2]/30 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#edf4ff] text-[#005c95] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">eco</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-[#0b1d2b] font-bold">
                    {lang === 'KOR' ? '친환경 선박 추진 실증특례' : 'Green Ship Mixed Fuel Propulsion'}
                  </h4>
                  <p className="font-body-sm text-body-sm text-[#404751] mt-1">
                    {lang === 'KOR'
                      ? '경남 암모니아 혼소 연료추진시스템 선박 규제자유특구 실증을 통한 넷제로 해양 에너지 견인'
                      : 'Driving maritime Net-Zero transitions through ammonia co-combustion propulsion demonstration.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenNotice}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#005c95] text-white font-label-button text-label-button hover:bg-[#0075bc] transition-all shadow-md active:scale-95"
              >
                <span>{lang === 'KOR' ? '품질 및 인증현황 상세확인' : 'View Quality & Certifications'}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
