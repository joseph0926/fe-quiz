import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: {
    default: '멘토브릿지 | 멘토와 멘티를 잇는 플랫폼',
    template: '%s | 멘토브릿지',
  },
  description:
    '스마트한 일정 관리, 1:1 멘토링, 팀 프로젝트 관리까지 - 멘토와 멘티를 위한 올인원 플랫폼',
  keywords: [
    '멘토링',
    '코딩',
    '프로그래밍',
    '개발자',
    '멘토',
    '멘티',
    '코드리뷰',
    '일정관리',
    '팀프로젝트',
  ],
  authors: [
    {
      name: '김영훈',
      url: 'https://github.com/joseph0926',
    },
  ],
  creator: 'joseph0926',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    // url: "https://mentorbridge.com",
    title: '멘토브릿지 | 멘토와 멘티를 잇는 플랫폼',
    description:
      '스마트한 일정 관리, 1:1 멘토링, 팀 프로젝트 관리까지 - 멘토와 멘티를 위한 올인원 플랫폼',
    siteName: '멘토브릿지',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={cn(pretendard.className, 'antialiased')}>
        {children}
      </body>
    </html>
  );
}
