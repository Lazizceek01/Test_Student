import { createSlice } from "@reduxjs/toolkit";
const positionSlice = createSlice({
  name: "position",
  initialState: "Boshlang'ich",
  reducers: { setPosition: (state, action) => action.payload }
});
export const { setPosition } = positionSlice.actions;
export default positionSlice.reducer;