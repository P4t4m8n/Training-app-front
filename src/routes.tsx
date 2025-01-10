import TraineeDetails from "./components/Trainer/Trainees/TraineeDetails/TraineeDetailsIndex";
import TraineesIndex from "./components/Trainer/Trainees/TraineesIndex";
import { AdminGuard } from "./guards/AdminGuard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Registry from "./pages/Registry";
import Trainee from "./pages/Trainee";
import TraineeEdit from "./pages/TraineeEdit";
import TrainerIndex from "./pages/TrainerIndex";
import { Route } from "react-router";
import { RouteConfig } from "./types/config.type";
import ProgramDetails from "./components/Program/ProgramDetails/ProgramDetails";
import ProgramEditIndex from "./components/Program/ProgramEdit/ProgramEditIndex";

export const renderRoutes = (routes: RouteConfig[]) => {
  return routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
};

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
    path: "program/:userId/:id",
    element: <ProgramDetails />,
  },
  {
    path: "program/:userId/edit",
    element: <ProgramEditIndex />,
  },
  {
    path: "program/:userId/edit/:id",
    element: <ProgramEditIndex />,
  },

  {
    path: "/registry",
    element: <Registry />,
  },
];
