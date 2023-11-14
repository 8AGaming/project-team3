import { configureStore } from "@reduxjs/toolkit";
import pageNameSlice from "../products/pages/pageNameSlice";
import productsSlice from "../products/productsSlice";
import categoriesSlice from "../categories/categoriesSlice";
import usersSlice from "../users/usersSlice";

export const store = configureStore({
  reducer: {
    pageName: pageNameSlice,
    products: productsSlice,
    categories: categoriesSlice,
    users: usersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
