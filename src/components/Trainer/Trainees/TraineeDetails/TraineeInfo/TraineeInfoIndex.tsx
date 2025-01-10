import { useState } from "react";

import { TTrainee } from "../../../../../types/user.type";
import Button from "../../../../UI/Button";
import TraineeInfoEdit from "./TraineeInfoEdit";
import TraineeInfo from "./TraineeInfo";
interface Props {
  trainee: TTrainee;
}
export default function TraineeInfoIndex({ trainee }: Props) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="flex  border rounded p-4 w-full justify-between items-start">
      {isEdit ? (
        <TraineeInfoEdit trainee={trainee} />
      ) : (
        <TraineeInfo trainee={trainee} />
      )}
      <Button
        styleMode="secondary"
        styleSize="medium"
        onClick={() => setIsEdit((prev) => !prev)}
      >
        {isEdit ? "Cancel" : "Edit"}
      </Button>
    </div>
  );
}
