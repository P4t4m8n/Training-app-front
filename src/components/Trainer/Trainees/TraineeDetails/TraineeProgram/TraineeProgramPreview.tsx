import { TProgram } from "../../../../../types/program.type";
import { ActiveSvg, CancelSvg } from "../../../../UI/Icons/IconsSvg";

interface Props {
  program: TProgram;
}
export default function TraineeProgramPreview({ program }: Props) {
  const { name, startDate, endDate, trainings } = program;

  const formatStartDate = new Date(startDate);
  const formatEndDate = new Date(endDate);

  const isActive = new Date() >= formatStartDate && new Date() <= formatEndDate;
  return (
    <li className=" grid grid-flow-col border-b pb-2 mb-2">
      <h2>{name}</h2>

      <h2>{trainings.length}</h2>
      {isActive ? <ActiveSvg/>:<CancelSvg/>}
     
    </li>
  );
}
