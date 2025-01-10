import Input from "../../UI/Form/Input";
import Label from "../../UI/Form/Label";

interface Props {
  startDate: Date;
  endDate: Date;
}
export default function ProgramEditDates({ startDate, endDate }: Props) {
  return (
    <div>
      <Label htmlFor="startDate">Start Date</Label>
      <Input
        type="date"
        name="startDate"
        id="startDate"
        defaultValue={startDate.toISOString().split("T")[0]}
      />
      <Label htmlFor="endDate">Edn Date</Label>
      <Input
        type="date"
        name="endDate"
        id="endDate"
        defaultValue={endDate.toISOString().split("T")[0]}
      />
    </div>
  );
}
