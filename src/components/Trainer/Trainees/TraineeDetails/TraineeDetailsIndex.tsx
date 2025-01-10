import { MouseEvent, useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiService } from "../../../../services/api.service.";
import { TTrainee } from "../../../../types/user.type";
import TraineeInfoIndex from "./TraineeInfo/TraineeInfoIndex";
import TraineeProgramIndex from "./TraineeProgram/TraineeProgramIndex";
import Button from "../../../UI/Button";
import { CopySvg } from "../../../UI/Icons/IconsSvg";

export default function TraineeDetails() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [trainee, setTrainee] = useState<TTrainee | null>(null);
  const [magicLink, setMagicLink] = useState<string | null>(null);

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

  async function getMagicLink(e: MouseEvent) {
    e.preventDefault();
    try {
      const { url } = await apiService.post<{ url: string }>(
        "auth/reissueLink",
        { id }
      );
      setMagicLink(url);
    } catch (error) {
      console.error("Failed to get magic link", error);
    }
  }

  async function onCopyMagicLink(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(magicLink!);
  }

  if (isLoading || !trainee) {
    return <div>...Loading</div>;
  }
  return (
    <div className="p-4 flex gap-4 w-full flex-wrap h-[calc(100%-2.5rem)]">
      <TraineeInfoIndex trainee={trainee} />
      <div className="border rounded w-full">
        <Button styleMode="tertiary" styleSize="medium" onClick={getMagicLink}>
          Issue Link
        </Button>
        {magicLink && (
          <div className="w-full flex border p-4 rounded ">
            <Button
              styleMode="secondary"
              styleSize="small"
              onClick={onCopyMagicLink}
              className="w-full flex ap-2 "
            >
              <CopySvg className="w-6 aspect-square" />
              <p className=" truncate">Link</p>
            </Button>
          </div>
        )}
      </div>

      <TraineeProgramIndex trainee={trainee} />
    </div>
  );
}
