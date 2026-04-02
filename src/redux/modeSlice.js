import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: false, 
  reducers: {
    toggleDarkMode: (state) => !state,
  },
});

export const { toggleDarkMode } = modeSlice.actions;
export default modeSlice.reducer;