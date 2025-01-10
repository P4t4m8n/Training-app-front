import { TExercise } from "../types/exercise.type";
import { apiService } from "./api.service.";

async function get() {
  return await apiService.get<TExercise[]>("exercises");
}

export const exerciseService = {
  get,
};
