import { TSet } from "../types/set.type";

const getEmpty = (): TSet => {
  return {
    reps: 10,
    goalReps: 15,
    weight: 1,
    rest: 60,
  };
};

export const SetsUtil = {
  getEmpty,
};
