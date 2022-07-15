export interface LogType {
  _id?: string;
  color: string;
  start: string;
  end: string;
  name: string;
  timed: string;
  details: string;
}
export interface ProfileData {
  logs: LogType[];
}

export interface RootState {}
