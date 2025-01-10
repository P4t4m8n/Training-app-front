import { BrowserRouter, Routes } from "react-router";
import { renderRoutes, ROUTES } from "./routes";

import Header from "./components/Header/Header";
import AppNav from "./components/AppNav/AppNav";

import "./index.css";
export default function App() {
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
