import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
import { Redirect } from "./Redirect";
import CustomErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { ROUTE } from "../../constants/path";
import { Layout } from "../layouts/Layout";
// import { authLoader } from "./authLoader";

import { meLoader } from "./meLoader";
const HomePage = lazy(() => import("../../page/home"));
const Catalog = lazy(() => import("../../page/catalog"));
const ProductPage = lazy(() => import("../../page/product-page"));
const SignIn = lazy(() => import("../../page/sign-in"));
const SignUp = lazy(() => import("../../page/sign-up"));
const Basket = lazy(() => import("../../page/basket"));
const Order = lazy(() => import("../../page/Order"));
const AdminLayout = lazy(() => import("../../page/admin/AdminLayout"));
const AddProductPage = lazy(() =>
  import("../../page/admin/adminPages/addProductPage")
);
const AddNewsPage = lazy(() =>
  import("../../page/admin/adminPages/addNewsPage")
);
const AddSharesPage = lazy(() =>
  import("../../page/admin/adminPages/addSharesPage")
);
const Applications = lazy(() =>
  import("../../page/admin/adminPages/applicationsPage")
);
const AllProductsPage = lazy(() =>
  import("../../page/admin/adminPages/allProductsPage")
);
const AllNewsPage = lazy(() =>
  import("../../page/admin/adminPages/allNewsPage")
);
const AllSharesPage = lazy(() =>
  import("../../page/admin/adminPages/allSharesPage")
);

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
        path: ROUTE.admin,
        element: <AdminLayout />,
        errorElement: <CustomErrorBoundary />,
        children: [
          {
            index: true,
            element: <Navigate to={ROUTE.addProducts} />,
          },
          {
            path: ROUTE.addProducts,
            element: <AddProductPage />,
          },
          {
            path: ROUTE.addNews,
            element: <AddNewsPage />,
          },
          {
            path: ROUTE.addShares,
            element: <AddSharesPage />,
          },
          {
            path: ROUTE.applications,
            element: <Applications />,
          },
          {
            path: ROUTE.allProducts,
            element: <AllProductsPage />,
          },
          {
            path: ROUTE.allNews,
            element: <AllNewsPage />,
          },
          {
            path: ROUTE.allShares,
            element: <AllSharesPage />,
          },
        ],
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
            element: <Order />,
          },
        ].map((config) => ({
          // loader: authLoader,
          loader: meLoader,
          ...config,
        })),
      },
    ],
  },
]);
