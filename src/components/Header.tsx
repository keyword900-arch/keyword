import React, { useState } from 'react';
import { Menu, X, ArrowRight, User } from 'lucide-react';

interface HeaderProps {
  onOpenInquiry: () => void;
  onOpenBranches: () => void;
  lang: 'KOR' | 'ENG';
  setLang: (lang: 'KOR' | 'ENG') => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenInquiry,
  onOpenBranches,
  lang,
  setLang,
  activeNav,
  setActiveNav,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'company', label: lang === 'KOR' ? '회사소개' : 'About Us', href: '#company-overview' },
    { id: 'products', label: lang === 'KOR' ? '제품소개' : 'Products', href: '#product-showcase' },
    { id: 'services', label: lang === 'KOR' ? '서비스' : 'Services', href: '#services-section' },
    { id: 'facilities', label: lang === 'KOR' ? '생산설비' : 'Facilities', href: '#facilities-section' },
    { id: 'esg', label: lang === 'KOR' ? 'ESG 경영' : 'ESG Management', href: '#esg-section' },
    { id: 'support', label: lang === 'KOR' ? '고객지원' : 'Support', href: '#support-section' },
  ];

  const handleNavClick = (id: string, href: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e2efff]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <img
              alt="MS GAS Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/AEtjO1VMJnCvc9MOk7nh58zjhX4nM1NwV2No1glXXDB9XHlCIjkJZOw4Xgpy-OTAlVRYcXcAigkhcXtpGfIyWdWDaQF2gRmfs_cIBy7LZVqm5vyqEtdfysLXNjnJS5piSpB32hj-GoJvguDQNojm-v7fUYkTmAeg16ZwJ1cUnpBYJL1vpHopDhSRxY9zSwwH0R1HkkS8amg49V1e-mPwv0UYXh5brA2VMO7OrfClB8BhVigiVuPWyUmsFus8tvE"
              referrerPolicy="no-referrer"
            />
            <span className="font-headline-sm text-headline-sm text-[#005c95] tracking-tight font-bold hidden sm:inline-block">
              {lang === 'KOR' ? '(주)MS가스' : 'MS GAS Co., Ltd.'}
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.id, link.href);
              }}
              className={`font-body-md text-body-md py-2 transition-colors whitespace-nowrap shrink-0 ${
                activeNav === link.id
                  ? 'text-[#005c95] font-semibold border-b-2 border-[#005c95]'
                  : 'text-[#404751] hover:text-[#005c95]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Language Switcher */}
          <div className="hidden sm:flex items-center bg-[#edf4ff] rounded-full p-1 text-[#404751] text-label-badge font-label-badge">
            <button
              onClick={() => setLang('KOR')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === 'KOR'
                  ? 'bg-white text-[#005c95] shadow-sm font-bold'
                  : 'text-[#404751] hover:text-[#0b1d2b] font-medium'
              }`}
              type="button"
            >
              KOR
            </button>
            <button
              onClick={() => setLang('ENG')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === 'ENG'
                  ? 'bg-white text-[#005c95] shadow-sm font-bold'
                  : 'text-[#404751] hover:text-[#0b1d2b] font-medium'
              }`}
              type="button"
            >
              ENG
            </button>
          </div>

          {/* Inquiry Button */}
          <button
            onClick={onOpenInquiry}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#005c95] text-white font-label-button text-label-button hover:bg-[#0075bc] transition-all shadow-sm whitespace-nowrap shrink-0 hover:shadow-md active:scale-95"
            type="button"
          >
            <span>{lang === 'KOR' ? '온라인 문의' : 'Online Inquiry'}</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>

          {/* User Profile / Portal Quick Link */}
          <button
            onClick={onOpenBranches}
            title={lang === 'KOR' ? '사업소 및 오시는 길' : 'Branches & Locations'}
            className="w-8 h-8 rounded-full bg-[#005c95] text-white flex items-center justify-center shrink-0 hover:bg-[#0075bc] transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="전체 메뉴 열기"
            className="xl:hidden p-2 text-[#404751] hover:text-[#0b1d2b] transition-colors"
            type="button"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <span className="material-symbols-outlined text-[24px]">menu</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#d8eafe] bg-white px-6 py-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <span className="text-xs font-bold text-gray-500">LANGUAGE</span>
            <div className="flex gap-2">
              <button
                onClick={() => setLang('KOR')}
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  lang === 'KOR' ? 'bg-[#005c95] text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                KOR
              </button>
              <button
                onClick={() => setLang('ENG')}
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  lang === 'ENG' ? 'bg-[#005c95] text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                ENG
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id, link.href);
                }}
                className={`text-sm py-2 font-medium transition-colors ${
                  activeNav === link.id ? 'text-[#005c95] font-bold' : 'text-[#404751]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#005c95] text-white text-sm font-bold shadow-md"
            >
              <span>{lang === 'KOR' ? '온라인 문의 신청' : 'Online Inquiry'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBranches();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#edf4ff] text-[#005c95] text-xs font-bold"
            >
              <span>{lang === 'KOR' ? '전국 17개 사업소 위치 안내' : 'Nationwide Branches'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
