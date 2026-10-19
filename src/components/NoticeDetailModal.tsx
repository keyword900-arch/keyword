import React, { useState } from 'react';
import { X, Calendar, User, FileText, Download, CheckCircle, Clock } from 'lucide-react';
import { NewsItem } from '../data/portalData';

interface NoticeDetailModalProps {
  notice: NewsItem | null;
  onClose: () => void;
}

export const NoticeDetailModal: React.FC<NoticeDetailModalProps> = ({ notice, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!notice) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0E1E28] text-white border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#0075bc] text-white text-xs font-bold">
              {notice.category}
            </span>
            <span className="text-xs text-[#cadcf0]">MS가스 공식 공지 / 입찰공고</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="space-y-3 pb-4 border-b border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0b1d2b] leading-snug">
              {notice.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#404751]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#005c95]" />
                <span>등록일: {notice.date}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#005c95]" />
                <span>담당부서: {notice.author}</span>
              </span>
              {notice.deadline && (
                <>
                  <span>·</span>
                  <span className="flex items-center gap-1.5 text-red-600 font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>마감기한: {notice.deadline}</span>
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Attachment Box if any */}
          {notice.attachmentName && (
            <div className="p-4 rounded-xl bg-[#edf4ff] border border-[#c4dcff] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <FileText className="w-6 h-6 text-[#005c95] shrink-0" />
                <div className="truncate">
                  <p className="text-xs font-bold text-[#005c95]">첨부 공고문 및 제안요청서(RFP)</p>
                  <p className="text-xs text-[#404751] truncate">{notice.attachmentName}</p>
                </div>
              </div>
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#005c95] hover:bg-[#0075bc] text-white text-xs font-semibold shrink-0 transition-colors"
              >
                {downloaded ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-300" />
                    <span>다운로드 완료</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>파일 다운로드</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Body text */}
          <div className="prose prose-sm max-w-none text-sm text-[#0b1d2b] whitespace-pre-line leading-relaxed bg-[#f7f9ff] p-5 rounded-xl border border-gray-100">
            {notice.content}
          </div>

          <div className="p-4 rounded-xl bg-gray-50 text-xs text-[#404751] space-y-1">
            <p className="font-semibold text-[#0b1d2b]">입찰 및 제안서 접수 문의:</p>
            <p>부산광역시 사상구 낙동대로 1416 (주)MS가스 기술기획실 / 경영지원처</p>
            <p>전화: 051-790-2000 | 전자우편: bid@msgas.co.kr</p>
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
