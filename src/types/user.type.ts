import { TEntity } from "./app.type";
import { TProgram } from "./program.type";

export type TUser = TEntity & {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string | null;
  imgUrl?: string | null;
  isTrainer?: boolean;
};

export type TTrainee = TUser & {
  programs: TProgram[]; //TODO: add program type
};

export type TUserFilter = {
  email?: string;
  phone?: string;
  isTrainer?: boolean;
};
