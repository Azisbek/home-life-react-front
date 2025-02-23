import { $api } from "../../../../../constants/service/api";

export const isApplications = $api.injectEndpoints({
  endpoints: (build) => ({
    getApplications: build.query({
      query: () => ({
        url: `/cart/applications/`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetApplicationsQuery } = isApplications;
