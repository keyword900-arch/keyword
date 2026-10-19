import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Gemini Client safely
const apiKey = process.env.GEMINI_API_KEY;
const isRealApiKey = Boolean(apiKey && apiKey !== 'MY_GEMINI_API_KEY' && apiKey.trim().length > 10);

const ai = isRealApiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

const MS_GAS_SYSTEM_INSTRUCTION = `당신은 대한민국 고압가스·특수가스 토탈 엔지니어링 기업 (주)MS가스의 스마트 AI 상담 어시스턴트 '가스봇(GasBot)'입니다.
방문 고객과 기업 고객을 대상으로 친절하고 전문적이며 신뢰감 있는 어조로 답변합니다.

[회사 핵심 정보]
- 회사명: (주)MS가스 (1974년 설립, 50년 반세기 신뢰)
- 대표자: 전청민 (2024 은탑산업훈장 수훈) / 전원태
- 본사: 부산광역시 사상구 낙동대로 1416 (대표전화: 051-790-2000, 팩스: 051-790-2009)
- 인프라: 전국 8개 권역 핵심 거점, 17개 직영 영업소, 128기 초저온 전용 탱크로리 선단 실시간 운행
- 연간 매출액: 935억원 (2024년 GAAP 기준)
- 핵심 제품군 (6대 라인업):
  1. 산업용 가스: 질소(N₂), 산소(O₂), 아르곤(Ar), 이산화탄소(CO₂), 수소, 헬륨 (Bulk 탱크로리, LGC 용기, 실린더 번들)
  2. 연료용 가스: 프로판(C₃H₈), 부탄, 프라멕스 (산업용 열원, 청정 고효율 버너)
  3. 특수 가스: 99.999%~99.99999% (5N~7N) 초고순도 가스 (반도체, 디스플레이, 이차전지 공정용, UHP 분석성적서)
  4. 의료용 가스: 식약처 GMP 인증 적합 의료용 산소, 아산화질소, 의료용 공기, 종합병원 가스배관 설비
  5. 표준 가스: 국가공인 교정용(CRM/RM) 혼합가스, 대기환경 TMS 교정용, KOLAS 소급성 보증 (상대확장불확도 ±1.0% 이내)
  6. 기타 장비 & 엔지니어링: 초저온 액체저장탱크(CE/LGC), 기화기, 레귤레이터, 안전밸브, 배관공사 인허가 턴키 시공
- 4대 엔지니어링 서비스:
  - 가스분석 서비스: GC(가스크로마토그래피), ppb 단위 초미량 불순물 검출 및 공인 성적서
  - 가스퍼지 서비스: 대용량 질소 연속 기화, 화학 플랜트 정기 보수 무산소 치환
  - 수출입 서비스: ISO 탱크 컨테이너 운용 및 위험물 국제 복합운송
  - 안전관리 서비스: 24시간 IoT 누출 감시 시스템, KGS 법정 안전점검 및 화학물질관리법(화관법) 컨설팅
- 국책 R&D 실증:
  - 울산 규제자유특구: 암모니아 TTS 벙커링 인프라 구축 R&D 주관
  - 경남 규제자유특구: 암모니아 혼소 친환경 선박 추진 시스템 실증특례

[응답 가이드라인]
1. 답변은 한국어로 명확하고 간결하게 제공하며, 고객이 원할 경우 필요한 스펙이나 신청 절차를 안내합니다.
2. 특정 가스 견적이 필요하거나 대량 납품 문의 시, 포털의 '온라인 문의' 메뉴 또는 본사 고객센터(051-790-2000)로 접수할 수 있음을 자연스럽게 안내합니다.
3. 안전이 최우선이므로 고압가스 안전관리법 및 MSDS 취급 주의사항을 준수하도록 조언합니다.
4. 마크다운을 적절히 활용하여 가독성을 높입니다.`;

// Fallback intelligent response generator
function generateFallbackResponse(userMessage: string): string {
  const query = userMessage.toLowerCase();

  if (query.includes('의료용') || query.includes('병원') || query.includes('gmp')) {
    return `**(주)MS가스 의료용 가스 (GMP 적합) 안내**
식품의약품안전처 의약품 제조 및 품질관리기준(GMP) 공인 승인을 받은 고품질 의료용 가스를 종합병원 및 의료기관에 안정적으로 공급합니다.

- **취급 품목**: 의료용 액화산소(Medical O₂ 99.5% 이상), 의료용 아산화질소(N₂O), 의료용 CO₂, 의료용 압축공기
- **설비 지원**: 종합병원 중앙공급식 매니폴드 시스템 및 초저온 저장탱크(CE) 시공/정기 검사 대행`;
  }

  if (query.includes('특수가스') || query.includes('반도체') || query.includes('초고순도') || query.includes('uhp') || query.includes('5n') || query.includes('7n')) {
    return `**(주)MS가스 5N~7N 특수가스 안내**
반도체, 디스플레이, 이차전지 첨단 공정에 최적화된 **99.999%~99.99999% 초고순도 특수가스**를 공급합니다.

- **취급 품목**: UHP N₂/Ar/He, SiH₄, NF₃, CF₄, Xe, Kr, 고객 레시피 맞춤형 혼합가스
- **품질 보증**: Agilent 최신 GC/MS 분석기를 통한 ppb 단위 정밀 분석성적서(COA) 기본 발행
- **용기 사양**: EP(Electro-Polished) 특수 내면 처리 실린더 및 DGS 다이아프램 밸브 적용`;
  }

  if (query.includes('질소') || query.includes('n2') || query.includes('산소') || query.includes('o2') || query.includes('아르곤') || query.includes('산업용')) {
    return `**(주)MS가스 산업용 가스 공급 안내**
질소(N₂), 산소(O₂), 아르곤(Ar), 탄산(CO₂) 등 주요 기초 산업가스를 99.9%~99.999% 순도로 공급하고 있습니다.

- **공급 형태**: 초저온 액체 벌크로리(Bulk), LGC 용기(160L~250L), 고압 실린더 번들(12본/16본 랙)
- **주요 용도**: 철강 레이저 절단, 용접 보호 가스, 화학 플랜트 퍼지, 열처리 분위기
- **견적 및 공급 상담**: 포털 상단 **[온라인 문의]** 또는 본사 대표전화(051-790-2000)로 문의하시면 전문 엔지니어가 2시간 내로 최적 견적을 산출해 드립니다.`;
  }

  if (query.includes('견적') || query.includes('가격') || query.includes('주문') || query.includes('신청') || query.includes('상담')) {
    return `**가스 공급 견적 및 기술 상담 안내**
(주)MS가스는 고객사의 월간 사용량과 사용 환경에 맞춰 가장 경제적인 공급 방식을 제안해 드립니다.

1. **온라인 견적 신청**: 포털 화면의 **[온라인 문의]** 버튼을 클릭하시면 간편 양식 작성이 가능합니다.
2. **전화 상담**: 본사 고객지원센터 **051-790-2000** (평일 08:30 ~ 18:00)
3. **긴급 공급 대응**: 전국 128기 초저온 탱크로리 전단을 통한 원콜 긴급 배차 시스템 가동 중 (< 3.2h 평균 대응)`;
  }

  if (query.includes('배송') || query.includes('물류') || query.includes('탱크로리') || query.includes('지역') || query.includes('위치') || query.includes('지사') || query.includes('영업소')) {
    return `**(주)MS가스 전국 물류 & 직영 영업소 네트워크**
(주)MS가스는 전국 8개 권역 핵심 거점과 17개 직영 영업소를 직영으로 운영하고 있습니다.

- **본사/부산공장**: 부산 사상구 낙동대로 1416 (051-790-2000)
- **수도권 사업본부**: 서울 강남구 테헤란로 412 (02-558-4500)
- **울산 특수가스/암모니아 기지**: 울산 남구 여천로 (052-258-8811)
- **호남 거점**: 전남 여수 산단중앙로 (061-686-9000) / 전북 군산
- **충청 거점**: 충남 당진 송악공단 (041-356-7100)
- **포항 거점**: 경북 포항 괴동로 (054-285-3300)

포털 하단의 **[오시는 길]** 메뉴를 통해 각 사업소 주소 및 상세 연락처를 확인하실 수 있습니다.`;
  }

  if (query.includes('msds') || query.includes('물질안전') || query.includes('안전보건') || query.includes('성적서')) {
    return `**MSDS (물질안전보건자료) 열람 안내**
(주)MS가스에서 취급하는 전 가스 품목의 최신 공인 MSDS는 포털 하단의 **[MSDS (물질안전보건자료)]** 버튼을 통해 실시간 검색 및 PDF 다운로드가 가능합니다.

- 지원 품목: 질소, 산소, 아르곤, 이산화탄소, 프로판, 암모니아 등 전 품목
- 화학물질 비상대응 및 유출사고 방제 핫라인: **051-790-2000**`;
  }

  return `안녕하세요! (주)MS가스 스마트 AI 상담 어시스턴트 **가스봇(GasBot)**입니다.

(주)MS가스는 1974년 설립된 반세기 역사의 고압가스·특수가스 토탈 엔지니어링 솔루션 선도기업입니다. 무엇을 도와드릴까요?

- **주요 질문 예시**:
  - *"산업용 질소와 아르곤 탱크로리 공급 규격이 어떻게 되나요?"*
  - *"반도체용 5N~7N 초고순도 특수가스 순도 인증은 어떻게 받나요?"*
  - *"의료용 산소 GMP 인증 현황과 공급 방식이 궁금해요."*
  - *"공장 가스 공급 견적을 신청하고 싶습니다."*
  - *"가까운 직영 사업소와 고객센터 연락처를 알려주세요."*`;
}

// Chat API Route with robust timeout and fallback
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    if (ai) {
      try {
        const formattedContents = [];

        if (Array.isArray(history) && history.length > 0) {
          for (const item of history.slice(-6)) {
            formattedContents.push({
              role: item.role === 'assistant' ? 'model' : 'user',
              parts: [{ text: item.content }],
            });
          }
        }

        formattedContents.push({
          role: 'user',
          parts: [{ text: message }],
        });

        // 7 second timeout promise to protect against hanging calls
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Gemini API timeout')), 7000)
        );

        const generatePromise = ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: formattedContents,
          config: {
            systemInstruction: MS_GAS_SYSTEM_INSTRUCTION,
            temperature: 0.7,
            topP: 0.95,
          },
        });

        const response: any = await Promise.race([generatePromise, timeoutPromise]);
        const reply = response.text || generateFallbackResponse(message);
        res.json({ reply });
        return;
      } catch (geminiError: any) {
        console.warn('Gemini API call timed out or failed, using domain fallback:', geminiError?.message);
        const reply = generateFallbackResponse(message);
        res.json({ reply, notice: 'fallback' });
        return;
      }
    } else {
      const reply = generateFallbackResponse(message);
      res.json({ reply, notice: 'domain_ai' });
    }
  } catch (error: any) {
    console.error('Chat endpoint error:', error);
    res.status(500).json({ error: 'Failed to process chat message' });
  }
});

// Vite middleware in dev or static files in production
if (process.env.NODE_ENV !== 'production') {
  const { createServer } = await import('vite');
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
} else {
  app.use(express.static(path.resolve(__dirname, 'dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[MS GAS] Server running at http://0.0.0.0:${PORT}`);
});
