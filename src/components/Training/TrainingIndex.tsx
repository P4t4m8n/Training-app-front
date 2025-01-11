import { useState } from "react";
import { TTraining } from "../../types/training.type";
import Button from "../UI/Button";
import TrainingEditIndex from "./TrainingEdit/TrainingEditIndex";
import TrainingDetails from "./TrainingDetails";
import { TProgram } from "../../types/program.type";

interface Props {
  training: TTraining;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setProgramToEdit: React.Dispatch<React.SetStateAction<TProgram | null>>;
}

export default function TrainingIndex({
  training,
  setIsOpen,
  setProgramToEdit,
}: Props) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      <header className="w-full justify-between flex border-b pb-2 mb-1">
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(false);
          }}
          styleMode="none"
          styleSize="none"
          className="border rounded p-1 w-8 aspect-square"
        >
          X
        </Button>
        <h1>{isEdit ? "Edit Training" : "Training Details"}</h1>
        <Button
          styleMode="tertiary"
          styleSize="small"
          onClick={(e) => {
            e.preventDefault();
            setIsEdit((prev) => !prev);
          }}
        >
          Edit
        </Button>
      </header>
      {isEdit ? (
        <TrainingEditIndex
          training={training}
          setProgramToEdit={setProgramToEdit}
          setIsOpen={setIsOpen}
        />
      ) : (
        <TrainingDetails training={training} />
      )}
    </>
  );
}
