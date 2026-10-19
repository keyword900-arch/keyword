import React, { useState } from 'react';
import { X, Search, FileDown, ShieldAlert, CheckCircle, AlertTriangle, PhoneCall } from 'lucide-react';
import { MSDS_DATABASE } from '../data/portalData';

interface MSDSViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSearch?: string;
}

export const MSDSViewerModal: React.FC<MSDSViewerModalProps> = ({
  isOpen,
  onClose,
  defaultSearch = '',
}) => {
  const [searchTerm, setSearchTerm] = useState(defaultSearch);
  const [downloadedItem, setDownloadedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  const filtered = MSDS_DATABASE.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.formula.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.cas.includes(searchTerm)
  );

  const handleDownload = (code: string) => {
    setDownloadedItem(code);
    setTimeout(() => setDownloadedItem(null), 2500);
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
            <span className="p-2 rounded-lg bg-[#F59E0B]/20 text-[#F59E0B]">
              <ShieldAlert className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold">MSDS (물질안전보건자료) 실시간 통합 검색</h3>
              <p className="text-xs text-[#cadcf0]">산업안전보건법 및 화학물질관리법(화관법) 기준 공인 안전보건자료</p>
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

        {/* Search Bar */}
        <div className="p-4 sm:p-6 bg-[#f7f9ff] border-b border-gray-200 shrink-0">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="가스명 (예: 질소, 산소, 아르곤, 프로판, NH3) 또는 CAS 번호 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-sm pl-11 pr-4 py-2.5 rounded-full border border-gray-300 focus:outline-none focus:border-[#005c95] focus:ring-2 focus:ring-[#005c95]/20 bg-white"
            />
          </div>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 bg-[#edf4ff]/30">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-gray-500 text-sm">
              <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              검색어와 일치하는 MSDS 자료가 없습니다. 본사 안전환경팀(051-790-2000)으로 문의 바랍니다.
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.code}
                className="p-4 rounded-xl bg-white border border-[#c0c7d2]/40 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-gray-100 text-gray-600 font-semibold">
                      {item.code}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-[#0b1d2b] truncate">{item.name}</h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#404751]">
                    <span>분자식: <strong className="font-mono text-[#005c95]">{item.formula}</strong></span>
                    <span>·</span>
                    <span>CAS No: <strong className="font-mono">{item.cas}</strong></span>
                    <span>·</span>
                    <span>{item.unNo}</span>
                    <span>·</span>
                    <span className="text-amber-700 font-medium">{item.hazard}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-gray-500 hidden md:inline">{item.grade}</span>
                  <button
                    onClick={() => handleDownload(item.code)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#005c95] hover:bg-[#0075bc] text-white text-xs font-semibold transition-colors"
                  >
                    {downloadedItem === item.code ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-300" />
                        <span>다운로드 완료</span>
                      </>
                    ) : (
                      <>
                        <FileDown className="w-3.5 h-3.5" />
                        <span>MSDS PDF</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#404751] shrink-0">
          <p className="flex items-center gap-1.5">
            <PhoneCall className="w-4 h-4 text-[#005c95]" />
            <span>화학물질 비상대응 및 유출사고 방제 긴급 핫라인: <strong>051-790-2000</strong></span>
          </p>
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
