import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addfavorite(state, action) {
      state.push(action.payload);
    },
    
  },
});

export const { addfavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;