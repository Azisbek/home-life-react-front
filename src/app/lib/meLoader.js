import { redirect } from "react-router-dom";
import TokenStorageService from "../../model/TokenService";
import { signInApi } from "../../page/sign-in/api";
import { store } from "../store/store";
import { ROUTE } from "../../constants/path";

export async function meLoader() {
  const token = TokenStorageService.getToken();
  if (!token) {
    return redirect(ROUTE.home);
  }

  try {
    await store.dispatch(signInApi.endpoints.getMe.initiate());
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

// export async function meLoader() {
//   const token = TokenStorageService.getToken();
//   if (!token) {
//     return redirect(ROUTE.home);
//   }

//   try {
//     const { data: refreshedToken } = await store.dispatch(
//       signInApi.endpoints.refresh.initiate({ token })
//     );

//     if (refreshedToken) {
//       TokenStorageService.setToken(refreshedToken.access);
//     }

//     await store.dispatch(signInApi.endpoints.getMe.initiate());
//     return null;
//   } catch (e) {
//     if (e instanceof Error) {
//       console.error("Error:", e.message);
//     } else {
//       console.error("Unexpected error:", e);
//     }
//     TokenStorageService.clearToken();
//     return redirect(ROUTE.home);
//   }
// }
