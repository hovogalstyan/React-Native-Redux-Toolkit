import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  user: {
    name:'Hovhannes',
    surName:'Galstyan',
    images: require('./images/user.jpg'),
  },
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default UserSlice.reducer;
