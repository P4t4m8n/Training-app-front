import { TEntity } from "./app.type";
import { TSet } from "./set.type";

export type TTraining = TEntity & {
  videosURL: string[];
  userVideosURL: string[];
  set: number;
  goalSet: number;
  name: string;
  sets: TSet[];
};

export type TTrainingDTO = TEntity &
  TTraining & {
    programId: string;
  };
