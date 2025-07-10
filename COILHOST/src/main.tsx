import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MainPage from "./components/pages/mainpage/mainpage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
