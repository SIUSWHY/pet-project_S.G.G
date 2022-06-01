export interface EventType {
  _id?: string;
  color: string;
  start: string;
  end: string;
  name: string;
  timed: string;
  details: string;
}
export interface DasboardList {
  calendarEvents: EventType[];
}

export interface RootState {}
