import { TProgram } from "../../../../../types/progrem.type";

interface Props {
  program: TProgram;
}
export default function TraineeProgramPreview({ program }: Props) {
  const { name, startDate, endDate, trainings, daysOfWeek } = program;
  return (
    <li>
      <h2>{name}</h2>
      <h2>{daysOfWeek.join(",")}</h2>
      <h2>{trainings.length}</h2>
      <p>
        {startDate.getDate()} - {endDate.getDate()}
      </p>
    </li>
  );
}
