// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const graphApi = createApi({
  reducerPath: "graphApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_GRAPH_API,
    method: "POST",
  }),
  endpoints: (builder) => ({
    getRandomPoints: builder.mutation({
      query: ({ type, data }) => ({
        url: `${type}rp/${process.env.REACT_APP_GRAPH_API_KEY}/`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRandomPointsMutation } = graphApi;
