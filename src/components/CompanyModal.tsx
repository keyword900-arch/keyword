import React from 'react';
import { X, Building2, Award, Shield, CheckCircle2, Globe, TrendingUp } from 'lucide-react';

interface CompanyModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'KOR' | 'ENG';
}

export const CompanyModal: React.FC<CompanyModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0E1E28] text-white border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-[#38BDF8]/20 text-[#38BDF8]">
              <Building2 className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold">
                {lang === 'KOR' ? '(주)MS가스 기업소개 & 경영철학' : 'About MS GAS Co., Ltd.'}
              </h3>
              <p className="text-xs text-[#cadcf0]">
                {lang === 'KOR' ? '1974년 창립 이래 50년의 역사와 미래 에너지 비전' : '50 Years of Heritage & Future Clean Energy Vision'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#f7f9ff]">
          {/* Mission & Vision */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-[#005c95] to-[#0075bc] text-white space-y-3 shadow-md">
            <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider">
              Management Philosophy
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold leading-snug">
              "안전 최우선 실천과 기술 혁신으로 고객과 함께 성장하는 클린에너지 선도기업"
            </h4>
            <p className="text-sm text-[#e7f2ff]/90 leading-relaxed">
              (주)MS가스는 반세기 동안 대한민국 중화학 및 반도체·조선 첨단 제조업 현장의 든든한 에너지 혈관이 되어 왔습니다. 규제자유특구 암모니아 벙커링 및 친환경 수소 인프라 실증을 통해 미래 넷제로 탄소중립 사회를 견인합니다.
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-white border border-gray-200 space-y-2">
              <Shield className="w-6 h-6 text-[#005c95]" />
              <h5 className="font-bold text-[#0b1d2b]">무재해 안전 경영</h5>
              <p className="text-xs text-[#404751] leading-relaxed">
                엄격한 KGS 고압가스 안전관리 수칙 준수와 IoT 원격 24시간 감시 시스템을 통한 무사고 달성.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-gray-200 space-y-2">
              <Globe className="w-6 h-6 text-[#005c95]" />
              <h5 className="font-bold text-[#0b1d2b]">전국 & 글로벌 인프라</h5>
              <p className="text-xs text-[#404751] leading-relaxed">
                전국 8개 권역 핵심 거점과 17개 직영 영업소, 128기 초저온 전용 탱크로리 선단 운영.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-gray-200 space-y-2">
              <TrendingUp className="w-6 h-6 text-[#005c95]" />
              <h5 className="font-bold text-[#0b1d2b]">초순도 정밀 기술력</h5>
              <p className="text-xs text-[#404751] leading-relaxed">
                반도체·의료용 5N~7N 초고순도 가스 분석 및 KOLAS 공인 소급성 표준가스 보증.
              </p>
            </div>
          </div>

          {/* Key Milestones Timeline */}
          <div className="space-y-4">
            <h5 className="font-bold text-base text-[#0b1d2b] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#005c95]" />
              <span>주요 연혁 (History)</span>
            </h5>
            <div className="space-y-3 border-l-2 border-[#005c95]/30 pl-4 ml-2 text-xs">
              <div className="relative space-y-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#005c95] absolute -left-[21px] top-1" />
                <span className="font-bold text-[#005c95]">2024 ~ 현재</span>
                <p className="text-[#0b1d2b] font-semibold">울산 규제자유특구 암모니아 TTS 벙커링 인프라 구축 R&D 주관 및 은탑산업훈장 수훈</p>
              </div>
              <div className="relative space-y-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#005c95] absolute -left-[21px] top-1" />
                <span className="font-bold text-[#005c95]">2020</span>
                <p className="text-[#0b1d2b] font-semibold">경남 암모니아 혼소 추진시스템 선박 규제자유특구 실증특례 기업 선정</p>
              </div>
              <div className="relative space-y-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#005c95] absolute -left-[21px] top-1" />
                <span className="font-bold text-[#005c95]">2015</span>
                <p className="text-[#0b1d2b] font-semibold">식품의약품안전처 의약품 제조 품질관리기준(GMP) 공인 적합 인증</p>
              </div>
              <div className="relative space-y-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#005c95] absolute -left-[21px] top-1" />
                <span className="font-bold text-[#005c95]">2005</span>
                <p className="text-[#0b1d2b] font-semibold">초저온 액화가스 전용 100기 돌파 및 전국 24시간 통합 물류관제센터 개소</p>
              </div>
              <div className="relative space-y-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#005c95] absolute -left-[21px] top-1" />
                <span className="font-bold text-[#005c95]">1974</span>
                <p className="text-[#0b1d2b] font-semibold">(주)MS가스 설립 (고압가스 충전 및 판매 사업 개시)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#005c95] hover:bg-[#0075bc] text-white text-xs font-semibold transition-colors"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
