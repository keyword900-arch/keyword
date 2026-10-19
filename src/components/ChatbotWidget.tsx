import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, RotateCcw, ChevronDown, ExternalLink } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface ChatbotWidgetProps {
  onOpenInquiry: (initialProduct?: string) => void;
  onOpenBranches: () => void;
  onOpenMSDS: (gasName?: string) => void;
  lang: 'KOR' | 'ENG';
}

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({
  onOpenInquiry,
  onOpenBranches,
  onOpenMSDS,
  lang,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        lang === 'KOR'
          ? `안녕하세요! **(주)MS가스** 스마트 AI 상담 어시스턴트 **가스봇(GasBot)**입니다. 🤖\n\n산업용·의료용·특수가스 스펙, 전국 128기 초저온 탱크로리 배송, 또는 맞춤 견적에 대해 궁금하신 점을 편하게 물어보세요.`
          : `Hello! I am **GasBot**, the AI assistant of **MS GAS Co., Ltd.** 🤖\n\nFeel free to ask about industrial/medical/specialty gas specifications, nationwide cryogenic logistics delivery, or customized quotation requests!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickPrompts = [
    { label: '산업용 가스 공급 방식', prompt: '산업용 질소와 산소의 공급 방식(벌크로리, LGC 용기, 실린더)에 대해 알려주세요.' },
    { label: '반도체용 5N~7N 특수가스', prompt: '반도체 공정에 쓰이는 5N~7N 초고순도 특수가스 순도 인증과 품목을 안내해 주세요.' },
    { label: '의료용 산소 GMP 인증', prompt: '의료용 산소의 GMP 품질관리기준 및 병원 공급 시스템에 대해 설명해 주세요.' },
    { label: '가스 공급 견적 문의', prompt: '공장에 가스 공급 견적을 신청하려면 어떤 절차로 진행되나요?' },
    { label: '전국 사업소 및 고객센터', prompt: '부산 본사와 전국 직영 영업소의 위치 및 연락처를 알려주세요.' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || input.trim();
    if (!text || loading) return;

    const userMessage: Message = {
      id: String(Date.now()),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const botReply = data.reply || '답변을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.';

      const botMessage: Message = {
        id: String(Date.now() + 1),
        role: 'assistant',
        content: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMsg: Message = {
        id: String(Date.now() + 1),
        role: 'assistant',
        content:
          '일시적인 네트워크 지연이 발생했습니다. 즉각적인 기술 상담은 본사 고객센터(051-790-2000) 또는 상단의 [온라인 문의] 버튼을 이용해 주시기 바랍니다.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content:
          lang === 'KOR'
            ? `안녕하세요! **(주)MS가스** 스마트 AI 상담 어시스턴트 **가스봇(GasBot)**입니다. 🤖\n\n산업용·의료용·특수가스 스펙, 전국 128기 초저온 탱크로리 배송, 또는 맞춤 견적에 대해 궁금하신 점을 편하게 물어보세요.`
            : `Hello! I am **GasBot**, the AI assistant of **MS GAS Co., Ltd.** 🤖\n\nFeel free to ask about industrial/medical/specialty gas specifications, nationwide cryogenic logistics delivery, or customized quotation requests!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  // Helper to render markdown bold and newlines
  const renderMessageContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      // replace **bold** with <strong>
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={idx} className={line.trim() === '' ? 'h-2' : 'leading-relaxed'}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pIdx} className="font-bold text-[#0b1d2b] dark:text-white">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[92vw] sm:w-[420px] h-[580px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-[#c0c7d2]/40 flex flex-col overflow-hidden animate-fade-in transition-all">
          {/* Header */}
          <div className="px-5 py-3.5 bg-[#0E1E28] text-white flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-[#0075bc] flex items-center justify-center text-white shadow-md">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] ring-2 ring-[#0E1E28]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-white">가스봇 (GasBot)</h4>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#38BDF8]/20 text-[#38BDF8] font-semibold flex items-center gap-0.5">
                    <Sparkles className="w-2.5 h-2.5" /> AI
                  </span>
                </div>
                <p className="text-[11px] text-[#cadcf0]/80">MS가스 24시간 스마트 기술상담</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="대화 초기화"
                className="p-1.5 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="닫기"
                className="p-1.5 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Action Bar under header */}
          <div className="px-3 py-2 bg-[#edf4ff] border-b border-[#d8eafe] flex items-center gap-1.5 overflow-x-auto shrink-0 text-[11px]">
            <button
              onClick={() => onOpenInquiry()}
              className="px-2.5 py-1 rounded-full bg-white hover:bg-white/90 text-[#005c95] font-semibold border border-[#c4dcff] whitespace-nowrap shadow-xs flex items-center gap-1 transition-colors"
            >
              <span>견적 신청</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </button>
            <button
              onClick={() => onOpenBranches()}
              className="px-2.5 py-1 rounded-full bg-white hover:bg-white/90 text-[#005c95] font-semibold border border-[#c4dcff] whitespace-nowrap shadow-xs flex items-center gap-1 transition-colors"
            >
              <span>전국 17개 사업소</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </button>
            <button
              onClick={() => onOpenMSDS()}
              className="px-2.5 py-1 rounded-full bg-white hover:bg-white/90 text-[#005c95] font-semibold border border-[#c4dcff] whitespace-nowrap shadow-xs flex items-center gap-1 transition-colors"
            >
              <span>MSDS 검색</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </button>
          </div>

          {/* Messages list */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f7f9ff]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-[#005c95] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs shadow-xs space-y-1 ${
                    msg.role === 'user'
                      ? 'bg-[#005c95] text-white rounded-tr-none'
                      : 'bg-white text-[#404751] border border-gray-200/80 rounded-tl-none'
                  }`}
                >
                  <div className="space-y-1">{renderMessageContent(msg.content)}</div>
                  <span
                    className={`block text-[10px] text-right mt-1 ${
                      msg.role === 'user' ? 'text-white/60' : 'text-gray-400'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-[#162B38] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-full bg-[#005c95] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none p-3.5 shadow-xs flex items-center gap-1.5 text-xs text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-[#005c95] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#005c95] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-[#005c95] animate-bounce [animation-delay:0.4s]" />
                  <span className="ml-2">가스봇이 답변을 작성하고 있습니다...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel if few messages */}
          {messages.length <= 3 && !loading && (
            <div className="p-2.5 bg-white border-t border-gray-100 flex items-center gap-1.5 overflow-x-auto shrink-0">
              {quickPrompts.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(item.prompt)}
                  className="px-2.5 py-1.5 rounded-lg bg-[#edf4ff] hover:bg-[#d8eafe] text-[#005c95] text-[11px] font-medium whitespace-nowrap transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-gray-200 shrink-0">
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                placeholder="궁금하신 가스 규격이나 견적에 대해 물어보세요..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                className="w-full text-xs pl-3.5 pr-10 py-2.5 rounded-full border border-gray-300 focus:outline-none focus:border-[#005c95] focus:ring-1 focus:ring-[#005c95] disabled:bg-gray-100"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!input.trim() || loading}
                className="absolute right-1.5 p-1.5 rounded-full bg-[#005c95] hover:bg-[#0075bc] text-white disabled:bg-gray-300 transition-colors"
                title="전송"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-[10px] text-center text-gray-400 mt-1.5">
              (주)MS가스 AI 가스봇 · 고압가스 안전관리법 및 취급 주의사항 준수
            </p>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#005c95] to-[#0075bc] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all border border-white/20"
        title="MS가스 AI 가스봇 상담창 열기"
      >
        <div className="relative flex items-center justify-center">
          <MessageSquare className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#10B981]" />
        </div>
        <div className="text-left hidden sm:block">
          <p className="text-xs font-bold leading-tight flex items-center gap-1">
            <span>가스봇 상담</span>
            <span className="px-1 py-0.2 rounded text-[9px] bg-white/20 font-normal">AI</span>
          </p>
          <p className="text-[10px] text-white/80 leading-none">실시간 스펙 & 견적</p>
        </div>
        {isOpen && <ChevronDown className="w-4 h-4 ml-0.5 opacity-80" />}
      </button>
    </div>
  );
};
