import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiService } from "../../../../services/api.service.";
import { TTrainee } from "../../../../types/user.type";
import TraineeEditSwitch from "./TraineeInfo/TraineeEditSwitch";
import TraineeProgramIndex from "./TraineeProgram/TraineeProgramIndex";

export default function TraineeDetails() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [trainee, setTrainee] = useState<TTrainee | null>(null);

  useEffect(() => {
    const loadTrainee = async () => {
      try {
        setIsLoading(true);
        const _trainee = await apiService.get<TTrainee>(`user/${id}`);
        setTrainee(_trainee);
      } catch (error) {
        console.error("Failed to load trainee", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadTrainee();
  }, [id]);
  console.log("id:", id);

  if (isLoading || !trainee) {
    return <div>...Loading</div>;
  }
  return (
    <div className="p-4 flex gap-4 w-full flex-wrap h-[calc(100%-2.5rem)]">
      <TraineeEditSwitch trainee={trainee} />
      <div className="border rounded w-[calc(50%-.5rem)]"></div>

      <TraineeProgramIndex trainee={trainee} />
    </div>
  );
}
