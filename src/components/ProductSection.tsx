import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS_DATA, ProductItem } from '../data/portalData';

interface ProductSectionProps {
  onSelectProduct: (product: ProductItem) => void;
  lang: 'KOR' | 'ENG';
}

export const ProductSection: React.FC<ProductSectionProps> = ({ onSelectProduct, lang }) => {
  return (
    <section className="w-full py-space-3xl" id="product-showcase">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8eafe] text-[#005c95] font-label-badge text-label-badge uppercase">
              <span>{lang === 'KOR' ? 'Product Portfolio' : 'Product Lineup'}</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-[#0b1d2b]">
              {lang === 'KOR'
                ? '다양한 산업분야를 아우르는 고부가가치형 가스산업'
                : 'High-Value Gas Energy Solutions Across Diverse Industries'}
            </h2>
            <p className="font-body-lg text-body-lg text-[#404751] max-w-2xl">
              {lang === 'KOR'
                ? '초순도 정밀 제어와 품질 규격 체계를 통과한 6대 핵심 가스 및 설비 라인업을 안전하고 신속하게 납품합니다.'
                : 'Safely and reliably supplying our 6 core gas portfolios and engineering equipment adhering to ultra-purity certification standards.'}
            </p>
          </div>

          <button
            onClick={() => onSelectProduct(PRODUCTS_DATA[0])}
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#005c95] text-white font-label-button text-label-button shadow-sm hover:bg-[#0075bc] transition-all self-start md:self-auto shrink-0 active:scale-95"
          >
            <span>{lang === 'KOR' ? '전체 제품군 카탈로그 보기' : 'View Full Catalog'}</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>

        {/* 6-Product Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              role="button"
              tabIndex={0}
              className="group flex flex-col rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#c0c7d2]/30 cursor-pointer hover:border-[#0075bc]/40 hover:-translate-y-1"
            >
              {/* Image banner */}
              <div className="relative h-56 overflow-hidden bg-[#0E1E28]">
                <img
                  src={product.imageUrl}
                  alt={product.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0E1E28]/80 backdrop-blur-md text-white font-label-badge text-label-badge">
                  {product.badge}
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-headline-md text-headline-md text-[#0b1d2b] group-hover:text-[#005c95] transition-colors">
                    {product.title}
                  </h3>
                  <p className="font-body-md text-body-md text-[#404751] line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between text-[#005c95] font-label-button text-label-button border-t border-gray-100">
                  <span className="group-hover:underline">{product.linkText}</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1.5 transition-transform">
                    east
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
