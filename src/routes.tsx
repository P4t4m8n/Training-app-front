import { AdminGuard } from "./guards/AdminGuard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Registry from "./pages/Registry";
import Trainee from "./pages/Trainee";
import TraineeEdit from "./pages/TraineeEdit";
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
  {
    path: "/trainer/trainee/edit",
    element: (
      <AdminGuard>
        <TraineeEdit />
      </AdminGuard>
    ),
  },
  {
    path: "/trainer/trainee/edit/:id",
    element: (
      <AdminGuard>
        <TraineeEdit />
      </AdminGuard>
    ),
  },
  {
    path: "/registry",
    element: <Registry />,
  },
];
