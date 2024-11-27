import { School } from 'lucide-react';
import { FeatureItem } from '@/components/auth/feature-item';
import { cn } from '@/lib/utils';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left side - Auth Form */}
      <div className="relative flex items-center justify-center p-8 lg:p-12">
        <div className="absolute left-8 top-8">
          <School className="h-8 w-auto" />
        </div>
        <div className="w-full max-w-sm">{children}</div>
      </div>

      {/* Right side - Features Overview */}
      <div
        className={cn(
          'relative hidden overflow-hidden lg:flex',
          'bg-gradient-to-br from-blue-600 to-blue-800'
        )}
      >
        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <h1 className="mb-6 text-3xl font-bold">
            멘토와 멘티를 위한
            <br />
            올인원 멘토링 플랫폼
          </h1>

          <div className="space-y-6">
            <FeatureItem
              title="스마트한 일정 관리"
              description="멘토의 가용 시간 설정부터 멘티의 예약까지, 효율적인 일정 관리 시스템"
            />
            <FeatureItem
              title="1:1 멘토링 공간"
              description="개인화된 게시판, 실시간 채팅, 화상 회의로 원활한 소통"
            />
            <FeatureItem
              title="팀 멘토링 허브"
              description="팀별 작업 공간, 코드 리뷰, 프로젝트 관리까지 한번에"
            />
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
      </div>
    </div>
  );
}
