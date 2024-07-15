import {createRoot} from "react-dom/client";
import App from "./App";
import "./index.css";
import React from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {RecoilRoot} from "recoil";
import {RouterProvider} from "react-router-dom";
import router from "./router";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
const domeNode = document.getElementById("root");
const root = createRoot(domeNode as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);
