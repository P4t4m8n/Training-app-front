import { TTraining } from "../../../types/training.type";
import VideoRecorderIndex from "../../VideoRecorder/VideoRecorderIndex";

interface Props {
  videosURL: string[];
  setTrainingToEdit: React.Dispatch<React.SetStateAction<TTraining>>;
}
export default function TrainingEditVideos({
  videosURL,
  setTrainingToEdit,
}: Props) {
  console.log("videosURL:", videosURL)
  const addVideosURL = (url: string) => {
    setTrainingToEdit((prev) => ({
      ...prev,
      videosURL: [...prev.videosURL, url],
    }));
  };

  return (
    <div>
      <VideoRecorderIndex addVideosURL={addVideosURL} />
      {videosURL.length ? (
        <ul>
          {videosURL.map((url) => (
            <li key={url}>
              <video src={url} controls></video>
            </li>
          ))}
        </ul>
      ) : (
        <span>no videos</span>
      )}
    </div>
  );
}
