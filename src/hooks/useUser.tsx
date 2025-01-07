import { useContext } from "react";
import { authContext } from "../context/AuthContext";

export function useUser() {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
