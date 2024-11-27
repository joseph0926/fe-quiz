'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useSchedule } from '@/stores/use-schedule';
import MentorScheduleStepOne from './mentor-schedule-one';
import MentorScheduleStepTwo from './mentor-schedule-two';

export function MentorSchedule() {
  const { step } = useSchedule();

  return (
    <div className="relative min-h-[600px]">
      <div
        className={cn(
          'absolute inset-0 transition-all duration-300',
          step === 1
            ? 'z-10 translate-x-0 opacity-100'
            : 'z-0 -translate-x-full opacity-0'
        )}
      >
        <MentorScheduleStepOne />
      </div>
      <div
        className={cn(
          'absolute inset-0 transition-all duration-300',
          step === 2
            ? 'z-10 translate-x-0 opacity-100'
            : 'z-0 translate-x-full opacity-0'
        )}
      >
        <MentorScheduleStepTwo />
      </div>
    </div>
  );
}
