import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import { NewProduct } from "../pages/NewProduct";
import { EditProduct } from "../components/EditProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/create",
    element: <NewProduct />,
  },
  {
    path: "/product/:id",
    element: <EditProduct />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
