import { TProgram } from "../../../types/program.type";
import { TTraining } from "../../../types/training.type";

import { trainingUtil } from "../../../utils/training.util";

import TrainingPreview from "../../Training/TrainingPreview";
import Button from "../../UI/Button";
import ItemList from "../../UI/ItemList";

interface Props {
  setProgramToEdit: React.Dispatch<React.SetStateAction<TProgram | null>>;
  trainings: TTraining[];
}
export default function ProgramEditTraining({
  setProgramToEdit,
  trainings,
}: Props) {
  async function addTraining(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const emptyTraining = trainingUtil.getEmpty("new training");
    setProgramToEdit((prev) => {
      return {
        ...prev!,
        trainings: [...(prev?.trainings || []), emptyTraining],
      };
    });
  }
  return (
    <div>
      <Button
        styleMode="tertiary"
        styleSize="small"
        onClick={(e) => addTraining(e)}
      >
        Add Training
      </Button>
      <ul>
        <ItemList
          items={trainings}
          renderItem={(training) => (
            <TrainingPreview
              training={training}
              setProgramToEdit={setProgramToEdit}
            />
          )}
        />
      </ul>
    </div>
  );
}
