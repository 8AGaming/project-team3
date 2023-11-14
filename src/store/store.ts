import { configureStore } from "@reduxjs/toolkit";
import pageNameSlice from "../features/products/pages/pageNameSlice";
import productsSlice from "../features/products/productsSlice";
import categoriesSlice from "../features/categories/categoriesSlice";
import usersSlice from "../features/users/usersSlice";

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
