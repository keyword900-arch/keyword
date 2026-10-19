import React from 'react';
import { X, Check, FileDown, ShieldCheck, Truck, Layers, ArrowRight } from 'lucide-react';
import { ProductItem } from '../data/portalData';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenInquiry: (productName: string) => void;
  onOpenMSDS: (gasName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenInquiry,
  onOpenMSDS,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-[#c0c7d2]/40"
        role="dialog"
        aria-modal="true"
      >
        {/* Banner with Image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#0E1E28]">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E28] via-[#0E1E28]/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-white/80 hover:text-white rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[#0075bc] text-white text-xs font-bold tracking-wider uppercase">
              {product.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{product.title} 상세 스펙</h3>
            <p className="text-sm text-[#e7f2ff]/90 max-w-xl">{product.description}</p>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#f7f9ff] border border-[#d8eafe] space-y-1">
              <span className="text-xs font-semibold text-[#005c95] uppercase">기호 및 성분 (Formula)</span>
              <p className="text-lg font-bold text-[#0b1d2b] font-mono">{product.specs.chemicalFormula}</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f7f9ff] border border-[#d8eafe] space-y-1">
              <span className="text-xs font-semibold text-[#005c95] uppercase">순도 등급 (Purity Level)</span>
              <p className="text-lg font-bold text-[#0b1d2b]">{product.specs.purity}</p>
            </div>
          </div>

          {/* Supply Methods */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-[#005c95]" />
              <h4 className="font-bold text-[#0b1d2b] text-base">공급 인프라 및 배송 방식</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.specs.supplyMethods.map((method, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-[#edf4ff]/60 border border-[#d3e4f8] text-xs text-[#0b1d2b]">
                  <Check className="w-4 h-4 text-[#0075bc] shrink-0" />
                  <span className="font-medium">{method}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Applications */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#005c95]" />
              <h4 className="font-bold text-[#0b1d2b] text-base">주요 적용 산업 및 공정</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.specs.applications.map((app, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-gray-50 border border-gray-100 text-xs text-[#404751]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#005c95] mt-1.5 shrink-0" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications and Compliance */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#10B981]" />
              <h4 className="font-bold text-[#0b1d2b] text-base">품질 인증 및 KGS 법정 규격</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.specs.certifications.map((cert, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-md bg-[#edf4ff] text-[#005c95] text-xs font-semibold border border-[#c4dcff]">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-100">
            <button
              onClick={() => {
                onClose();
                onOpenMSDS(product.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 hover:border-gray-400 text-xs font-semibold text-[#404751] hover:bg-gray-50 transition-colors"
            >
              <FileDown className="w-4 h-4 text-[#005c95]" />
              <span>MSDS 물질안전보건자료 확인</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenInquiry(product.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#005c95] hover:bg-[#0075bc] text-white text-xs font-bold transition-all shadow-md shadow-[#005c95]/20"
            >
              <span>이 제품 맞춤 견적 신청</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
