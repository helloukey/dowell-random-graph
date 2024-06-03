import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { commonSlice } from "./slices/commonSlice";
import { graphApi } from "./api/graphApi";

export const store = configureStore({
  reducer: {
    common: commonSlice.reducer,
    [graphApi.reducerPath]: graphApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(graphApi.middleware),
});

setupListeners(store.dispatch);
