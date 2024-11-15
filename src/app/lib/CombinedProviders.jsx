import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "../store/store";
import { Suspense } from "react";
import { router } from "./router";
import { LoaderScreen } from "../../components/ui/loader-screen/ui/LoaderScreen";

export function CombinedProviders() {
  return (
    <>
      {/* <StrictMode> */}
      <Provider store={store}>
        <Suspense fallback={<LoaderScreen />}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
      {/* </StrictMode> */}
    </>
  );
}
