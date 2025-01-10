import { TEntity } from "./app.type";
import { TTraining } from "./training.type";

export type TProgram = TEntity & {
  days: TDaysOfWeek[];
  startDate: Date;
  endDate: Date;
  trainings: TTraining[];
  userId: string;
  name: string;
};

export type TProgramDto = TEntity & {
  days: TDaysOfWeek[];
  startDate: Date;
  endDate: Date;
  userId: string;
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
