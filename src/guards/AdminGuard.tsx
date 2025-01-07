import { ReactNode } from "react";
import { useUser } from "../hooks/useUser";
import Redirect from "../pages/Redirect";

interface Props {
  children: ReactNode;
}

export const AdminGuard = ({ children }: Props) => {
  const {user} = useUser();
  // console.log("user:", user)

  // if (!user) {
  //   console.error(
  //     "You need to be logged in to access this page",
  //     "GENERAL_ERROR",
  //     new Error("No user found")
  //   );
  //   return <Redirect />;
  // }

  return <>{children}</>;
};
