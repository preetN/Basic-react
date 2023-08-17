import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setvalue: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setvalue } = nameSlice.actions;

export default nameSlice.reducer;
