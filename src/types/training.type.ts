import { TEntity } from "./app.type";
import { TSet } from "./set.type";
import { TVideo } from "./video.type";

export type TTraining = TEntity & {
  videos: TVideo[];
  userVideos?: TVideo[];
  set: number;
  goalSet: number;
  name: string;
  sets: TSet[];
};

export type TTrainingDTO = TEntity &
  TTraining & {
    programId: string;
  };
