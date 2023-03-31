import { ProductData } from "../../Api/newProductData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: ProductData,
};

const NewProductSlice = createSlice({
  name: "new products",
  initialState,
  reducers: {
  },
});
export default NewProductSlice.reducer;
