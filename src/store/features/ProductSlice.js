import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../../Api/product/product";

const initialState = {
  filterText: "Chairs",
  data: null,
  item:null
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getFilterText: (state, action) => {
      state.filterText = action.payload;
    },
    filterProduct: (state) => {
      const results = getProduct.filter((item) => item.categories === state.filterText);
      state.data = results;
    },
  },
});
export default ProductSlice.reducer;
export const {
  filterProduct,
  getFilterText,
} = ProductSlice.actions;
