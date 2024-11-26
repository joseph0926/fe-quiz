# 멘토브릿지

멘토브릿지는 멘토와 멘티를 위한 올인원 멘토링 플랫폼입니다. 효율적인 일정 관리, 1:1 소통, 팀 멘토링을 위한 다양한 기능을 제공합니다.

## 🌟 주요 기능

### 📅 스케줄링 시스템

- 멘토의 가용 시간 설정 및 관리
- 멘티의 간편한 멘토링 세션 예약
- 실시간 일정 동기화 및 알림
- Google Calendar 연동

### 💬 1:1 멘토링 공간

- 개인화된 멘토-멘티 게시판
- 실시간 채팅 및 화상 회의
- 파일 공유 및 질문/답변 관리
- 멘토링 내역 기록 및 추적

### 👥 팀 멘토링 허브

- 팀별 전용 작업 공간
- 코드 리뷰 시스템 (GitHub 연동)
- 팀 프로젝트 진행 현황 관리
- 팀원 간 협업 도구

## 🛠 기술 스택

- **Frontend**: React 19, Next.js 15, TailwindCSS, TypeScript
- **Backend**: Next.js API Routes
- **인증**: Clerk
- **데이터베이스**: PostgreSQL, Prisma ORM
- **배포**: Vercel (예정)

## 🚀 시작하기

### 필수 요구사항

- Node.js 20 이상
- PostgreSQL
- pnpm

### 환경 설정

1. 레포지토리 클론

```bash
git clone https://github.com/joseph0926/mentor-bridge.git
```

2. 의존성 설치

```bash
pnpm install
```

3. 환경 변수 설정

```bash
cp .env.example .env
```

필요한 환경 변수:

```sh
DATABASE_URL= #psql

```

4. 데이터베이스 세팅

```bash
pnpm exec prisma generate
pnpm exec prisma migrate dev
```

5. 개발 서버 실행

```bash
pnpm dev
```

## 📁 프로젝트 구조

```

```
