import React from "react";
import {RouterProvider} from "react-router-dom";
import router from "./router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
const queryClient = new QueryClient();
export default function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>
  );
}
