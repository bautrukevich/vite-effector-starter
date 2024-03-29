import { RouterProvider } from "atomic-router-react";
import { allSettled, fork } from "effector";
import { Provider } from "effector-react";
import { createRoot } from "react-dom/client";

import { Application } from "@/app";

import { appStarted } from "@/shared/init";
import { router } from "@/shared/routing";

const root = document.getElementById("root")!;

const scope = fork();

allSettled(appStarted, { scope }).catch(() =>
  console.warn("Failed to start the app"),
);

createRoot(root).render(
  <Provider value={scope}>
    <RouterProvider router={router}>
      <Application />
    </RouterProvider>
  </Provider>,
);
