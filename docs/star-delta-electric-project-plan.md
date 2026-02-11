# Star Delta Electric B2B Website - 개발 계획서

## 프로젝트 개요
**회사명**: Star Delta Electric  
**위치**: New Jersey / New York  
**타겟**: B2B 상업용 전기 계약  
**기술 스택**: Next.js (App Router) + Tailwind CSS + Vercel 배포  
**사이트 타입**: 단일 페이지 앵커 스크롤 방식

---

## 사이트 구조 & 네비게이션

### 페이지 섹션
- Hero (#hero)
- Services (#services) 
- Projects (#projects)
- Local Law Consultation (#local-law)
- Industries (#industries)
- About (#about)
- Contact (#contact)

### 네비게이션 요구사항
- 상단 고정형 스티키 네비게이션
- 부드러운 스크롤 효과
- 모바일 반응형 햄버거 메뉴

---

## 각 섹션별 상세 컨텐츠

### HERO Section
```
상단 리본: "NYC Building Owners: LL88 & LL97 Consultation Available"

메인 헤드라인: "Commercial Electrical Contractor Serving New Jersey & New York"

서브 텍스트: "Retail, warehouse, and commercial electrical projects delivered with reliability and scale."

CTA 버튼:
- Primary: "Request a Project Quote"
- Secondary: "Talk to Our Team"

배경: [히어로 이미지 placeholder 영역]
```

### SERVICES Section
```
헤드라인: "Commercial Electrical Services"

서비스 목록:
1. Commercial Installation
   - New construction electrical systems
   - Tenant build-out electrical work

2. Electrical Maintenance  
   - Preventive maintenance programs
   - Emergency repair services

3. Lighting & Energy Solutions
   - LED lighting upgrades
   - Energy-efficient systems

4. Power Systems
   - Electrical panel upgrades
   - Generator installation

5. Fire Alarm Systems
   - Installation and testing
   - Code compliance services

6. Data & Communication
   - Network infrastructure
   - Structured cabling
```

### PROJECTS Section
```
헤드라인: "Recent Commercial Projects"

프로젝트 카드 (4개):

1. Dollar General Store Electrical Rollout
   위치: Northern New Jersey
   설명: Complete electrical infrastructure for retail chain expansion
   [이미지 placeholder]

2. Warehouse Distribution Center
   위치: Newark, NJ  
   설명: 50,000 sq ft electrical system installation with energy-efficient lighting
   [이미지 placeholder]

3. Retail Store Build-Out
   위치: Manhattan, NY
   설명: Fast-track electrical installation for flagship store opening
   [이미지 placeholder]

4. Corporate Office Renovation
   위치: Jersey City, NJ
   설명: Modern electrical upgrade including smart building controls
   [이미지 placeholder]
```

### LOCAL LAW Section
```
헤드라인: "NYC Local Law LL88 & LL97 Consultation"

서브텍스트: "Expert guidance for building compliance requirements"

컨텐츠:
- LL88 (Non-residential energy efficiency) compliance planning
- LL97 (Building emissions) electrical system optimization
- Coordination with building management and engineers
- Documentation and reporting support

CTA: "Schedule Compliance Consultation"

노트: 주요 서비스가 아닌 추가 컨설팅 서비스로 포지셔닝
```

### INDUSTRIES Section
```
헤드라인: "Industries We Serve"

산업 분야:
- Retail Chains (체인 소매업)
- Commercial Buildings (상업 빌딩)  
- Property Management (부동산 관리)
- Developers & General Contractors (개발사 & 종합건설업)
- Warehouses & Distribution (창고 & 유통)
- Hospitality (호텔/숙박업)
- Healthcare Facilities (의료시설)
- Manufacturing (제조업)
```

### ABOUT Section
```
헤드라인: "Trusted Commercial Electrical Partner"

컨텐츠:
"Star Delta Electric is a New Jersey-based commercial electrical contractor specializing in large-scale electrical projects across New Jersey and New York. With over 15 years of experience, we deliver reliable electrical solutions for retail, commercial, and industrial clients.

Our team of licensed electricians focuses on project-driven execution, ensuring every installation meets code requirements and exceeds client expectations."

자격증/보험 (임시 정보):
- Licensed Electrical Contractor (License #EC-12345-NJ)
- Fully Insured & Bonded ($2M General Liability)
- OSHA Certified Teams
- Local Law Compliance Experts
```

### CONTACT Section
```
헤드라인: "Start Your Commercial Electrical Project"

연락처 정보 (임시):
- 전화: (973) 555-0100
- 이메일: info@stardeltaelectric.com  
- 주소: 123 Industrial Blvd, Newark, NJ 07102

서비스 지역: 
"Serving all of New Jersey and the New York Metro Area"

문의 폼 필드:
- Company Name
- Contact Name  
- Email
- Phone
- Project Type (dropdown: Installation, Maintenance, Consultation, Emergency)
- Project Description (textarea)
- Preferred Contact Method (Email/Phone)

CTA 버튼: "Send Project Inquiry"
```

---

## SEO 최적화 요구사항

### 메타데이터
```
Title: "Commercial Electrical Contractor NJ NY | Star Delta Electric"
Description: "Professional commercial electrical contractor serving New Jersey and New York. Retail, warehouse, and commercial electrical installation and maintenance."
Keywords: "commercial electrician New Jersey, electrical contractor NYC, commercial electrical installation NJ, electrical maintenance NY"
```

### H1/H2 구조
```
H1: "Commercial Electrical Contractor Serving New Jersey & New York"
H2: "Commercial Electrical Services"  
H2: "Recent Commercial Projects"
H2: "NYC Local Law LL88 & LL97 Consultation"
H2: "Industries We Serve"
H2: "Trusted Commercial Electrical Partner"
H2: "Start Your Commercial Electrical Project"
```

### 구조화된 데이터
- LocalBusiness Schema markup
- Service Area geographic markup
- Organization schema
- Review/Rating schema 준비

---

## 한국어 페이지 (/ko) 컨텐츠

### 주요 섹션 번역
```
Hero:
헤드라인: "뉴저지 & 뉴욕 상업용 전기 계약업체"
서브텍스트: "소매, 창고, 상업용 전기 프로젝트를 신뢰성과 규모로 제공합니다."

Navigation:
- 서비스
- 프로젝트  
- 지방법 컨설팅
- 산업 분야
- 회사 소개
- 연락처

Services: "상업용 전기 서비스"
Projects: "최근 상업 프로젝트"  
Local Law: "NYC 지방법 LL88 & LL97 컨설팅"
Industries: "서비스 산업 분야"
About: "신뢰할 수 있는 상업용 전기 파트너"
Contact: "상업용 전기 프로젝트 시작하기"

CTA 버튼:
- "프로젝트 견적 요청"
- "팀과 상담하기"
- "컨설팅 일정 예약"
- "프로젝트 문의 보내기"
```

---

## 기술 사양

### 컴포넌트 구조
```
components/
├── Navbar.js
├── Hero.js  
├── Services.js
├── Projects.js
├── ProjectCard.js
├── LocalLawSection.js
├── Industries.js
├── About.js
├── ContactForm.js
└── Footer.js

app/
├── page.js (메인 페이지)
├── layout.js (루트 레이아웃)
├── globals.css
└── ko/
    └── page.js (한국어 페이지)
```

### 디자인 시스템

#### 컬러 팔레트
```
Primary: #1e293b (Dark slate)
Secondary: #f59e0b (Amber)  
Accent: #3b82f6 (Blue)
Background: #f8fafc (Light gray)
Text Primary: #0f172a (Very dark)
Text Secondary: #64748b (Medium gray)
```

#### 타이포그래피
```
Font Family: Inter (Google Fonts)
Headings: 
- H1: text-4xl md:text-6xl font-bold
- H2: text-3xl md:text-4xl font-semibold  
- H3: text-2xl md:text-3xl font-semibold
Body: text-lg leading-relaxed
```

#### 반응형 브레이크포인트
```
Mobile: < 768px
Tablet: 768px - 1024px  
Desktop: > 1024px
Large Desktop: > 1280px
```

### Tailwind CSS 설정
```
- Dark/neutral 색상 팔레트 확장
- 커스텀 애니메이션 (scroll-smooth)
- 그리드 레이아웃 유틸리티
- 그림자 및 border-radius 커스텀
```

---

## 성능 최적화

### 이미지 최적화
- Next.js Image 컴포넌트 사용
- WebP 형식 우선 사용
- Lazy loading 적용
- 적절한 sizes 속성 설정

### 폰트 최적화
- Google Fonts 최적화 로딩
- Font display: swap 설정
- 폰트 서브셋 로딩

### 코드 최적화
- Tailwind CSS purge 설정
- 컴포넌트 기반 코드 분할
- 이미지 lazy loading
- Critical CSS 인라인

---

## Vercel 배포 설정

### vercel.json 구성
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### 환경 변수
```
NEXT_PUBLIC_SITE_URL=https://stardeltaelectric.com
NEXT_PUBLIC_CONTACT_EMAIL=info@stardeltaelectric.com
```

### 도메인 설정
```
Primary: stardeltaelectric.com
Korean: stardeltaelectric.com/ko
```

---

## 개발 단계별 체크리스트

### Phase 1: 프로젝트 설정
- [ ] Next.js 프로젝트 생성
- [ ] Tailwind CSS 설정
- [ ] 기본 폴더 구조 생성
- [ ] ESLint/Prettier 설정

### Phase 2: 레이아웃 & 네비게이션
- [ ] 루트 레이아웃 구성
- [ ] 네비게이션 컴포넌트
- [ ] 푸터 컴포넌트
- [ ] 모바일 메뉴

### Phase 3: 주요 섹션
- [ ] Hero 섹션
- [ ] Services 섹션
- [ ] Projects 섹션 (이미지 placeholder)
- [ ] Local Law 섹션

### Phase 4: 완성 & 부가기능
- [ ] Industries 섹션
- [ ] About 섹션  
- [ ] Contact Form (기능 구현)
- [ ] 한국어 페이지

### Phase 5: 최적화 & 배포
- [ ] SEO 메타데이터
- [ ] 성능 최적화
- [ ] Vercel 배포
- [ ] 도메인 연결

---

## 참고사항

### 임시 데이터 사용
- 연락처 정보는 임시 데이터 사용
- 프로젝트 이미지는 placeholder 처리
- 라이선스 정보는 예시 데이터

### 향후 업데이트 필요
- 실제 회사 정보로 교체
- 실제 프로젝트 사진 삽입
- 정확한 라이선스 번호 및 보험 정보
- Google Analytics 및 추가 SEO 도구 연동

### 추가 기능 고려사항
- 프로젝트 갤러리 확장
- 고객 후기 섹션
- 블로그/뉴스 섹션
- 온라인 견적 계산기

---

**개발 준비 완료** ✅  
이 계획서를 바탕으로 단계별 코딩 진행 가능합니다.