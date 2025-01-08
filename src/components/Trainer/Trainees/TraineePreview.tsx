import { Link } from "react-router";
import { TTrainee } from "../../../types/user.type";

interface Props {
  trainee: TTrainee;
}
export default function TraineePreview({ trainee }: Props) {
  const { id, firstName, lastName, email, phone } = trainee;
  return (
    <Link to={`${id}`} className="w-full h-fit">
      <li className="trainee-preview-item">
        <p className="hidden">{id}</p>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </li>
    </Link>
  );
}
