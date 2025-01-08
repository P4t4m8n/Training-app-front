import TraineeDetails from "./components/Trainer/Trainees/TraineeDetails/TraineeDetails";
import TraineesIndex from "./components/Trainer/Trainees/TraineesIndex";
import { AdminGuard } from "./guards/AdminGuard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Registry from "./pages/Registry";
import Trainee from "./pages/Trainee";
import TraineeEdit from "./pages/TraineeEdit";
import TrainerIndex from "./pages/TrainerIndex";
import { RouteConfig } from "./types/config.type";

export const ROUTES: RouteConfig[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "/trainer/",
    element: <TrainerIndex />,
    children: [
      {
        path: "trainees",
        element: <TraineesIndex />,
      },
      {
        path: "trainees/:id",
        element: (
          <AdminGuard>
            <TraineeDetails />
          </AdminGuard>
        ),
      },
      {
        path: "trainee/edit/:id",
        element: (
          <AdminGuard>
            <TraineeEdit />
          </AdminGuard>
        ),
      },
      {
        path: "trainees/edit",
        element: (
          <AdminGuard>
            <TraineeEdit />
          </AdminGuard>
        ),
      },
    ],
  },
  {
    path: "/trainee",
    element: <Trainee />,
  },

  {
    path: "/registry",
    element: <Registry />,
  },
];
