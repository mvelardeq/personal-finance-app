// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PersonalFinanceProvider } from "./context/personalFinanceProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <PersonalFinanceProvider>
    <App />
  </PersonalFinanceProvider>
  // </React.StrictMode>,
);
