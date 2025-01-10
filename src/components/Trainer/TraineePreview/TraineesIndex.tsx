import { useEffect, useState } from "react";
import ItemList from "../../UI/ItemList";
import { TTrainee } from "../../../types/user.type";
import { useSearchParams } from "react-router";
import { apiService } from "../../../services/api.service.";
import TraineePreview from "../Trainees/TraineePreview";

export default function TraineesIndex() {
  const [trainees, setTrainees] = useState<TTrainee[]>([]);
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadTrainees = async () => {
      try {
        setIsLoading(true);
        const apiEndPoint = `user/?${searchParams.toString()}`;
        const trainees = await apiService.get<TTrainee[]>(apiEndPoint);
        setTrainees(trainees);
      } catch (error) {
        console.error("Failed to load trainees", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTrainees();
  }, [searchParams]);

  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <div>
      <h1>Trainees</h1>
      <ItemList
        items={trainees}
        renderItem={(trainee) => <TraineePreview trainee={trainee} />}
      />
    </div>
  );
}
