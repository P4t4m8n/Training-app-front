import { MouseEvent, useEffect, useRef, useState } from "react";
import { TUser } from "../types/user.type";
import { useParams } from "react-router";
import Button from "../components/UI/Button";
import { userUtil } from "../utils/user.util";
import { apiService } from "../services/api.service.";
import { CopySvg } from "../components/Icons/IconsSvg";
import UserForm from "../components/TraineeEdit/UserForm";

export default function TraineeEdit() {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [magicLink, setMagicLink] = useState<string>("");

  const trainee = useRef<TUser>(userUtil.getEmpty());

  useEffect(() => {
    trainee.current = userUtil.getEmpty();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();
    try {
      setLoading(true);

      const formData = new FormData(e?.currentTarget);
      const firstName = formData.get("firstName") as string;
      const lastName = formData.get("lastName") as string;
      const email = formData.get("email") as string;
      const phone = formData.get("phone") as string;

      const data = { ...trainee.current, firstName, lastName, email, phone };
      const { url } = id
        ? await apiService.put<{ url: string }>(`user/edit/${id}`, data)
        : await apiService.post<{ url: string }>("auth/signup", data);
      setMagicLink(url);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  async function onCopyMagicLink(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(magicLink);
  }

  return (
    <div className="flex flex-col items-center w-full p-4 gap-4">
      <header>
        <h1>Trainee Edit</h1>
      </header>
      <div className="grid grid-cols-2 w-full gap-4 ">
        <UserForm
          onSubmit={onSubmit}
          isLoading={loading}
          trainee={trainee?.current}
        />
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
    </div>
  );
}
