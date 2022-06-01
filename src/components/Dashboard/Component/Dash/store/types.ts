export interface EventType {
  color: string;
  start: string;
  end: string;
  name: string;
  timed: string;
}
export interface DasboardList {
  calendarEvents: EventType[];
}

export interface RootState {}
