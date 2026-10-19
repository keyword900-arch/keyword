export interface ProductItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  linkText: string;
  imageUrl: string;
  alt: string;
  specs: {
    chemicalFormula: string;
    purity: string;
    supplyMethods: string[];
    applications: string[];
    certifications: string[];
    cylinders: string[];
  };
}

export interface ServiceItem {
  id: string;
  step: string;
  title: string;
  icon: string;
  description: string;
  bullets: string[];
  features: string[];
}

export interface NewsItem {
  id: string;
  category: '용역입찰' | '실증특례고지' | '수상실적' | '훈장수훈';
  title: string;
  date: string;
  author: string;
  content: string;
  isImportant?: boolean;
  attachmentName?: string;
  deadline?: string;
}

export interface BranchOffice {
  id: string;
  name: string;
  region: string;
  address: string;
  phone: string;
  fax: string;
  manager: string;
  coordinates: { x: number; y: number }; // percentage on map
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'industrial-gas',
    badge: 'INDUSTRIAL GAS',
    title: '산업용 가스',
    description: '질소(N₂), 산소(O₂), 아르곤(Ar), 탄산가스(CO₂) 등 철강, 조선, 석유화학, 제조 라인에 필수적인 고순도 기초 산업가스 전 품목 공급.',
    linkText: '스펙 규격 및 공급방식',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtYHsCQ6FYgqosjpsBg-BUGHqURqZ48nWDbmoTbwctM7jIDg8pwkugMAHnKhBOTlRE4kQfdylvtUdt3t6aX9QwHQWYfIODG0UqbSgOTe6ec-9mWAQOvGITKX6IsOVRuhsdFPaSd513yhHCJlCzPmFn0dcSt2UPNg9ZG4GzwArp0gQmWrd1ka-tSGu2h5VC5yTSt7Yhg0KI3efKQJO-XtPL6NqGrwg5VKGlcRZGsX4zuSAauyugZ02q',
    alt: 'Industrial gas cryogenic cylinder manifold',
    specs: {
      chemicalFormula: 'N₂, O₂, Ar, CO₂, H₂, He',
      purity: '99.9% ~ 99.999% (초저온 액화/고압 기체)',
      supplyMethods: ['초저온 액체 탱크로리 (Bulk)', 'LGC 초저온 용기 (160L~250L)', '고압 실린더 번들 (Bundle/Rack)', '현장 공급 파이프라인 (On-site)'],
      applications: ['조선·철강 레이저 절단 및 용접 실드 가스', '화학 플랜트 산화 방지 및 퍼지', '식음료 보존 및 포장', '폐수처리장 고효율 산소 공급'],
      certifications: ['KGS 한국가스안전공사 충전 제조 허가', 'ISO 9001 / ISO 14001 인증'],
      cylinders: ['47L/40L 고압용기 (150bar~200bar)', '초저온 액화가스 전용 LGC 용기', '12본/16본 실린더 랙 번들'],
    },
  },
  {
    id: 'fuel-gas',
    badge: 'FUEL GAS',
    title: '연료용 가스',
    description: '프로판(C₃H₈), 프라멕스, 에탄, 부탄, 이소부탄 등 대규모 산업 열원 및 청정 고효율 열처리를 지원하는 안전 인증 연료 솔루션.',
    linkText: '연소특성 및 패키지 사양',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACaHl4yIS21-k9J1BTsBSfoWy5dM7PslQFsCNycsqTHWwZ9Zno7uliVcLsy11_pliPN2CS01Zv7ZG-EAaK96VDzNW1xENA0_HUR1I2JjOsH5hTBoFZe1jTlK5eRoatTdQF6DjqMBJQC0zC-VCfWUNrz9jtbHQ4Mk3YwWjowN9iORmuD_shOKJ9Sg39qd46VvlOjlxGSdfaMGsGsnH7RO5wBdo4oKOuvkqL5DGLJLCiXT7Gcvf1k9tP',
    alt: 'Clean fuel combustion flame with engineering burner head',
    specs: {
      chemicalFormula: 'C₃H₈, C₄H₁₀, Flamax High-Calorie Mix',
      purity: '고발열량 청정 연소 규격 합격 (발열량 24,000kcal/Nm³ 이상)',
      supplyMethods: ['벌크로리 공급 (소형저장탱크)', '산업용 50kg 고압 용기', '정압기 연계 파이핑 라인'],
      applications: ['금속 열처리 및 도금 연속 라인 가열', '유리/요업 고온 소성로', '선박 절단 및 중공업 대형 가열 버너', '공장 냉난방 흡수식 냉온수기 열원'],
      certifications: ['한국가스안전공사 특정설비 검사필', 'KGS 소형저장탱크 안전기준 승인'],
      cylinders: ['50kg 대용량 기체/액체 취출 용기', '0.5톤~2.9톤 벌크 저장 탱크', '정압기 패키지 유닛'],
    },
  },
  {
    id: 'specialty-gas',
    badge: 'SPECIALTY GAS · 99.999%',
    title: '특수 가스',
    description: '반도체·디스플레이·이차전지 첨단 공정에 최적화된 5N~7N 초고순도 가스, 희귀 불활성 가스 및 고객 레시피 맞춤형 혼합가스.',
    linkText: 'UHP 분석성적서 확인',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRe2lgDKH8FM7gOm9uHmzeZEuruMmgW0amu8svsgTxxffdscG31mHYi9MMnFVLCxgnb7FyGh6VL8xqQTHvQCehJvFhQboFvKv7x-bh-TUrj6srRnsP1lPM9HvQ9MDJ_KYTlrhKQAEKnxK5VrmY4OPV-e8VCFo-xcc4S1wnxS0zzlLMgRaTSwSlS4gcOTjbs9bBKkSM0N-ZSCpj6OcjYbdkCZOvlKc70aJHjyy2rHPPGibso9Swznz4',
    alt: 'Semiconductor fabrication cleanroom gas panel',
    specs: {
      chemicalFormula: 'SiH₄, NF₃, CF₄, Xe, Kr, Ne, UHP N₂/Ar/He',
      purity: '99.9999% ~ 99.99999% (5N~7N Ultra High Purity)',
      supplyMethods: ['EP(Electro-Polished) 특수 실린더', 'Y-Cylinder 및 톤 실린더', 'ISO TANK 초순도 공급'],
      applications: ['반도체 에칭(Etching), 증착(CVD/ALD) 공정', 'OLED/LCD 디스플레이 박막 형성', '이차전지 전극 공정 불활성 챔버 분위기 가스', '초전도체 및 극저온 양자 컴퓨팅 냉각'],
      certifications: ['SEMI 규격 만족 ppb급 GC/MS 분석성적서', '유해화학물질 영업허가 및 KGS 승인'],
      cylinders: ['DGS 다이아프램 밸브 적용 EP 실린더', 'Nickel-plated 초고순도 밸브', '정밀 압력 센서 탑재 스마트 실린더'],
    },
  },
  {
    id: 'medical-gas',
    badge: 'MEDICAL GAS · GMP',
    title: '의료용 가스',
    description: '엄격한 의약품 제조 품질관리기준(GMP)을 충족하는 의료용 산소, 아산화질소, 멸균가스 공급 및 종합병원 가스배관 설비 인증.',
    linkText: '의료용 의약품 인증정보',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUMVSOzBban-Lh129iEtXI9DTusubPbbV6BUlVLJzua-rqHtA2Q8uv-SkVD5Onx713p2AkIvtdJ2oVenhvkSXNzKYx-y78roeysHkxQae0fR8vacDb14fcqCq6dAkr6E0hKlFO3eqU3s9wI6kT5MYlefsnrvZTJvVKl83NGNSMnAMttbmvpak7ew_PMcdFTXaOXMLgJlt6jY1sRZuOcTbEJqaBADKPKD2iCy3yD6mnstm9gfpX885a',
    alt: 'Hospital surgical room medical oxygen gas delivery ceiling booms',
    specs: {
      chemicalFormula: 'Medical O₂, N₂O, Medical CO₂, Medical Air',
      purity: '대한민국 약전(KP) 및 GMP 의약품 적합 (99.5% 이상 의료용 산소)',
      supplyMethods: ['병원 전용 초저온 액체산소 저장탱크 (CE)', '중앙공급 매니폴드 시스템 (Automatic Changeover)', '의료용 알루미늄/스틸 이동식 실린더'],
      applications: ['수술실 흡입 마취 및 호흡 치료', '중환자실(ICU) 및 응급실 산소 투여', '의료기기 구동용 고청정 의료용 압축공기', '극저온 동결치료 및 혈액보관용 액체질소'],
      certifications: ['식품의약품안전처 의약품 제조업 GMP 허가', '의료용 고압가스 전용 충전시설 검사필'],
      cylinders: ['PIN-Index 의료용 전용 밸브 용기', '가벼운 의료용 경량 알루미늄 용기 (4.6L~10L)', '병원 중앙 공급실 40L/47L 백업 매니폴드'],
    },
  },
  {
    id: 'standard-gas',
    badge: 'STANDARD GAS · CALIBRATION',
    title: '표준 가스',
    description: '정밀 성분 분석기기 교정용 표준가스, 공인 대기환경 측정용 혼합가스, KOLAS 소급성 확보를 통한 오차 한계 제로 표준물질.',
    linkText: '불확도 보증 범위 확인',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvKCLrDjrEj29uxO_Gw4PoeXzZDi6NPTbJbRy3WcBfYxqBStVd8MmZtmYQNHuBTTnc19z-QApFjysrLZz68B2Orpv4GlMrVfbjFDqd1_0BTr0vg1jiIcmF0y9GkAAREmW8r58X7VPBfrUncXK9S9qgg-cZyLUrVUs424wp3gXwrozZw0CfgU_N0HEte7Vz4rNOrIPs566SUfmEWmzqycl0KNY-jHu_qcOBslxUQXL6nwQKs7UcQYMG',
    alt: 'Analytical laboratory gas chromatography instrument',
    specs: {
      chemicalFormula: 'CRM/RM 국가공인 교정용 다성분 복합 혼합가스',
      purity: '중량법(Gravimetric) 기반 상대확장불확도 ±1.0% 이내 보증',
      supplyMethods: ['특수 내면 부동태화(Passivation) 처리 실린더', '정밀 압력 레귤레이터 세트', '휴대용 캘리브레이션 캔(Mini-Can)'],
      applications: ['대기오염 연속자동측정기(TMS) 영점 및 스팬 교정', '자동차 배출가스 검사기기 공인 검정', '연구소 GC/MS, FT-IR 성분 분석 검량선 작성', '석유화학 플랜트 공정 가스 분석계 검정'],
      certifications: ['KOLAS 국제공인교정기관 소급성 인증', 'NIST / KRISS(한국표준과학연구원) 표준 소급'],
      cylinders: ['알루미늄 10L/47L Aculife 특수 코팅 용기', '스테인리스 스틸 다이아프램 레귤레이터 일체형'],
    },
  },
  {
    id: 'equipment-engineering',
    badge: 'EQUIPMENT & ENGINEERING',
    title: '기타 장비 & 엔지니어링',
    description: '초저온 초고압 저장탱크(LGC/CE), 기화기, 레귤레이터, 안전밸브 조달 및 고압가스 특정설비 플랜트 시공·인허가 대행.',
    linkText: '설비 스펙 및 엔지니어링 상담',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZLmBMf7SDAvpwGsLGvNrv2jYC3J9MnHitOsODoRf-cTQ8I77VNlJ5mL3dbdEoQpHMFneIRBKDAn5qA6SZJJgshNBmsNkI1ywcDYgFNhn84KVhKvTyfvoZ_8t08OqjQxr5ntmNKSeWkx6hxnBBk1_7GnbD8MEVMlQqYfOipNxT133nI2llxRUwxThVJnMasfGAblbOD_cKwAxqWiq1gz6KVJ39QK3fXJ4_Zde1DL-z37d7-xUBFfNt',
    alt: 'Industrial cryogenic vaporizers and stainless steel manifold control racks',
    specs: {
      chemicalFormula: 'Cryogenic Equipment, High-Pressure Gas Engineering',
      purity: 'KGS 코드(FU211, FP112) 완전 부합 및 안전 인증',
      supplyMethods: ['턴키(Turn-key) 엔지니어링 EPC 설계·시공', '정기 안전진단 및 배관 누설 탐상', '긴급 밸브 및 기화기 교체 파견'],
      applications: ['반도체·디스플레이 초청정 배관 공사 (EP Piping)', '초저온 액화가스 저장탱크(CE 3톤~50톤) 플랜트 구축', '공기 가열식 알루미늄 핀 기화기(Vaporizer) 설치', '고압가스 안전관리법 인허가 및 완성검사 대행'],
      certifications: ['특정설비 전문제조 및 시공업 등록', 'KGS 기술검토 및 인허가 100% 원스톱 패스'],
      cylinders: ['초저온 초단열 진공배관 (VIP)', '자동 절체 가스 매니폴드 판넬', '초정밀 2단 감압 레귤레이터'],
    },
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'gas-analysis',
    step: 'SERVICE 01',
    title: '가스분석 서비스',
    icon: 'biotech',
    description: 'GC(가스크로마토그래피), 미량 수분계, 산소 분석기를 통한 ppb 단위 초정밀 불순물 계측 및 공인 성적서 발급.',
    bullets: ['극미량 불순물 검출', '배관 잔류 가스 정밀진단'],
    features: ['Agilent GC 최신 정밀 기기 보유', '수분/오일/탄화수소 ppb 단위 검출', '국제공인 시험 규격 적합 성적서 즉시 발급'],
  },
  {
    id: 'gas-purge',
    step: 'SERVICE 02',
    title: '가스퍼지 서비스',
    icon: 'air',
    description: '화학공장 정기 보수, 선박 탱크, 배관 신설 시 고순도 질소(N₂) 치환을 통한 화재 폭발 위험 원천 차단 및 무산소 환경화.',
    bullets: ['대용량 질소 연속 기화', '플랜트 개보수 긴급 출동'],
    features: ['시간당 1,000Nm³ 이상 대용량 연속 기화 설비', '산소 농도 0.1% 이하 완벽 치환 보증', '전국 석유화학단지 24시간 긴급 출동 체계'],
  },
  {
    id: 'export-import',
    step: 'SERVICE 03',
    title: '수출입 서비스',
    icon: 'directions_boat',
    description: '글로벌 10개국 해외 파트너십과 국제 인증 ISO 탱크 컨테이너를 운용하여 위험물 국제 복합운송 및 수출입 통관 일괄 처리.',
    bullets: ['ISO TANK 전용 물류망', '글로벌 위험물 포워딩'],
    features: ['IMDG Code 위험물 해상운송 공식 인증', '초순도 특수가스 해외 소싱 및 직수입', '보세구역 지정 운송 및 통관 원스톱 진행'],
  },
  {
    id: 'safety-management',
    step: 'SERVICE 04',
    title: '안전관리 서비스',
    icon: 'security',
    description: '24시간 IoT 누출 감시 시스템, KGS 법정 안전점검 대행, 플랜트 근로자 안전교육 및 화학물질관리법(화관법) 컨설팅.',
    bullets: ['IoT 가스 원격 모니터링', '정기 안전검사 및 MSDS 제공'],
    features: ['무선 IoT 센서 기반 압력/누출 실시간 원격 관제', '화학물질관리법 장외영향평가 및 컨설팅 지원', '연간 정기 안전교육 및 비상대응 훈련 지원'],
  },
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'news-1',
    category: '용역입찰',
    title: '울산 규제자유특구 『암모니아 TTS용 벙커링 인프라 구축 및 기자재·표준 개발 (실증R&D)』관련 “구축시스템 3자 안전진단 평가” 용역 입찰',
    date: '2025.02.14',
    author: '신사업R&D팀',
    isImportant: true,
    deadline: '2025.03.10 17:00까지',
    attachmentName: '2025_Ulsan_TTS_Safety_Evaluation_RFP.pdf (3.4MB)',
    content: `1. 입찰에 부치는 사항
- 용역명: 울산 규제자유특구 『암모니아 TTS용 벙커링 인프라 구축 및 기자재·표준 개발 (실증R&D)』관련 “구축시스템 3자 안전진단 평가” 용역
- 용역기간: 계약체결일로부터 8개월간
- 기초금액: 일금 185,000,000원 (VAT 포함)
- 입찰방식: 제한경쟁입찰 (협상에 의한 계약 체결)

2. 주요 과업 내용
- 암모니아 TTS(Truck to Ship) 벙커링 시스템 고위험 구역 3자 안전진단
- SIL(Safety Integrity Level) 검증 및 위험성 평가(QRA) 결과 검증
- 실증 운용 시나리오별 비상차단시스템(ESD) 신뢰성 시험 및 인증 가이드 작성

3. 참가 자격
- 국가계약법 시행령 제12조 및 동법 시행규칙 제14조에 의한 유자격자
- 최근 3년 이내 독성/가연성 가스 플랜트 안전성 평가 실적 보유 기관`,
  },
  {
    id: 'news-2',
    category: '용역입찰',
    title: '울산 규제자유특구 『암모니아 TTS용 벙커링 인프라 구축 및 기자재·표준 개발 (실증R&D)』관련 “탱크로리를 이용한 암모니아 벙커링 설비 정성적 위험평가(HAZOP) 분석” 용역 입찰',
    date: '2025.01.22',
    author: '신사업R&D팀',
    isImportant: false,
    deadline: '2025.02.15 18:00까지',
    attachmentName: 'HAZOP_Analysis_Ammonia_Tender_2025.pdf (2.1MB)',
    content: `1. 용역 입찰 개요
- 과업명: 암모니아 벙커링 설비 정성적 위험평가(HAZOP) 분석 용역
- 목적: 초저온 액화 암모니아 이송 중 발생 가능한 인적·기계적 고장 모드 사전 차단 및 안전 방호 대책 수립
- 제안서 제출: (주)MS가스 기술기획실 직접 제출 또는 전자우편 접수`,
  },
  {
    id: 'news-3',
    category: '실증특례고지',
    title: '경남 암모니아 혼소 연료추진시스템 선박 규제자유특구 실증특례 이용자고지',
    date: '2024.11.08',
    author: '대외협력처',
    isImportant: false,
    deadline: '실증기간 내 상시',
    attachmentName: 'Gyeongnam_Ammonia_Notice_2024.pdf (1.5MB)',
    content: `중소벤처기업부 고시 및 규제특례제한법 제86조에 의거, 경남 암모니아 혼소 추진시스템 선박 규제자유특구 실증사업의 참여자와 안전 책임에 대한 법적 고지문을 게시합니다. MS가스는 전용 공급 배관 및 실증 연료 공급의 최고 안전 기준을 충족하고 있습니다.`,
  },
  {
    id: 'news-4',
    category: '수상실적',
    title: '(주)MS가스 충남 중소기업 탄소중립 성과 확산의 날 충남도지사 유공자 표창 수여',
    date: '2024.10.30',
    author: '홍보팀',
    isImportant: false,
    attachmentName: 'Governor_Citation_CarbonNeutral_2024.pdf (1.1MB)',
    content: `(주)MS가스가 충청남도에서 주최한 '중소기업 탄소중립 성과 확산의 날' 행사에서 청정 가스 보급 활성화 및 온실가스 감축 기술 개발에 기여한 공로로 충남도지사 유공자 단체 표창을 수상하였습니다. 앞으로도 지속 가능한 산업 생태계 구축에 앞장서겠습니다.`,
  },
  {
    id: 'news-5',
    category: '훈장수훈',
    title: '(주)MS가스 전청민 대표이사 은탑산업훈장 수훈',
    date: '2024.09.12',
    author: '기획조정실',
    isImportant: true,
    attachmentName: 'Silver_Tower_Order_Press_Release.pdf (4.8MB)',
    content: `대한민국 가스산업 대상 시상식에서 (주)MS가스 전청민 대표이사가 50여 년간 국가 기간산업 에너지 인프라 현대화 및 고압가스 안전관리 무사고 달성, 친환경 암모니아·수소 기술 실증 선도 공로로 정부 최고 영예인 '은탑산업훈장'을 수훈하였습니다. 성원해주신 모든 고객사와 임직원께 감사드립니다.`,
  },
];

export const BRANCHES_DATA: BranchOffice[] = [
  {
    id: 'hq-busan',
    name: '본사 및 부산 제1충전플랜트',
    region: '부산/영남권',
    address: '부산광역시 사상구 낙동대로 1416 (삼락동)',
    phone: '051-790-2000',
    fax: '051-790-2009',
    manager: '본사 고객지원총괄팀',
    coordinates: { x: 74, y: 78 },
  },
  {
    id: 'seoul-office',
    name: '수도권 서울사업본부',
    region: '수도권',
    address: '서울특별시 강남구 테헤란로 412 테헤란타워 14층',
    phone: '02-558-4500',
    fax: '02-558-4509',
    manager: '영업본부 수도권영업팀',
    coordinates: { x: 38, y: 24 },
  },
  {
    id: 'ulsan-plant',
    name: '울산 특수가스 및 암모니아 실증기지',
    region: '부산/영남권',
    address: '울산광역시 남구 여천로 217번길 45',
    phone: '052-258-8811',
    fax: '052-258-8819',
    manager: '신에너지 실증운영팀',
    coordinates: { x: 79, y: 72 },
  },
  {
    id: 'yeosu-branch',
    name: '여수 석유화학 거점영업소',
    region: '호남권',
    address: '전라남도 여수시 산단중앙로 88',
    phone: '061-686-9000',
    fax: '061-686-9009',
    manager: '석유화학 플랜트팀',
    coordinates: { x: 42, y: 84 },
  },
  {
    id: 'dangjin-branch',
    name: '충남 당진/아산 물류센터',
    region: '충청권',
    address: '충청남도 당진시 송악읍 부곡공단로 152',
    phone: '041-356-7100',
    fax: '041-356-7109',
    manager: '철강가스 유통팀',
    coordinates: { x: 32, y: 39 },
  },
  {
    id: 'pohang-branch',
    name: '포항 철강산업 영업소',
    region: '부산/영남권',
    address: '경상북도 포항시 남구 괴동로 63',
    phone: '054-285-3300',
    fax: '054-285-3309',
    manager: '중공업 특수지원팀',
    coordinates: { x: 81, y: 62 },
  },
  {
    id: 'gunsan-branch',
    name: '전북 군산 서해안 지소',
    region: '호남권',
    address: '전북특별자치도 군산시 자유무역로 210',
    phone: '063-467-1200',
    fax: '063-467-1209',
    manager: '서해안 광역물류팀',
    coordinates: { x: 34, y: 56 },
  },
  {
    id: 'changwon-plant',
    name: '경남 창원 정밀엔지니어링 공장',
    region: '부산/영남권',
    address: '경상남도 창원시 성산구 공단로 164',
    phone: '055-261-5500',
    fax: '055-261-5509',
    manager: '방산/기계 엔지니어링팀',
    coordinates: { x: 67, y: 80 },
  },
];

export const FLEET_STATUS_DATA = [
  { id: 'TR-101', type: 'LN₂ 초저온 20톤', driver: '김*호', route: '울산 플랜트 → 기흥 반도체단지', progress: 84, status: '정상 운행', temp: '-196.2°C', pressure: '4.8 bar' },
  { id: 'TR-102', type: 'LOX 의료용 16톤', driver: '박*진', route: '부산 플랜트 → 양산 부산대병원', progress: 95, status: '도착 준비', temp: '-183.0°C', pressure: '5.1 bar' },
  { id: 'TR-103', type: 'LAr 고순도 18톤', driver: '이*수', route: '포항 거점 → 거제 조선해양 특구', progress: 48, status: '정상 운행', temp: '-186.4°C', pressure: '4.5 bar' },
  { id: 'TR-104', type: 'NH₃ 벙커링 전용 22톤', driver: '최*민', route: '울산 실증기지 → 온산 신항만', progress: 62, status: '실증 시험 중', temp: '-33.4°C', pressure: '8.2 bar' },
  { id: 'TR-105', type: 'L-CO₂ 식품/산업용 15톤', driver: '정*훈', route: '당진 물류센터 → 평택 식품클러스터', progress: 30, status: '정상 운행', temp: '-20.5°C', pressure: '19.8 bar' },
];

export const MSDS_DATABASE = [
  { code: 'MSDS-01', name: '초고순도 질소 (UHP Nitrogen)', formula: 'N₂', cas: '7727-37-9', unNo: 'UN 1066 / UN 1977', hazard: '고압가스, 단순질식성', grade: '99.999% ~ 99.9999%' },
  { code: 'MSDS-02', name: '의료용 액화산소 (Liquid Oxygen)', formula: 'O₂', cas: '7782-44-7', unNo: 'UN 1072 / UN 1073', hazard: '고압가스, 산화성가스 (화재촉진)', grade: '99.5% KP 의약품' },
  { code: 'MSDS-03', name: '고순도 아르곤 (Pure Argon)', formula: 'Ar', cas: '7440-37-1', unNo: 'UN 1006 / UN 1951', hazard: '고압가스, 단순질식성', grade: '99.999%' },
  { code: 'MSDS-04', name: '산업용 이산화탄소 (Carbon Dioxide)', formula: 'CO₂', cas: '124-38-9', unNo: 'UN 1013 / UN 2187', hazard: '고압가스, 질식성, 동상주의', grade: '99.9%' },
  { code: 'MSDS-05', name: '프로판 연료가스 (Propane)', formula: 'C₃H₈', cas: '74-98-6', unNo: 'UN 1978', hazard: '인화성가스 극인화성, 고압가스', grade: '고발열량 연소용' },
  { code: 'MSDS-06', name: '실증용 액화 암모니아 (Ammonia)', formula: 'NH₃', cas: '7664-41-7', unNo: 'UN 1005 / UN 2672', hazard: '급성독성, 부식성, 수생환경유해', grade: '규제특례 벙커링용' },
];
