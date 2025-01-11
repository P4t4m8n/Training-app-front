import { TSet } from "../../../types/set.type";
import { TTraining } from "../../../types/training.type";
import SetsEdit from "../../Sets/SetsEdit";
import Button from "../../UI/Button";
import ItemList from "../../UI/ItemList";

interface Props {
  sets: TSet[];
  setTrainingToEdit: React.Dispatch<React.SetStateAction<TTraining>>;
  onAddSet: (e: React.MouseEvent) => void;
}
export default function TrainingEditSets({
  sets,
  setTrainingToEdit,
  onAddSet,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <Button
        styleMode="primary"
        styleSize="medium"
        onClick={(e) => onAddSet(e)}
      >
        Add Set
      </Button>
      {sets.length ? (
        <ItemList
          items={sets}
          renderItem={(set, idx) => (
            <SetsEdit
              set={set}
              idx={idx}
              setTrainingToEdit={setTrainingToEdit}
            />
          )}
        />
      ) : (
        <span>no sets</span>
      )}
    </div>
  );
}
