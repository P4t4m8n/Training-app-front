import { DAYS_OF_WEEK, TDaysOfWeek } from "../../../types/program.type";
import Input from "../../UI/Form/Input";
import Label from "../../UI/Form/Label";

interface Props {
  daysOfWeek: TDaysOfWeek[];
}

export default function ProgramEditDaysOfWeek({ daysOfWeek }: Props) {
  return (
    <ul className="flex flex-wrap gap-2 border rounded p-2">
      {DAYS_OF_WEEK.map((day) => (
        <li key={day}>
          <Label htmlFor={`day-${day}`}>{day}</Label>
          <Input
            type="checkbox"
            name={`days-${day}`}
            id={`day-${day}`}
            value={day}
            defaultChecked={daysOfWeek.includes(day)}
            className=" border-none"
          />
        </li>
      ))}
    </ul>
  );
}
