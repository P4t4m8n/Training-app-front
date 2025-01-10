import { useState } from "react";
import { TTraining } from "../../../types/training.type";
import { TProgram } from "../../../types/program.type";
import Button from "../../UI/Button";
import Input from "../../UI/Form/Input";
import Label from "../../UI/Form/Label";
import { SetsUtil } from "../../../utils/sets.util";
import TrainingEditSets from "./TrainingEditSets";
import TrainingEditVideos from "./TrainingEditVideos";

interface Props {
  training: TTraining;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setProgramToEdit: React.Dispatch<React.SetStateAction<TProgram | null>>;
}
export default function TrainingEditIndex({
  training,
  setIsOpen,
  setProgramToEdit,
}: Props) {
  const [trainingToEdit, setTrainingToEdit] = useState(training);
  const { name, videosURL, userVideosURL, set, goalSet, sets } = trainingToEdit;
  console.log("userVideosURL:", userVideosURL);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.target;
    setTrainingToEdit((prev) => ({ ...prev, [name]: value }));
  };

  function onSaveTraining(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setProgramToEdit((prev) => {
      const trainings = (prev?.trainings ?? []).map((t) => {
        if (t.name === training.name) {
          return trainingToEdit;
        }
        return t;
      });

      return { ...prev!, trainings };
    });
    setIsOpen(false);
  }

  async function onAddSet(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const emptySet = SetsUtil.getEmpty();
    setTrainingToEdit((prev) => ({ ...prev, sets: [...prev.sets, emptySet] }));
  }

  return (
    <div className="flex flex-col gap-4 ">
      <div className="">
        <Label htmlFor={`trainingName${name}`}>Name:</Label>
        <Input
          placeholder="Name"
          name="name"
          id={`trainingName${name}`}
          value={name}
          onChange={onChange}
        />
      </div>
      <TrainingEditVideos
        videosURL={videosURL}
        setTrainingToEdit={setTrainingToEdit}
      />
      <div className="">
        <div className="">
          <Label htmlFor={`trainingSet${name}`}>Set:</Label>
          <Input
            name="set"
            value={set}
            id={`trainingSet${name}`}
            onChange={onChange}
          />
        </div>
        <div className="">
          <Label htmlFor={`trainingGoalSet${name}`}>Goal Set:</Label>
          <Input
            name="goalSet"
            value={goalSet}
            id={`trainingGoalSet${name}`}
            onChange={onChange}
          />
        </div>
      </div>
      <TrainingEditSets
        sets={sets}
        setTrainingToEdit={setTrainingToEdit}
        onAddSet={onAddSet}
      />

      <Button
        styleMode="primary"
        styleSize="large"
        onClick={(e) => onSaveTraining(e)}
      >
        Save
      </Button>
    </div>
  );
}
