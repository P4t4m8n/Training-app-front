import { TUser } from "../../types/user.type";
import Button from "../UI/Button";
import Input from "../UI/Form/Input";

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  trainee: TUser;
}
export default function UserForm({ onSubmit, isLoading, trainee }: Props) {
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
      <Input
        type="text"
        name="id"
        readOnly
        hidden={true}
        defaultValue={trainee?.id}
        className="hidden"
      />
      <Input
        type="text"
        name="firstName"
        placeholder="First Name"
        // pattern="[A-Za-z]{1,32}"
        defaultValue={trainee?.firstName}
      ></Input>
      <Input
        type="text"
        name="lastName"
        placeholder="Last Name"
        // pattern="[A-Za-z]{1,32}"
        defaultValue={trainee?.lastName}
      ></Input>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        // pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
        defaultValue={trainee?.email}
      ></Input>
      <Input
        type="tel"
        name="phone"
        placeholder="Phone"
        // pattern="[0-9]{10,11}"
        defaultValue={trainee?.phone || ""}
      ></Input>

      <Button
        type="submit"
        styleMode="primary"
        styleSize="large"
        disabled={isLoading}
      >
        Save
      </Button>
    </form>
  );
}
