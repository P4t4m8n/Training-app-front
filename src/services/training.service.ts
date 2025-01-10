import { TTraining, TTrainingDTO } from "../types/training.type";
import { apiService } from "./api.service.";

async function create(dto: TTrainingDTO): Promise<TTraining> {
  return await apiService.post<TTraining>("/trainings", dto);
}

export const trainingService = {
  create,
};
