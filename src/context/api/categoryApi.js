import { api } from "./api";

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: (params) => ({
        url: `/products${params.category}`,
        params,
      }),
      providesTags: ["Category"],
    }),
  }),
});

export const { useGetCategoryQuery } = categoryApi;
