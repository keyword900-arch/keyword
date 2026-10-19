import React, { useState } from 'react';
import { X, CheckCircle, Send, FileText, Phone, Mail, Building2, MapPin, AlertCircle } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, initialProduct = '' }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    region: '부산/경남',
    gasCategory: initialProduct ? '특정 가스 문의' : '산업용 가스 (N₂, O₂, Ar, CO₂)',
    selectedGas: initialProduct || '',
    supplyType: '초저온 액체 탱크로리 (Bulk)',
    monthlyVolume: '월 5톤 ~ 20톤',
    message: '',
    agreePrivacy: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryRefNo, setInquiryRefNo] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName.trim() || !formData.contactPerson.trim() || !formData.phone.trim()) {
      setErrorMsg('회사명, 담당자 성명, 연락처는 필수 입력 항목입니다.');
      return;
    }
    if (!formData.agreePrivacy) {
      setErrorMsg('개인정보 수집 및 이용 동의가 필요합니다.');
      return;
    }

    // Generate reference code
    const randomCode = 'MSG-' + new Date().getFullYear() + '-' + Math.floor(100000 + Math.random() * 900000);
    setInquiryRefNo(randomCode);
    setSubmitted(true);
    setErrorMsg('');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-[#c0c7d2]/40"
        role="dialog" 
        aria-modal="true"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#0E1E28] text-white border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-[#38BDF8]/20 text-[#38BDF8]">
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold">온라인 기술 상담 및 견적 신청</h3>
              <p className="text-xs text-[#cadcf0]">고압가스 공급 설계 및 최적화 견적을 신속히 안내해 드립니다.</p>
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

        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-[#0b1d2b]">상담 신청이 정상 접수되었습니다.</h4>
              <p className="text-sm text-[#404751] max-w-md mx-auto">
                접수번호: <strong className="text-[#005c95] font-mono">{inquiryRefNo}</strong><br/>
                전문 엔지니어가 고객님의 요청사항을 검토 후 2영업시간 이내에 기재해주신 연락처로 상담을 드립니다.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#edf4ff] text-left text-xs text-[#404751] space-y-1.5 max-w-md mx-auto">
              <p><strong>요청업체:</strong> {formData.companyName} ({formData.contactPerson} 담당자님)</p>
              <p><strong>희망품목:</strong> {formData.gasCategory} - {formData.supplyType}</p>
              <p><strong>공급지역:</strong> {formData.region}</p>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-full bg-[#005c95] hover:bg-[#0075bc] text-white text-sm font-semibold transition-all shadow-md"
            >
              확인 및 창 닫기
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {errorMsg && (
              <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Step 1: Gas requirements */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                <span className="w-6 h-6 rounded-full bg-[#005c95] text-white text-xs font-bold flex items-center justify-center">1</span>
                <h4 className="font-bold text-[#0b1d2b] text-sm sm:text-base">공급 요청 품목 및 방식</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#404751] mb-1.5">가스 분류</label>
                  <select
                    value={formData.gasCategory}
                    onChange={(e) => setFormData({ ...formData, gasCategory: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#005c95] focus:ring-1 focus:ring-[#005c95] bg-white"
                  >
                    <option value="산업용 가스 (N₂, O₂, Ar, CO₂)">산업용 가스 (N₂, O₂, Ar, CO₂)</option>
                    <option value="연료용 가스 (프로판, 부탄, 프라멕스)">연료용 가스 (프로판, 부탄, 프라멕스)</option>
                    <option value="특수 가스 (5N~7N 초고순도, 반도체용)">특수 가스 (5N~7N 초고순도, 반도체용)</option>
                    <option value="의료용 가스 (GMP 의료용 산소, 마취가스)">의료용 가스 (GMP 의료용 산소, 마취가스)</option>
                    <option value="표준 가스 (KOLAS 공인 교정 혼합가스)">표준 가스 (KOLAS 공인 교정 혼합가스)</option>
                    <option value="엔지니어링 설비 (저장탱크, 배관공사)">엔지니어링 설비 (저장탱크, 배관공사)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#404751] mb-1.5">공급 및 보관 방식</label>
                  <select
                    value={formData.supplyType}
                    onChange={(e) => setFormData({ ...formData, supplyType: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#005c95] focus:ring-1 focus:ring-[#005c95] bg-white"
                  >
                    <option value="초저온 액체 탱크로리 (Bulk)">초저온 액체 탱크로리 (Bulk)</option>
                    <option value="초저온 LGC 용기 (160L~250L)">초저온 LGC 용기 (160L~250L)</option>
                    <option value="고압 실린더 번들/랙 (Bundle)">고압 실린더 번들/랙 (Bundle)</option>
                    <option value="개별 고압 용기 (47L 실린더)">개별 고압 용기 (47L 실린더)</option>
                    <option value="현장 플랜트 배관 직공급 (On-site)">현장 플랜트 배관 직공급 (On-site)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#404751] mb-1.5">예상 월간 사용량</label>
                  <select
                    value={formData.monthlyVolume}
                    onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#005c95] focus:ring-1 focus:ring-[#005c95] bg-white"
                  >
                    <option value="소량 (월 1톤 미만 / 용기 공급)">소량 (월 1톤 미만 / 용기 공급)</option>
                    <option value="월 1톤 ~ 5톤">월 1톤 ~ 5톤</option>
                    <option value="월 5톤 ~ 20톤">월 5톤 ~ 20톤</option>
                    <option value="월 20톤 이상 (대용량 벌크)">월 20톤 이상 (대용량 벌크)</option>
                    <option value="설비 신설 및 공사 상담">설비 신설 및 공사 상담</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#404751] mb-1.5">납품 희망 지역</label>
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#005c95] focus:ring-1 focus:ring-[#005c95] bg-white"
                  >
                    <option value="부산/경남">부산 / 경남권 (본사 직영)</option>
                    <option value="수도권 (서울/경기/인천)">수도권 (서울 / 경기 / 인천)</option>
                    <option value="울산/경북 (포항)">울산 / 경북 (포항/구미)</option>
                    <option value="충청권 (당진/아산/천안)">충청권 (당진 / 아산 / 천안)</option>
                    <option value="호남권 (여수/광양/군산)">호남권 (여수 / 광양 / 군산)</option>
                    <option value="강원 및 제주">강원 및 제주</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Customer Contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                <span className="w-6 h-6 rounded-full bg-[#005c95] text-white text-xs font-bold flex items-center justify-center">2</span>
                <h4 className="font-bold text-[#0b1d2b] text-sm sm:text-base">신청 고객사 정보</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#404751] mb-1.5">회사명 / 기관명 *</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="(주)한국엔지니어링"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full text-sm pl-9 pr-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#005c95] focus:ring-1 focus:ring-[#005c95]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#404751] mb-1.5">담당자 성명 / 직급 *</label>
                  <input
                    type="text"
                    placeholder="홍길동 팀장"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#005c95] focus:ring-1 focus:ring-[#005c95]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#404751] mb-1.5">연락처 *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      placeholder="010-1234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-sm pl-9 pr-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#005c95] focus:ring-1 focus:ring-[#005c95]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#404751] mb-1.5">이메일 주소</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="contact@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-sm pl-9 pr-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#005c95] focus:ring-1 focus:ring-[#005c95]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#404751] mb-1.5">문의 내용 및 요구 조건</label>
                <textarea
                  rows={3}
                  placeholder="공급 시기, 필요 압력/순도 요구 규격, 현장 특이사항 등을 기재해 주시면 더 신속하게 견적을 산출해 드립니다."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-sm p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#005c95] focus:ring-1 focus:ring-[#005c95]"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-[#404751]">
                  <input
                    type="checkbox"
                    checked={formData.agreePrivacy}
                    onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                    className="w-4 h-4 text-[#005c95] rounded border-gray-300 focus:ring-[#005c95]"
                  />
                  <span>개인정보 수집 및 이용(견적 상담 및 납품 안내 목적)에 동의합니다.</span>
                </label>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-100">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
              >
                취소
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#005c95] hover:bg-[#0075bc] text-white text-sm font-semibold transition-all shadow-md shadow-[#005c95]/20"
              >
                <Send className="w-4 h-4" />
                <span>견적 상담 신청하기</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
