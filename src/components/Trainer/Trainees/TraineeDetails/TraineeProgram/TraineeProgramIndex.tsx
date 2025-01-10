import { TTrainee } from "../../../../../types/user.type";
import ItemList from "../../../../UI/ItemList";
import LinkCmp from "../../../../UI/Link";
import ProgramListHeader from "./ProgramListHeader";
import TraineeProgramPreview from "./TraineeProgramPreview";

interface Props {
  trainee: TTrainee;
}
export default function TraineeProgramIndex({ trainee }: Props) {
  const { id: userId, programs } = trainee;
  return (
    <div className="flex-1 border rounded h-[calc(100%-9rem)] overflow-auto flex flex-col p-4">
      <LinkCmp
        to={`/program/${userId}/edit`}
        className="ml-auto px-4 border rounded"
      >
        New
      </LinkCmp>
      <div>
        <ProgramListHeader />
        <ItemList
          items={programs}
          renderItem={(program) => <TraineeProgramPreview program={program} />}
        />
      </div>
    </div>
  );
}
