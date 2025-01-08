import { TEntity } from "./app.type";
import { TTraining } from "./training.type";

export type TProgram = TEntity & {
  daysOfWeek: TDaysOfWeek[];
  startDate: Date;
  endDate: Date;
  trainings: TTraining[];
  userId: number;
  name: string;
};

export const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export type TDaysOfWeek = (typeof DAYS_OF_WEEK)[number];
