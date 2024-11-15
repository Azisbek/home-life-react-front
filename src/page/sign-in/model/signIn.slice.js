import { createSlice } from "@reduxjs/toolkit";
import { signInApi } from "../api";
import TokenService from "../../../model/TokenService";

const initialState = {
  user: {
    username: "",
    email: "",
    gender: null,
    age: 0,
    number: 0,
    wholesaler: false,
  },
  isUserLoaded: false,
};

const actionSetUser = (state, { payload }) => {
  state.user = {
    id: payload.id || null,
    username: payload.username || "",
    gender: payload.gender || null,
    age: payload.age || null,
    email: payload.email || "",
    number: payload.number || null,
    wholesaler: payload.wholesaler || false,
    role: payload.role || "",
  };
  state.isUserLoaded = true;
};

export const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        signInApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          const accessToken = payload.user.tokens?.access;
          if (accessToken) {
            TokenService.setToken(accessToken);
          } else {
            console.error("Access token is undefined");
          }
          state.user = {
            age: payload.age,
            email: payload.email,
            gender: payload.gender,
            number: payload.number,
            username: payload.username,
            wholesaler: payload.wholesaler,
            role: payload.role,
          };
        }
      )
      .addMatcher(signInApi.endpoints.login.matchRejected, () => {
        TokenService.clearToken();
      })
      .addMatcher(signInApi.endpoints.getMe.matchFulfilled, actionSetUser)
      .addMatcher(
        signInApi.endpoints.refresh.matchFulfilled,
        (_, { payload }) => {
          TokenService.setToken(payload.access);
        }
      )
      .addMatcher(signInApi.endpoints.refresh.matchRejected, () => {
        TokenService.clearToken();
      });
  },
});
