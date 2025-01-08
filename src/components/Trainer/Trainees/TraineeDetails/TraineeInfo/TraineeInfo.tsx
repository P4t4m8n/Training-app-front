import { TTrainee } from "../../../../../types/user.type";

interface Props {
  trainee: TTrainee;
}

export default function TraineeInfo({ trainee }: Props) {
  const { firstName, lastName, email, phone } = trainee;
  return (
    <div className=" flex flex-col">
      <span className="flex gap-1">
        <h3 className=" font-semibold">first name:</h3>
        <p>{firstName}</p>
      </span>
      <span className="flex gap-1">
        <h3 className=" font-semibold">last name:</h3>
        <p>{lastName}</p>
      </span>
      <span className="flex gap-1">
        <h3 className=" font-semibold">email:</h3>
        <p>{email}</p>
      </span>

      <span className="flex gap-1">
        <h3 className=" font-semibold">phone:</h3>
        <p>{phone}</p>
      </span>
    </div>
  );
}
