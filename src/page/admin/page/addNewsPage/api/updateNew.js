import { $api } from "../../../../../constants/service/api";

export const updateNew = $api.injectEndpoints({
  endpoints: (build) => ({
    updateNewsApi: build.mutation({
      query: (file) => {
        console.log(file)
        const formData = new FormData();
        formData.append("image", file);

        return {
          url: "/product/banner/",
          method: "PUT",
          body: formData,
        };
      },
    }),
  }),
});

export const { useUpdateNewsApiMutation } = updateNew;
