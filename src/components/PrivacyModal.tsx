import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-6 py-4 bg-[#0E1E28] text-white border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#38BDF8]" />
            <h3 className="text-base font-bold">개인정보처리방침</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 text-xs text-[#404751] leading-relaxed">
          <h4 className="font-bold text-[#0b1d2b] text-sm">(주)MS가스 개인정보 보호 규정</h4>
          <p>
            (주)MS가스(이하 '회사')는 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다.
          </p>
          <div className="space-y-1">
            <p className="font-bold text-[#0b1d2b]">1. 개인정보의 수집 및 이용 목적</p>
            <p>- 산업용·특수가스 공급 견적 산출 및 기술 상담 회신</p>
            <p>- 계약 체결, 가스 배송지 확인 및 정기 안전관리 지원</p>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-[#0b1d2b]">2. 수집하는 개인정보 항목</p>
            <p>- 필수항목: 회사명, 담당자 성명, 연락처, 배송지역, 희망 가스 품목</p>
            <p>- 선택항목: 이메일 주소, 요청 메시지</p>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-[#0b1d2b]">3. 보유 및 이용 기간</p>
            <p>- 견적 상담 및 문의 처리 완료 후 3년간 보관 (상거래 관련 법령 준수)</p>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-[#0b1d2b]">4. 개인정보 보호책임자</p>
            <p>- 부서: 경영지원본부 정보보안팀 / 연락처: 051-790-2000</p>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded-full bg-[#005c95] text-white text-xs font-semibold"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
