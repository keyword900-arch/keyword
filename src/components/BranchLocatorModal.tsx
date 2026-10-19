import React, { useState } from 'react';
import { X, MapPin, Phone, Printer, User, Navigation, Check } from 'lucide-react';
import { BRANCHES_DATA, BranchOffice } from '../data/portalData';

interface BranchLocatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BranchLocatorModal: React.FC<BranchLocatorModalProps> = ({ isOpen, onClose }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('전체');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!isOpen) return null;

  const regions = ['전체', '수도권', '부산/영남권', '호남권', '충청권'];

  const filteredBranches = selectedRegion === '전체'
    ? BRANCHES_DATA
    : BRANCHES_DATA.filter(b => b.region.includes(selectedRegion));

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

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
              <MapPin className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold">전국 본사 및 직영 사업소 안내 (오시는 길)</h3>
              <p className="text-xs text-[#cadcf0]">전국 8대 권역 거점과 17개 직영 네트워크를 통해 신속한 직배송을 책임집니다.</p>
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

        {/* Region Filter Bar */}
        <div className="px-6 py-3 bg-[#edf4ff] border-b border-[#d8eafe] flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedRegion === region
                    ? 'bg-[#005c95] text-white shadow-sm'
                    : 'bg-white text-[#404751] hover:bg-white/80'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
          {copiedText && (
            <span className="text-xs text-[#10B981] font-semibold flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>{copiedText} 복사되었습니다.</span>
            </span>
          )}
        </div>

        {/* Branch List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#f7f9ff]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredBranches.map((branch) => (
              <div
                key={branch.id}
                className="p-5 rounded-xl bg-white border border-[#c0c7d2]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#edf4ff] text-[#005c95] text-[11px] font-bold">
                      {branch.region}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">ID: {branch.id}</span>
                  </div>
                  <h4 className="text-base font-bold text-[#0b1d2b]">{branch.name}</h4>
                  <p className="text-xs text-[#404751] flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#005c95] shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 space-y-2 text-xs text-[#404751]">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-gray-400" />
                      <span>{branch.phone}</span>
                    </span>
                    <button
                      onClick={() => copyToClipboard(branch.phone, '전화번호가')}
                      className="text-[11px] text-[#005c95] hover:underline"
                    >
                      번호복사
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Printer className="w-3.5 h-3.5 text-gray-400" />
                      <span>FAX: {branch.fax}</span>
                    </span>
                    <span className="text-gray-400">·</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-gray-400" />
                      <span>{branch.manager}</span>
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs">
                  <button
                    onClick={() => copyToClipboard(branch.address, '주소가')}
                    className="w-full py-2 rounded-lg bg-[#edf4ff] hover:bg-[#d8eafe] text-[#005c95] font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>주소 복사 및 길찾기</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-xs text-[#404751] gap-2 shrink-0">
          <p>전국 통합 고객센터: <strong>051-790-2000</strong> (평일 08:30 ~ 18:00 / 긴급상황실 24시간 연중무휴)</p>
          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
