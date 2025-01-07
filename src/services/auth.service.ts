import { TUserFull } from "../types/user.type";
import { apiService } from "./api.service.";

async function validateToken(token: string) {
  const user = await apiService.get<TUserFull>("auth/validate", { token });
  return user;
}

export const authService = {
  validateToken,
};
