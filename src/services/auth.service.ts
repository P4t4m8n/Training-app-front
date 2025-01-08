import { TTrainee } from "../types/user.type";
import { apiService } from "./api.service.";

async function validateToken(token: string) {
  const user = await apiService.get<TTrainee>(`auth/validate/${token}`);
  return user;
}

export const authService = {
  validateToken,
};
