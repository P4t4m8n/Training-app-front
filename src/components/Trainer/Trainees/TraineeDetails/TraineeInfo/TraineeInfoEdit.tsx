import { useState } from "react";
import { TUser } from "../../../../../types/user.type";
import { apiService } from "../../../../../services/api.service.";
import UserForm from "../../../../TraineeEdit/UserForm";
interface Props {
  trainee: TUser;
  setTrainee?: React.Dispatch<React.SetStateAction<TUser | null>>;
}

export default function TraineeInfoEdit({ trainee, setTrainee }: Props) {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();
    try {
      setLoading(true);

      const formData = new FormData(e?.currentTarget);
      const firstName = formData.get("firstName") as string;
      const lastName = formData.get("lastName") as string;
      const email = formData.get("email") as string;
      const phone = formData.get("phone") as string;

      const data = { ...trainee, firstName, lastName, email, phone };
      const user = await apiService.put<TUser>(`user/edit/${trainee.id}`, data);
      if (setTrainee) {
        setTrainee((prev) => ({ ...prev, ...user }));
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }
  return <UserForm onSubmit={onSubmit} isLoading={loading} trainee={trainee} />;
}
