import React from "react";
import { TVideo } from "../../../types/video.type";
import ItemList from "../../UI/ItemList";
import VideoPlayerIndex from "../../VideoPlayer/VideoPlayerIndex";
import VideoRecorderIndex from "../../VideoRecorder/VideoRecorderIndex";

interface Props {
  videos: TVideo[];
  setTrainingToEdit: React.Dispatch<React.SetStateAction<TVideo[]>>;
}

const TrainingEditVideos: React.FC<Props> = ({ videos, setTrainingToEdit }) => {
  const addVideosURL = (video: TVideo) => {
    setTrainingToEdit((prev) => [...prev, video]);
  };

  return (
    <div>
      <VideoRecorderIndex addVideosURL={addVideosURL} />
      {videos?.length ? (
        <ItemList
          items={videos}
          renderItem={(video) => <VideoPlayerIndex video={video} />}
        />
      ) : (
        <span>no videos</span>
      )}
    </div>
  );
};

export default React.memo(TrainingEditVideos);
