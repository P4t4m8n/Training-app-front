import { TEntity } from "./app.type";

export type TSet = TEntity & {
  reps: number;
  goalReps: number;
  weight: number;
  rest: number;
};
