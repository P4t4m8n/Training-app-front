import { TTraining } from "../types/training.type";

const getEmpty = (name: string): TTraining => {
  return {
    videosURL: [],
    userVideosURL: [],
    set: 1,
    goalSet: 1,
    name:name + " " + generateHexDecimal(),
    sets: [],
  };
};

const generateHexDecimal = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

export const trainingUtil = {
  getEmpty,
};
