import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router";
import 'aos/dist/aos.css';
import Aos from "aos";
import AuthProvider from "./contexts/AuthConext/AuthProvider";
Aos.init();


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-base-300 font-urbanist">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>
);
