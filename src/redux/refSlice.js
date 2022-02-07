import { createSlice } from "@reduxjs/toolkit";

const refSlice = createSlice({
  name: "navLinksRefs",
  initialState: {
    // value: [],
    // id: [],
    value: {
      ref: [],
      id: [],
      x: 0,
    },
  },
  reducers: {
    setRef: (state, action) => {
      //   console.log(state.value[index]);
      state.value.id[state.value.x] = action.payload;
    },
    addRef: (state, action) => {
      state.value.ref = [...state.value.ref, action.payload];
    },
    setID: (state, action) => {
      state.value.x = action.payload;
      console.log(state.value.x);
    },
  },
});

export const refActions = refSlice.actions;
export default refSlice.reducer;
