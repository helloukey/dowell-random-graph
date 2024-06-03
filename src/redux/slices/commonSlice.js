import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
  name: "common",
  initialState: {
    type: "field",
    side: 100,
    selection: 5,
    choice: 0,
    value: 10,
    graphData: null,
  },
  reducers: {
    changeType: (state, action) => {
      state.type = action.payload;
      if (action.payload === "field") {
        state.side = 100;
        state.selection = 5;
        state.choice = 0;
        state.value = 10;
      } else if (action.payload === "excel") {
        state.side = 10;
        state.selection = 5;
      }
    },
    changeSide: (state, action) => {
      state.side = action.payload;
    },
    changeSelection: (state, action) => {
      state.selection = action.payload;
    },
    changeChoice: (state, action) => {
      state.choice = action.payload;
    },
    changeValue: (state, action) => {
      state.value = action.payload;
    },
    addGraphData: (state, action) => {
      state.graphData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeType,
  changeSide,
  changeSelection,
  changeChoice,
  changeValue,
  addGraphData,
} = commonSlice.actions;

export default commonSlice.reducer;
