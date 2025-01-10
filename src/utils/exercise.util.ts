import { TExercise } from "../types/exercise.type";

const getEmpty = (): TExercise => {
  return {
    name: "",
  };
};

export const exerciseUtil = {
  getEmpty,
};
