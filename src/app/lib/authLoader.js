import { redirect } from "react-router-dom";
import TokenStorageService from "../../model/TokenService";
import { store } from "../store/store";
import { ROUTE } from "../../constants/path";
import { signInApi } from "../../page/sign-in/api";
import { meLoader } from "./meLoader";

function throwUnauthorizedError() {
  throw new Error("Not authorized");
}

export async function authLoader() {
  const access = TokenStorageService.getToken();

  try {
    if (!access) throwUnauthorizedError();

    const { data } = await store.dispatch(
      signInApi.endpoints.refresh.initiate({ access })
    );

    if (data && data.access) {
      TokenStorageService.setToken(data.access);
    } else {
      throwUnauthorizedError();
    }

    return await meLoader();
  } catch (e) {
    console.error("Error during authLoader:", e);
    TokenStorageService.clearToken();
    return redirect(ROUTE.home);
  }
}
