import { ReactNode } from "react";

export type RouteConfig = {
  path: string;
  element: ReactNode;
  children?: RouteConfig[];
};
