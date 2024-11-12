import { createBrowserRouter } from "react-router-dom";
import { ROUTE } from "../../constants/path";
import { Layout } from "../layouts/Layout";
import { HomePage } from "../../page/home";
import { Catalog } from "../../page/catalog";
import { ProductPage } from "../../page/product-page";
import { SignIn } from "../../page/sign-in";
import { SignUp } from "../../page/sign-up";
import { Order } from "../../page/Order";

export const router = createBrowserRouter([
  {
    path: ROUTE.base,
    element: <Layout />,
    children: [
      {
        path: ROUTE.signIn,
        element: <SignIn />,
      },
      {
        path: ROUTE.signUp,
        element: <SignUp />,
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
        children: [
          {
            path: ROUTE.basket,
            element: <h1>Basket</h1>,
          },
          {
            path: ROUTE.order,
            element: <Order/>,
          },
        ],
      },
    ],
  },
]);
