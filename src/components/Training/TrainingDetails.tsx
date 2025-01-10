import { TTraining } from "../../types/training.type";
import SetsDetails from "../Sets/SetsDetails";
import ItemList from "../UI/ItemList";

interface Props {
  training: TTraining;
}
export default function TrainingDetails({ training }: Props) {
  const { name, videosURL, userVideosURL, set, goalSet, sets } = training;
  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-lg text-center font-semibold">{name}</h2>
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
      {userVideosURL.length ? (
        <ul>
          {videosURL.map((url) => (
            <li key={url}>
              <video src={url} controls></video>
            </li>
          ))}
        </ul>
      ) : (
        <span>no user videos</span>
      )}

      <div className="flex flex-col ">
        <span className="flex gap-1">
          <h4 className="underline font-semibold">Set:</h4>
          <p>{set}</p>
        </span>
        <span className="flex gap-1">
          <h4 className="underline font-semibold">Goal Set:</h4>
          <p>{goalSet}</p>
        </span>
      </div>
      {sets.length ? (
        <ul>
          <ItemList
            items={sets}
            renderItem={(set) => <SetsDetails set={set} />}
          />
        </ul>
      ) : (
        <span>no sets</span>
      )}
    </div>
  );
}
