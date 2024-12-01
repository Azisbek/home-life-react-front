import { redirect } from "react-router-dom";
import TokenStorageService from "../../model/TokenService";
import { signInApi } from "../../page/sign-in/api";
import { store } from "../store/store";
import { ROUTE } from "../../constants/path";

export async function adminLoader() {
  const token = TokenStorageService.getToken();
  if (!token) {
    return redirect(ROUTE.signUp);
  }

  try {
    const result = await store.dispatch(signInApi.endpoints.getMe.initiate());
    console.log(result);
    if (result.data.role !== "admin") {
      return redirect(ROUTE.signIn);
    }
    return null;
  } catch (e) {
    if (e instanceof Error) {
      console.error("Error:", e.message);
    } else {
      console.error("Unexpected error:", e);
    }
    TokenStorageService.clearToken();
    return redirect(ROUTE.home);
  }
}
