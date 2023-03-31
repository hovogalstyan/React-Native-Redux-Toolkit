import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSlice from "./features/UserSlice";
import NewProductsSlice from "./features/NewProductsSlice";
import ProductSlice from "./features/ProductSlice";
import CartSlice from "./features/CartSlice";
const root = combineReducers({
  UserSlice,
  NewProductsSlice,
  ProductSlice,
  CartSlice
});

export const store = configureStore({ reducer: root });
