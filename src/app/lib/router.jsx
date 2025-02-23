import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
import { Redirect } from "./Redirect";
import CustomErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { ROUTE } from "../../constants/path";
import { Layout } from "../layouts/Layout";
import { meLoader } from "./meLoader";
import { adminLoader } from "./adminLoader";

// Ленивая загрузка страниц
const HomePage = lazy(() => import("../../page/home"));
const Catalog = lazy(() => import("../../page/catalog"));
const ProductPage = lazy(() => import("../../page/product-page"));
const SignIn = lazy(() => import("../../page/sign-in"));
const SignUp = lazy(() => import("../../page/sign-up"));
const Basket = lazy(() => import("../../page/basket"));
const Order = lazy(() => import("../../page/Order"));

const AddBrandPage = lazy(() => import("../../page/admin/page/addBrandPage"));

const Archive = lazy(() => import("../../page/admin/page/archive"));

const AdminLayout = lazy(() => import("../../page/admin/AdminLayout"));
const AddProductPage = lazy(() =>
  import("../../page/admin/page/addProductPage")
);
const AddNewsPage = lazy(() => import("../../page/admin/page/addNewsPage"));
const Applications = lazy(() =>
  import("../../page/admin/page/applicationsPage")
);
const AllProductsPage = lazy(() =>
  import("../../page/admin/page/allProductsPage")
);

const AddCatalog = lazy(() => import("../../page/admin/page/addCatalogPage"));

const Users = lazy(() => import("../../page/admin/page/users"));

export const router = createBrowserRouter([
  {
    path: ROUTE.base,
    element: <Layout />,
    errorElement: <CustomErrorBoundary />,
    children: [
      { index: true, path: ROUTE.signIn, element: <SignIn /> },
      { path: ROUTE.signUp, element: <SignUp /> },
      {
        path: `${ROUTE.catalog}/:productId`,
        element: <ProductPage />,
      },
      {
        path: ROUTE.admin,
        element: <AdminLayout />,
        errorElement: <CustomErrorBoundary />,
        children: [
          { index: true, element: <Navigate to={ROUTE.addProducts} /> },
          { path: ROUTE.addProducts, element: <AddProductPage /> },
          { path: ROUTE.addNews, element: <AddNewsPage /> },
          { path: ROUTE.applications, element: <Applications /> },
          { path: ROUTE.allProducts, element: <AllProductsPage /> },
          { path: ROUTE.archive, element: <Archive /> },
          { path: ROUTE.createBrand, element: <AddBrandPage /> },
          { path: ROUTE.createCategory, element: <AddCatalog /> },
          { path: ROUTE.users, element: <Users /> },
        ].map((config) => ({
          loader: adminLoader,
          ...config,
        })),
      },
      {
        element: <Redirect />,
        children: [
          { path: ROUTE.home, element: <HomePage /> },
          { path: ROUTE.catalog, element: <Catalog /> },
          { path: ROUTE.basket, element: <Basket /> },
          { path: ROUTE.profile, element: <h1>Profile</h1> },
          { path: ROUTE.order, element: <Order /> },
        ].map((config) => ({
          loader: meLoader,
          ...config,
        })),
      },
    ],
  },
]);
