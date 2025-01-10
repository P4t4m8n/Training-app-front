import { useRef } from "react";
import { useModel } from "../../hooks/useModel";
import Button from "../UI/Button";
import { TTraining } from "../../types/training.type";
import TrainingIndex from "./TrainingIndex";
import { TProgram } from "../../types/program.type";

interface Props {
  training: TTraining;
  setProgramToEdit: React.Dispatch<React.SetStateAction<TProgram | null>>;
}
export default function TrainingPreview({ training,setProgramToEdit }: Props) {
  const modelRef = useRef<HTMLLIElement>(null);
  const [isOpen, setIsOpen] = useModel(modelRef);
  return (
    <li ref={modelRef}>
      <Button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(true);
        }}
        styleMode="none"
        styleSize="none"
        className="border rounded p-4 w-full"
      >
        {training.name}
      </Button>
      {isOpen && (
        <div className=" fixed p-4 top-16 left-0 w-full h-[calc(100svh-8rem)] bg-white  flex flex-col ">
          <TrainingIndex training={training} setIsOpen={setIsOpen} setProgramToEdit={setProgramToEdit} />
        </div>
      )}
    </li>
  );
}
