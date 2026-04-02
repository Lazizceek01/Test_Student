import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialList = [
  { id: nanoid(), name: "Shohnazar" },
  { id: nanoid(), name: "Nursultan" },
  { id: nanoid(), name: "Rozimuhammad" },
];

const studentSlice = createSlice({
  name: "students",
  initialState: {
    list: initialList,
  },
  reducers: {
    addStudent: {
      reducer: (state, action) => {
        state.list.push(action.payload);
      },
      prepare: (name) => ({
        payload: { id: nanoid(), name },
      }),
    },
    removeStudent: (state, action) => {
      const id = action.payload;
      state.list = state.list.filter((s) => s.id !== id);
    },
  },
});

export const { addStudent, removeStudent } = studentSlice.actions;
export default studentSlice.reducer;