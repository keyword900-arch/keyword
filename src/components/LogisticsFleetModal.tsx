import React, { useState } from 'react';
import { X, Truck, ShieldCheck, Activity, Gauge, MapPin, Radio, RefreshCw } from 'lucide-react';
import { FLEET_STATUS_DATA } from '../data/portalData';

interface LogisticsFleetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogisticsFleetModal: React.FC<LogisticsFleetModalProps> = ({ isOpen, onClose }) => {
  const [fleets, setFleets] = useState(FLEET_STATUS_DATA);
  const [selectedFleet, setSelectedFleet] = useState(FLEET_STATUS_DATA[0]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  if (!isOpen) return null;

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setFleets(prev =>
        prev.map(f => ({
          ...f,
          progress: Math.min(100, f.progress + Math.floor(Math.random() * 4) + 1),
        }))
      );
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden bg-[#0E1E28] text-white rounded-2xl shadow-2xl border border-white/10 flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#162B38] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-[#10B981]/20 text-[#10B981]">
              <Radio className="w-5 h-5 animate-pulse" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">전국 초저온 가스 실시간 물류관제 센터</h3>
                <span className="px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] text-[11px] font-bold">
                  LIVE TELEMETRY
                </span>
              </div>
              <p className="text-xs text-[#cadcf0]/70">전국 128기 초저온 전용 탱크로리 GPS 및 센서 원격 관제</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              className={`p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 transition-all ${isRefreshing ? 'animate-spin' : ''}`}
              title="데이터 새로고침"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Top KPI row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-[#162B38]/80 border border-white/5 space-y-1">
              <span className="text-[11px] text-[#cadcf0]/70 font-medium">실시간 운행 선단</span>
              <p className="text-2xl font-extrabold text-[#38BDF8]">128<span className="text-sm font-normal text-white"> 기</span></p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#162B38]/80 border border-white/5 space-y-1">
              <span className="text-[11px] text-[#cadcf0]/70 font-medium">플랜트 가동률</span>
              <p className="text-2xl font-extrabold text-[#10B981]">99.9<span className="text-sm font-normal text-white"> %</span></p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#162B38]/80 border border-white/5 space-y-1">
              <span className="text-[11px] text-[#cadcf0]/70 font-medium">긴급 배차 대응</span>
              <p className="text-2xl font-extrabold text-[#38BDF8]">&lt; 3.2<span className="text-sm font-normal text-white"> h</span></p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#162B38]/80 border border-white/5 space-y-1">
              <span className="text-[11px] text-[#cadcf0]/70 font-medium">KGS 안전 수칙 준수</span>
              <p className="text-2xl font-extrabold text-[#10B981]">100<span className="text-sm font-normal text-white"> % SAFE</span></p>
            </div>
          </div>

          {/* Main split: Fleet list & Vehicle Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* List */}
            <div className="lg:col-span-7 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#cadcf0]/80">실시간 관제 대상 차량</h4>
              <div className="space-y-2.5">
                {fleets.map(item => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedFleet(item)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      selectedFleet.id === item.id
                        ? 'bg-[#162B38] border-[#38BDF8] shadow-lg shadow-[#38BDF8]/10'
                        : 'bg-[#162B38]/40 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="p-2 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                          <Truck className="w-4 h-4" />
                        </span>
                        <div>
                          <p className="text-sm font-bold text-white flex items-center gap-2">
                            <span>{item.id}</span>
                            <span className="text-xs font-normal text-[#38BDF8]">({item.type})</span>
                          </p>
                          <p className="text-xs text-[#cadcf0]/70">{item.route}</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#10B981]/20 text-[#10B981]">
                        {item.status}
                      </span>
                    </div>

                    <div className="mt-3 space-y-1.5">
                      <div className="flex justify-between text-[11px] text-[#cadcf0]/70">
                        <span>운행 진척도</span>
                        <span>{item.progress}%</span>
                      </div>
                      <div className="w-full bg-[#0E1E28] h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#005c95] to-[#38BDF8] h-full rounded-full transition-all duration-500"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Vehicle Telemetry Details */}
            <div className="lg:col-span-5 p-5 rounded-xl bg-[#162B38] border border-white/10 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h4 className="text-sm font-bold text-[#38BDF8]">차량 텔레메트리 상세</h4>
                  <span className="text-xs font-mono text-white/60">ID: {selectedFleet.id}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#cadcf0]/70">담당 운전원:</span>
                    <span className="font-semibold text-white">{selectedFleet.driver} 기사님 (위험물운송자격증 필)</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#cadcf0]/70">배송 경로:</span>
                    <span className="font-semibold text-white">{selectedFleet.route}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#cadcf0]/70">초저온 내부온도:</span>
                    <span className="font-bold text-[#38BDF8] font-mono">{selectedFleet.temp}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#cadcf0]/70">탱크 내압 (Pressure):</span>
                    <span className="font-bold text-[#10B981] font-mono">{selectedFleet.pressure} (정상)</span>
                  </div>
                </div>

                {/* Korea corridor simulation illustration */}
                <div className="p-3.5 rounded-lg bg-[#0E1E28] border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#cadcf0]/80">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>거점 물류망 연계 통제</span>
                    </span>
                    <span className="text-[#10B981]">안전 운행 중</span>
                  </div>
                  <p className="text-[11px] text-white/60 leading-relaxed">
                    본 차량은 한국가스안전공사(KGS) 기준 초저온 내압용기 안전 점검을 마쳤으며, GPS 실시간 위치 및 온도 센서가 본사 중앙통제실과 암호화 통신으로 연동되어 있습니다.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#cadcf0]/70">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>24시 긴급상황실 직통 가동</span>
                </span>
                <span className="text-[#38BDF8] font-mono">051-790-2000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
