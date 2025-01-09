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
  console.log(access);

  try {
    if (!access) {
      console.error("Токен отсутствует");
      throwUnauthorizedError();
    }

    const { data } = await store.dispatch(
      signInApi.endpoints.refresh.initiate({ refresh: access })
    );

    if (data && data.access) {
      TokenStorageService.setToken(data.access);
    } else {
      console.error("Ошибка при обновлении токена", data);
      throwUnauthorizedError();
    }

    return await meLoader();
  } catch (e) {
    console.error("Ошибка в authLoader:", e);
    TokenStorageService.clearToken();
    return redirect(ROUTE.home);
  }
}
