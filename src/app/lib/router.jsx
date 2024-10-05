import { createBrowserRouter } from "react-router-dom";
import { ROUTE } from "../../constants/path";
import { Layout } from "../layouts/Layout";
import { HomePage } from "../../page/home";
import { Catalog } from "../../page/catalog";
import { ProductPage } from "../../page/product-page";

export const router = createBrowserRouter([
  {
    path: ROUTE.base,
    element: <Layout />,
    children: [
      {
        path: ROUTE.signIn,
        element: <h1>Login</h1>,
      },
      {
        path: ROUTE.signUp,
        element: <h1>Registration</h1>,
      },
      {
        path: ROUTE.home,
        element: <HomePage />,
      },
      {
        path: ROUTE.catalog,
        element: <Catalog />,
      },
      {
        path: `${ROUTE.catalog}/:productId`,
        element: <ProductPage />,
      },

      // Authorized Pages

      {
        element: <h1>Redirect</h1>,
        children: [
          {
            path: ROUTE.basket,
            element: <h1>Basket</h1>,
          },
        ],
      },
    ],
  },
]);
