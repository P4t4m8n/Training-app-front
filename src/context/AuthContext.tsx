/* eslint-disable react-refresh/only-export-components */
"use client";

import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
  FC,
} from "react";
import { TUser } from "../types/user.type";
import { authService } from "../services/auth.service";
import { getSessionData } from "../utils/secureStore.util";

interface Props {
  children: React.ReactNode;
}
interface AuthProvider {
  user: TUser | null;
  getCurrentUserNoRender: () => TUser | null;
}

export const authContext = createContext<AuthProvider | undefined>(undefined);

export const AuthProvider: FC<Props> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<TUser | null>(null);

  //Access the state value without causing a re-render
  const userRef = useRef<TUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = getSessionData<string>("token");
        console.log("token:", token)
        if (!token) return;
        const user = await authService.validateToken(token);
        setUser(user);
        userRef.current = user;
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  const getCurrentUserNoRender = () => userRef.current;

  return (
    <authContext.Provider value={{ user, getCurrentUserNoRender }}>
      {children}
    </authContext.Provider>
  );
};
