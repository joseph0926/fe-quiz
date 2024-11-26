'use client';

import { Calendar, Clock } from 'lucide-react';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { useSchedule } from '@/stores/use-schedule';

export default function MentorScheduleStepOne() {
  const { coreTime, setCoreTime, setStep } = useSchedule();

  return (
    <Card className="h-full">
      <CardHeader className="space-y-2 sm:space-y-3">
        <CardTitle className="text-xl sm:text-2xl">
          멘토링 가능 시간 설정
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          하루 중 멘토링이 가능한 시간대를 설정해주세요. 이 시간 외에는 멘토링
          일정을 잡을 수 없습니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 sm:space-y-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
              <span className="text-sm font-medium sm:text-base">
                시작 시간
              </span>
              <Badge variant="secondary" className="w-fit">
                <Clock className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                {String(coreTime.start).padStart(
                  2,
                  '0'
                )}:00
              </Badge>
            </div>
            <Slider
              value={[coreTime.start]}
              min={5}
              max={23}
              step={1}
              onValueChange={(value) => {
                if (value[0] < coreTime.end) {
                  setCoreTime({ ...coreTime, start: value[0] });
                }
              }}
              className="py-4"
            />
          </div>

          <div className="space-y-4">
            <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
              <span className="text-sm font-medium sm:text-base">
                종료 시간
              </span>
              <Badge variant="secondary" className="w-fit">
                <Clock className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                {String(coreTime.end).padStart(
                  2,
                  '0'
                )}:00
              </Badge>
            </div>
            <Slider
              value={[coreTime.end]}
              min={6}
              max={24}
              step={1}
              onValueChange={(value) => {
                if (value[0] > coreTime.start) {
                  setCoreTime({ ...coreTime, end: value[0] });
                }
              }}
              className="py-4"
            />
          </div>
        </div>

        <div
          className={cn(
            'rounded-lg bg-blue-50 p-4 sm:p-6',
            'transition-all hover:bg-blue-100'
          )}
        >
          <h4 className="mb-2 font-medium text-blue-700 sm:text-lg">
            설정된 코어 타임
          </h4>
          <p className="text-sm text-blue-600 sm:text-base">
            매일 {String(coreTime.start).padStart(2, '0')}:00 ~{' '}
            {String(coreTime.end).padStart(2, '0')}:00
            <br />
            하루 {coreTime.end - coreTime.start}시간
          </p>
        </div>

        <Button
          className={cn('w-full gap-2', 'transition-all hover:gap-3')}
          onClick={() => setStep(2)}
        >
          <span>다음: 요일별 시간 설정</span>
          <Calendar className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
