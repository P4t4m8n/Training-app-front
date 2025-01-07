import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Trainee from "./pages/Trainee";
import Trainer from "./pages/Trainer";
import { RouteConfig } from "./types/config.type";

export const ROUTES: RouteConfig[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/trainer",
    element: <Trainer />,
  },
  {
    path: "/trainee",
    element: <Trainee />,
  },
];
