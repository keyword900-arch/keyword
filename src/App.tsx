import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { ProductSection } from './components/ProductSection';
import { ServicesSection } from './components/ServicesSection';
import { QualitySection } from './components/QualitySection';
import { CorporateMosaic } from './components/CorporateMosaic';
import { NewsSection } from './components/NewsSection';
import { QuickAccessHub } from './components/QuickAccessHub';
import { Footer } from './components/Footer';

// Modals
import { InquiryModal } from './components/InquiryModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { LogisticsFleetModal } from './components/LogisticsFleetModal';
import { BranchLocatorModal } from './components/BranchLocatorModal';
import { NoticeDetailModal } from './components/NoticeDetailModal';
import { MSDSViewerModal } from './components/MSDSViewerModal';
import { CompanyModal } from './components/CompanyModal';
import { PrivacyModal } from './components/PrivacyModal';
import { ChatbotWidget } from './components/ChatbotWidget';
import { ProductItem, NewsItem, NEWS_DATA } from './data/portalData';

export default function App() {
  const [lang, setLang] = useState<'KOR' | 'ENG'>('KOR');
  const [activeNav, setActiveNav] = useState('home');

  // Modal States
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryInitialProduct, setInquiryInitialProduct] = useState('');
  
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [fleetModalOpen, setFleetModalOpen] = useState(false);
  const [branchesModalOpen, setBranchesModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<NewsItem | null>(null);
  
  const [msdsModalOpen, setMsdsModalOpen] = useState(false);
  const [msdsDefaultSearch, setMsdsDefaultSearch] = useState('');

  const [companyModalOpen, setCompanyModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const handleOpenInquiry = (productOrService?: string) => {
    setInquiryInitialProduct(productOrService || '');
    setInquiryOpen(true);
  };

  const handleOpenMSDS = (gasName?: string) => {
    setMsdsDefaultSearch(gasName ? gasName.replace(' 가스', '') : '');
    setMsdsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f7f9ff] text-[#0b1d2b] font-['Inter',sans-serif] selection:bg-[#0075bc] selection:text-white flex flex-col">
      {/* 1. Fixed Header */}
      <Header
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenBranches={() => setBranchesModalOpen(true)}
        lang={lang}
        setLang={setLang}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-20 bg-[#f7f9ff] flex-1">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <Hero
            onOpenInquiry={() => handleOpenInquiry()}
            onOpenFleetModal={() => setFleetModalOpen(true)}
            lang={lang}
          />

          {/* Core Capability Key Metrics Bar (Floating Bento Grid) */}
          <MetricsBar
            onOpenBranches={() => setBranchesModalOpen(true)}
            lang={lang}
          />

          {/* Product Showcase (6-Product Matrix) */}
          <ProductSection
            onSelectProduct={(prod) => setSelectedProduct(prod)}
            lang={lang}
          />

          {/* Total Engineering Services */}
          <ServicesSection
            onOpenInquiry={(srv) => handleOpenInquiry(srv)}
            lang={lang}
          />

          {/* Quality R&D & Regulatory Excellence */}
          <QualitySection
            onOpenNotice={() => setSelectedNotice(NEWS_DATA[0])}
            lang={lang}
          />

          {/* ESG & Corporate Overview Mosaic */}
          <CorporateMosaic
            onOpenFleetModal={() => setFleetModalOpen(true)}
            onOpenMSDS={() => handleOpenMSDS()}
            lang={lang}
          />

          {/* Notice & Press (Newsroom / Tenders) */}
          <NewsSection
            onSelectNotice={(notice) => setSelectedNotice(notice)}
            lang={lang}
          />

          {/* Quick Access Utility Hub */}
          <QuickAccessHub
            onOpenInquiry={() => handleOpenInquiry()}
            onOpenBranches={() => setBranchesModalOpen(true)}
            onOpenNews={() => setSelectedNotice(NEWS_DATA[0])}
            onOpenCompany={() => setCompanyModalOpen(true)}
            lang={lang}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer
        onOpenBranches={() => setBranchesModalOpen(true)}
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenMSDS={() => handleOpenMSDS()}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        lang={lang}
      />

      {/* Interactive Modals */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        initialProduct={inquiryInitialProduct}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenInquiry={(name) => handleOpenInquiry(name)}
        onOpenMSDS={(gas) => handleOpenMSDS(gas)}
      />

      <LogisticsFleetModal
        isOpen={fleetModalOpen}
        onClose={() => setFleetModalOpen(false)}
      />

      <BranchLocatorModal
        isOpen={branchesModalOpen}
        onClose={() => setBranchesModalOpen(false)}
      />

      <NoticeDetailModal
        notice={selectedNotice}
        onClose={() => setSelectedNotice(null)}
      />

      <MSDSViewerModal
        isOpen={msdsModalOpen}
        onClose={() => setMsdsModalOpen(false)}
        defaultSearch={msdsDefaultSearch}
      />

      <CompanyModal
        isOpen={companyModalOpen}
        onClose={() => setCompanyModalOpen(false)}
        lang={lang}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      {/* MS GAS AI Smart Chatbot */}
      <ChatbotWidget
        onOpenInquiry={(product) => handleOpenInquiry(product)}
        onOpenBranches={() => setBranchesModalOpen(true)}
        onOpenMSDS={(gas) => handleOpenMSDS(gas)}
        lang={lang}
      />
    </div>
  );
}
