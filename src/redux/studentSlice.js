import { createSlice, nanoid } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "students",
  initialState: {
    list: [
      { id: nanoid(), name: "Shohnazar", attendance: "" },
      { id: nanoid(), name: "Nursultan", attendance: "" },
      { id: nanoid(), name: "Rozimuhammad", attendance: "" },
    ],
  },
  reducers: {
    addStudent: {
      reducer: (state, action) => {
        state.list.push(action.payload);
      },
      prepare: (name) => ({
        payload: { id: nanoid(), name, attendance: "" },
      }),
    },
    removeStudent: (state, action) => {
      state.list = state.list.filter((s) => s.id !== action.payload);
    },
    setAllAttendance: (state, action) => {
      state.list = state.list.map((s) => ({ ...s, attendance: action.payload }));
    },
  },
});

export const { addStudent, removeStudent, setAllAttendance } = studentSlice.actions;
export default studentSlice.reducer;