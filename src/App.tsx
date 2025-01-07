import { BrowserRouter, Routes } from "react-router";

import "./index.css";
import Header from "./components/Header/Header";
import AppNav from "./components/AppNav/AppNav";
import { renderRoutes } from "./utils/routesRender.util";
import { ROUTES } from "./routes";

function App() {
  const routes = renderRoutes(ROUTES);
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="h-[calc(100svh-8rem)] overflow-auto">
          <Routes>{routes}</Routes>
        </main>
        <AppNav />
      </BrowserRouter>
    </>
  );
}

export default App;
