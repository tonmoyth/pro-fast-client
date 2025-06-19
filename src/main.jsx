import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-base-300 font-urbanist">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
