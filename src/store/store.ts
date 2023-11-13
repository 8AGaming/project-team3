import { configureStore } from "@reduxjs/toolkit";
import pageNameSlice from "../pages/pageNameSlice";

export const store = configureStore({
  reducer: {
    pageName: pageNameSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
