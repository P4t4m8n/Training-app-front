import { TProgram, TProgramDto } from "../types/program.type";

const getEmpty = (): TProgram => {
  return {
    days: [],
    startDate: new Date(),
    endDate: new Date(),
    trainings: [],
    userId: "",
    name: "",
  };
};
const getEmptyDto = (): TProgramDto => {
  return {
    days: [],
    startDate: new Date(),
    endDate: new Date(),
    userId: "",
    name: "",
  };
};

export const programUtil = {
  getEmpty,
  getEmptyDto,
};
