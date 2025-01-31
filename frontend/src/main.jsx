import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Accueil from "./pages/Accueil";
import Inscription from "./pages/Inscription";
import Generer from "./pages/Generer";
import Texte from "./pages/Texte";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/accueil",
        element: <Accueil />,
      },
      {
        path: "/inscription",
        element: <Inscription />,
      },
      {
        path: "/generer",
        element: <Generer />,
      },
      {
        path: "/generer/texte",
        element: <Texte />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
