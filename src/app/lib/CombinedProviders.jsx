import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "../store/store";
import { Suspense } from "react";
import { router } from "./router";

export function CombinedProviders() {
  return (
    <>
      {/* <StrictMode> */}
      <Provider store={store}>
        <Suspense fallback='Loading'>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
      {/* </StrictMode> */}
    </>
  );
}
