import { $api } from "../../../constants/service/api";

export const otpCode = $api.injectEndpoints({
  endpoints: (build) => ({
    postOtpCode: build.mutation({
      query: (body) => ({
        url: "/users/wholesaler-otp/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { usePostOtpCodeMutation } = otpCode;
