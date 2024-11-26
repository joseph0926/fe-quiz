import { create } from 'zustand';

interface TimeSlot {
  id: string;
  dayOfWeek: number;
  hour: number;
}

interface CoreTime {
  start: number;
  end: number;
}

interface ScheduleState {
  step: 1 | 2;
  coreTime: CoreTime;
  selectedSlots: TimeSlot[];
  isDragging: boolean;
  dragStart: { day: number; hour: number } | null;
  setStep: (step: 1 | 2) => void;
  setCoreTime: (coreTime: CoreTime) => void;
  setSelectedSlots: (slots: TimeSlot[]) => void;
  setIsDragging: (isDragging: boolean) => void;
  setDragStart: (dragStart: { day: number; hour: number } | null) => void;
}

export const useSchedule = create<ScheduleState>((set) => ({
  step: 1,
  coreTime: { start: 9, end: 18 },
  selectedSlots: [],
  isDragging: false,
  dragStart: null,
  setStep: (step) => set({ step }),
  setCoreTime: (coreTime) => set({ coreTime }),
  setSelectedSlots: (slots) => set({ selectedSlots: slots }),
  setIsDragging: (isDragging) => set({ isDragging }),
  setDragStart: (dragStart) => set({ dragStart }),
}));
