import React, { useState } from 'react';

interface FooterProps {
  onOpenBranches: () => void;
  onOpenInquiry: () => void;
  onOpenMSDS: () => void;
  onOpenPrivacy: () => void;
  lang: 'KOR' | 'ENG';
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBranches,
  onOpenInquiry,
  onOpenMSDS,
  onOpenPrivacy,
  lang,
}) => {
  const [familySite, setFamilySite] = useState('');

  const handleFamilySiteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setFamilySite(val);
    if (val) {
      // simulate selection feedback or action
      setTimeout(() => setFamilySite(''), 1000);
    }
  };

  return (
    <footer className="w-full bg-[#0E1E28] text-[#e7f2ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-space-2xl pb-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-space-xl border-b border-white/10">
          {/* Col 1: Brand & Intro */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="MS GAS Logo"
                className="h-8 w-auto object-contain brightness-0 invert"
                src="https://lh3.googleusercontent.com/aida/AEtjO1VMJnCvc9MOk7nh58zjhX4nM1NwV2No1glXXDB9XHlCIjkJZOw4Xgpy-OTAlVRYcXcAigkhcXtpGfIyWdWDaQF2gRmfs_cIBy7LZVqm5vyqEtdfysLXNjnJS5piSpB32hj-GoJvguDQNojm-v7fUYkTmAeg16ZwJ1cUnpBYJL1vpHopDhSRxY9zSwwH0R1HkkS8amg49V1e-mPwv0UYXh5brA2VMO7OrfClB8BhVigiVuPWyUmsFus8tvE"
                referrerPolicy="no-referrer"
              />
              <span className="font-headline-sm text-headline-sm text-white font-bold">
                {lang === 'KOR' ? '(주)MS가스' : 'MS GAS Co., Ltd.'}
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-[#e7f2ff]/70 leading-relaxed max-w-md">
              {lang === 'KOR'
                ? '반세기 축적된 초저온 가스 정밀 제어 역량과 전국 직영 공급 네트워크를 기반으로 첨단 반도체, 의료, 중공업 산업의 안전과 품질을 견인하는 종합 고압가스 엔지니어링 파트너입니다.'
                : 'Backed by half a century of accumulated cryogenic gas engineering capability and a nationwide direct supply network, MS GAS is your trusted high-pressure gas partner powering semiconductor, medical, and heavy industrial growth.'}
            </p>
          </div>

          {/* Col 2: Customer Center & Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-label-button text-label-button text-[#38BDF8] uppercase tracking-wider font-bold">
              {lang === 'KOR' ? '고객 센터 & 정보' : 'Customer Center & Info'}
            </h4>
            <div className="space-y-2 text-[#e7f2ff]/80 font-body-sm text-body-sm">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#38BDF8]">call</span>
                <span>대표전화: 051-790-2000 | 팩스: 051-790-2009</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#38BDF8]">location_on</span>
                <span>부산광역시 사상구 낙동대로 1416 (삼락동)</span>
              </p>
              <p className="text-[#e7f2ff]/60 pl-6 text-xs">
                사업자등록번호: 606-81-22904 | 대표이사: 전원태
              </p>
            </div>
          </div>

          {/* Col 3: Family Site */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-label-button text-label-button text-[#38BDF8] uppercase tracking-wider font-bold">
              Family Site
            </h4>
            <div className="relative">
              <select
                aria-label="Family Site 선택"
                value={familySite}
                onChange={handleFamilySiteChange}
                className="w-full appearance-none bg-[#162B38] text-[#e7f2ff] font-body-sm text-body-sm px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-[#38BDF8] cursor-pointer"
              >
                <option value="">MS그룹 계열사 바로가기</option>
                <option value="ms-gas">MS가스 (부산 본사)</option>
                <option value="ms-inno">MS이노텍 (특수가스 R&D)</option>
                <option value="ms-corp">(주)MS홀딩스 (투자지주)</option>
                <option value="ms-eng">MS엔지니어링 (특정설비)</option>
              </select>
              <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#e7f2ff]/60 text-[20px]">
                expand_more
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Links & Copyright */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-[#e7f2ff]/60">
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={onOpenBranches}
              className="hover:text-white transition-colors"
            >
              {lang === 'KOR' ? '오시는 길' : 'Locations'}
            </button>
            <button
              onClick={onOpenInquiry}
              className="hover:text-white transition-colors"
            >
              {lang === 'KOR' ? '온라인 문의' : 'Online Inquiry'}
            </button>
            <button
              onClick={onOpenMSDS}
              className="hover:text-white transition-colors"
            >
              {lang === 'KOR' ? 'MSDS (물질안전보건자료)' : 'MSDS Safety Docs'}
            </button>
            <button
              onClick={() => alert('현재 (주)MS가스 채용이 진행 중입니다. 채용공고는 상반기 공채 포털을 확인해 주세요.')}
              className="hover:text-white transition-colors"
            >
              {lang === 'KOR' ? '채용정보' : 'Careers'}
            </button>
            <button
              onClick={onOpenPrivacy}
              className="font-bold text-white hover:underline transition-colors"
            >
              {lang === 'KOR' ? '개인정보처리방침' : 'Privacy Policy'}
            </button>
          </div>
          <p className="text-xs text-[#e7f2ff]/40">
            Copyright © 2025 (주)MS가스. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
