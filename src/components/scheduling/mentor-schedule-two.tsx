'use client';

import { X } from 'lucide-react';
import { motion } from 'motion/react';
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
import { useSchedule } from '@/stores/use-schedule';

const DAYS = ['월', '화', '수', '목', '금', '토', '일'];

const formatHour = (hour: number) => {
  return `${String(hour).padStart(2, '0')}:00`;
};

export default function MentorScheduleStepTwo() {
  const {
    coreTime,
    selectedSlots,
    isDragging,
    dragStart,
    setStep,
    setSelectedSlots,
    setIsDragging,
    setDragStart,
  } = useSchedule();

  const HOURS = Array.from(
    { length: coreTime.end - coreTime.start },
    (_, i) => i + coreTime.start
  );

  const isSlotSelected = (day: number, hour: number) => {
    return selectedSlots.some(
      (slot) => slot.dayOfWeek === day && slot.hour === hour
    );
  };

  const generateSlotId = (day: number, hour: number) => {
    return `${day}-${hour}`;
  };

  const toggleSlot = (day: number, hour: number) => {
    const slotId = generateSlotId(day, hour);

    if (isSlotSelected(day, hour)) {
      setSelectedSlots(selectedSlots.filter((slot) => slot.id !== slotId));
    } else {
      setSelectedSlots([
        ...selectedSlots,
        { id: slotId, dayOfWeek: day, hour },
      ]);
    }
  };

  const handleMouseDown = (day: number, hour: number) => {
    setIsDragging(true);
    setDragStart({ day, hour });
    toggleSlot(day, hour);
  };

  const handleMouseEnter = (day: number, hour: number) => {
    if (isDragging && dragStart) {
      toggleSlot(day, hour);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStart(null);
  };

  const getSelectedTimeRanges = () => {
    const ranges: { day: number; start: number; end: number }[] = [];

    DAYS.forEach((_, day) => {
      const daySlots = selectedSlots
        .filter((slot) => slot.dayOfWeek === day)
        .map((slot) => slot.hour)
        .sort((a, b) => a - b);

      if (daySlots.length > 0) {
        let start = daySlots[0];
        let prev = start;

        for (let i = 1; i <= daySlots.length; i++) {
          const curr = daySlots[i];
          if (curr !== prev + 1) {
            ranges.push({ day, start, end: prev + 1 });
            start = curr;
          }
          prev = curr;
        }
        if (start !== undefined) {
          ranges.push({ day, start, end: prev + 1 });
        }
      }
    });

    return ranges;
  };

  return (
    <Card
      className={`transition-opacity duration-300`}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>요일별 멘토링 시간 설정</CardTitle>
            <CardDescription>
              코어 타임 {formatHour(coreTime.start)} ~{' '}
              {formatHour(coreTime.end)} 내에서 실제 멘토링이 가능한 시간을
              선택해주세요.
            </CardDescription>
          </div>
          <Button variant="outline" onClick={() => setStep(1)}>
            코어 타임 수정
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto rounded-lg border bg-white">
          <div
            className="grid min-w-[800px]"
            style={{ gridTemplateColumns: 'auto repeat(7, 1fr)' }}
          >
            {/* Header */}
            <div className="bg-gray-100 p-4"></div>
            {DAYS.map((day) => (
              <div
                key={day}
                className="border-l bg-gray-100 p-4 text-center font-medium"
              >
                {day}
              </div>
            ))}

            {/* Time slots */}
            {HOURS.map((hour) => (
              <React.Fragment key={hour}>
                <div className="border-t bg-gray-50 p-4 text-sm text-gray-600">
                  {formatHour(hour)}
                </div>
                {DAYS.map((_, dayIndex) => (
                  <motion.div
                    key={`${dayIndex}-${hour}`}
                    className={`border-l border-t p-4 text-center transition-colors ${
                      isSlotSelected(dayIndex, hour)
                        ? 'bg-blue-500 hover:bg-blue-600'
                        : 'hover:bg-blue-50'
                    }`}
                    onMouseDown={() => handleMouseDown(dayIndex, hour)}
                    onMouseEnter={() => handleMouseEnter(dayIndex, hour)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-medium">선택된 시간</h3>
          <div className="flex flex-wrap gap-2">
            {getSelectedTimeRanges().map((range, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="flex items-center gap-2"
              >
                {DAYS[range.day]} {formatHour(range.start)}-
                {formatHour(range.end)}
                <X
                  className="h-4 w-4 cursor-pointer hover:text-red-500"
                  onClick={() => {
                    setSelectedSlots(
                      selectedSlots.filter(
                        (slot) =>
                          !(
                            slot.dayOfWeek === range.day &&
                            slot.hour >= range.start &&
                            slot.hour < range.end
                          )
                      )
                    );
                  }}
                />
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
