import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Bills from "./screens/Bills";
import Expense from "./screens/Expenses";
import SpecificExpense from "./screens/SpecificExpense";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Bills />,
  },
  {
    path: "/expenses/:billId/:title",
    element: <Expense />,
  },
  {
    path: "/expense/:id",
    element: <SpecificExpense />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
