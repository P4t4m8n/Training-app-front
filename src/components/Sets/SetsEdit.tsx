import { useState } from "react";
import { TSet } from "../../types/set.type";
import Input from "../UI/Form/Input";
import Label from "../UI/Form/Label";
import Button from "../UI/Button";
import { DeleteSvg, SaveSvg } from "../UI/Icons/IconsSvg";
import { TTraining } from "../../types/training.type";
import { setsService } from "../../services/sets.service";

interface Props {
  set: TSet;
  setTrainingToEdit: React.Dispatch<React.SetStateAction<TTraining>>;
  idx?: number;
}
export default function SetsEdit({ set, setTrainingToEdit, idx }: Props) {
  console.log("set:", set);
  const [setToEdit, setSetToEdit] = useState(set);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { value, name } = e.target;
    setSetToEdit((prev) => ({ ...prev, [name]: +value }));
  }

  function onSubmit(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setTrainingToEdit((prev) => {
      const sets = prev.sets.map((s, i) => {
        if (i === idx) {
          return setToEdit;
        }
        return s;
      });
      return { ...prev, sets };
    });
  }

  async function onDelete(e: React.MouseEvent, idx?: number) {
    e.preventDefault();
    e.stopPropagation();
    if (setToEdit?.id) {
      await removeSet(setToEdit.id);
    }

    console.log("idx:", idx);
    setTrainingToEdit((prev) => {
      const sets = prev.sets.filter((_, i) => i !== idx);
      return { ...prev, sets };
    });
  }

  async function removeSet(setId: string) {
    try {
      await setsService.remove(setId);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <li className="flex gap-2">
      {Object.entries(setToEdit).map(([key, value]) => (
        <div key={key + idx}>
          <Label htmlFor={key + idx}>{key.toUpperCase()}</Label>
          <Input
            id={key + idx}
            type="text"
            value={value}
            name={key}
            onChange={onChange}
          ></Input>
        </div>
      ))}
      <Button
        styleMode="none"
        styleSize="none"
        className=" h-6 mt-auto  aspect-square"
        onClick={onSubmit}
      >
        <SaveSvg className="w-full h-full block" />
      </Button>
      <Button
        styleMode="none"
        styleSize="none"
        className=" h-6 mt-auto  aspect-square"
        onClick={(e) => onDelete(e, idx)}
      >
        <DeleteSvg className="w-full h-full block" />
      </Button>
    </li>
  );
}
