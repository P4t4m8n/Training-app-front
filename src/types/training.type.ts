import { TEntity } from "./app.type";
import { TExercise } from "./exercise.type";
import { TSet } from "./set.type";

export type TTraining = TEntity & {
  videosURL: string[];
  userVideosURL: string[];
  set: number;
  goalSet: number;
  exercises: TExercise;
  sets: TSet[];
};


