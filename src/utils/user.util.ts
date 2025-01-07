import { TUser } from "../types/user.type";

const getEmpty = (): TUser => {
  return {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
};

export const userUtil = {
  getEmpty,
};
