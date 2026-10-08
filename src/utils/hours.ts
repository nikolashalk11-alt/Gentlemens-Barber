export interface DaySchedule {
  dayName: string;
  dayIndex: number; // 0 for Sunday, 1 for Monday, etc.
  isOpen: boolean;
  openTime?: string;
  closeTime?: string;
  hoursText: string;
}

export const WEEKLY_SCHEDULE: DaySchedule[] = [
  { dayName: 'Κυριακή', dayIndex: 0, isOpen: false, hoursText: 'Κλειστά' },
  { dayName: 'Δευτέρα', dayIndex: 1, isOpen: true, openTime: '10:00', closeTime: '21:00', hoursText: '10:00 π.μ. – 9:00 μ.μ.' },
  { dayName: 'Τρίτη', dayIndex: 2, isOpen: true, openTime: '10:00', closeTime: '21:00', hoursText: '10:00 π.μ. – 9:00 μ.μ.' },
  { dayName: 'Τετάρτη', dayIndex: 3, isOpen: false, hoursText: 'Κλειστά' },
  { dayName: 'Πέμπτη', dayIndex: 4, isOpen: true, openTime: '10:00', closeTime: '21:00', hoursText: '10:00 π.μ. – 9:00 μ.μ.' },
  { dayName: 'Παρασκευή', dayIndex: 5, isOpen: true, openTime: '10:00', closeTime: '21:00', hoursText: '10:00 π.μ. – 9:00 μ.μ.' },
  { dayName: 'Σάββατο', dayIndex: 6, isOpen: true, openTime: '10:00', closeTime: '16:00', hoursText: '10:00 π.μ. – 4:00 μ.μ.' },
];

export interface StoreStatus {
  isOpen: boolean;
  statusText: string;
  subText: string;
}

export function getCurrentStoreStatus(): StoreStatus {
  // Use Greece time (UTC+2 or UTC+3 for DST)
  const now = new Date();
  // Get time in Athens timezone
  const athensTimeStr = now.toLocaleString("en-US", { timeZone: "Europe/Athens" });
  const athensDate = new Date(athensTimeStr);

  const day = athensDate.getDay();
  const hours = athensDate.getHours();
  const minutes = athensDate.getMinutes();
  const currentTotalMinutes = hours * 60 + minutes;

  const todaySchedule = WEEKLY_SCHEDULE.find((s) => s.dayIndex === day);

  if (!todaySchedule || !todaySchedule.isOpen || !todaySchedule.openTime || !todaySchedule.closeTime) {
    return {
      isOpen: false,
      statusText: 'Κλειστά τώρα',
      subText: day === 0 ? 'Ανοίγει Δευτέρα στις 10:00 π.μ.' : day === 3 ? 'Ανοίγει Πέμπτη στις 10:00 π.μ.' : 'Ανοίγει αύριο στις 10:00 π.μ.',
    };
  }

  const [openH, openM] = todaySchedule.openTime.split(':').map(Number);
  const [closeH, closeM] = todaySchedule.closeTime.split(':').map(Number);
  const openTotalMinutes = openH * 60 + openM;
  const closeTotalMinutes = closeH * 60 + closeM;

  if (currentTotalMinutes >= openTotalMinutes && currentTotalMinutes < closeTotalMinutes) {
    return {
      isOpen: true,
      statusText: 'Ανοιχτά τώρα',
      subText: `Κλείνει στις ${todaySchedule.closeTime.replace(':00', ':00 μ.μ.')}`,
    };
  } else if (currentTotalMinutes < openTotalMinutes) {
    return {
      isOpen: false,
      statusText: 'Κλειστά τώρα',
      subText: `Ανοίγει σήμερα στις ${todaySchedule.openTime} π.μ.`,
    };
  } else {
    // Already closed today
    const nextDayIndex = (day + 1) % 7;
    const nextDay = WEEKLY_SCHEDULE.find((s) => s.dayIndex === nextDayIndex);
    return {
      isOpen: false,
      statusText: 'Κλειστά τώρα',
      subText: nextDay?.isOpen ? `Ανοίγει αύριο στις 10:00 π.μ.` : 'Ανοίγει σύντομα',
    };
  }
}
