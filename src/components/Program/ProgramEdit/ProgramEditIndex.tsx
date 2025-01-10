import { useEffect, useState } from "react";
import { TProgram } from "../../../types/program.type";
import { useParams } from "react-router";
import { programService } from "../../../services/program.service";
import { programUtil } from "../../../utils/program.util";
import Input from "../../UI/Form/Input";
import Button from "../../UI/Button";
import ProgramEditDaysOfWeek from "./ProgramEditDaysOfWeek";
import ProgramEditDates from "./ProgramEditDates";
import ProgramEditTraining from "./ProgramEditTraining";

export default function ProgramEditIndex() {
  const [programToEdit, setProgramToEdit] = useState<TProgram | null>(null);
  console.log("programToEdit:", programToEdit);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id: programId, userId } = useParams<{ userId: string; id: string }>();

  useEffect(() => {
    const getPrograms = async () => {
      try {
        setIsLoading(true);
        const program = programId
          ? await programService.getById(programId)
          : await programService.create({
              ...programUtil.getEmptyDto(),
              userId: userId!,
            });
        if (program?.userId) {
          program.userId = userId!;
        }
        setProgramToEdit(program);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!programToEdit) getPrograms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  if (isLoading || !programToEdit) {
    return <div>Loading...</div>;
  }

  const { name, id, days, startDate, endDate, trainings } = programToEdit;

  return (
    <div className="p-4">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <Input type="hidden" name="id" defaultValue={id} />

        <Input type="text" placeholder="Name" defaultValue={name} />

        <ProgramEditDaysOfWeek daysOfWeek={days} />
        <ProgramEditDates startDate={startDate} endDate={endDate} />
        <ProgramEditTraining
          setProgramToEdit={setProgramToEdit}
          trainings={trainings}
        />
        <Button styleMode="secondary" styleSize="large" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
}
