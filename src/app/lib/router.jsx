import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { Redirect } from "./Redirect";
import CustomErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { ROUTE } from "../../constants/path";
import { Layout } from "../layouts/Layout";
import { HomePage } from "../../page/home";
import { Catalog } from "../../page/catalog";
import { ProductPage } from "../../page/product-page";
import { SignIn } from "../../page/sign-in";
import { SignUp } from "../../page/sign-up";
import { Order } from "../../page/Order";
// import { authLoader } from "./authLoader";
import { meLoader } from "./meLoader";

const HomePage = lazy(() => import("../../page/home"));
const Catalog = lazy(() => import("../../page/catalog"));
const ProductPage = lazy(() => import("../../page/product-page"));
const SignIn = lazy(() => import("../../page/sign-in"));
const SignUp = lazy(() => import("../../page/sign-up"));
const Basket = lazy(() => import("../../page/basket"));

export const router = createBrowserRouter([
  {
    path: ROUTE.base,
    element: <Layout />,
    errorElement: <CustomErrorBoundary />,
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

      {
        element: <Redirect />,
        children: [
          {
            path: ROUTE.basket,
            element: <Basket />,
          },
          {
            path: ROUTE.profile,
            element: <h1>Profile</h1>,
          },
          {
            path: ROUTE.order,
            element: <Order/>,
          },
        ],
        ].map((config) => ({
          // loader: authLoader,
          loader: meLoader,
          ...config,
        })),
      },
    ],
  },
]);
