import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
// import { AppProvider } from "./context/AppProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <AppProvider> */}
      <App />
    {/* </AppProvider> */}
  </StrictMode>
);
