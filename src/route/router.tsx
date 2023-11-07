import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import { NewProduct } from "../pages/NewProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/create",
    element: <NewProduct />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
