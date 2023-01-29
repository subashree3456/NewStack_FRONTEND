import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    currentQuestion: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    questionSuccess: (state, action) => {
      console.log(action.payload);
      state.isFetching = false;
      state.currentQuestion = action.payload;
    },
  },
});

export const { questionSuccess } = questionSlice.actions;
export default questionSlice.reducer;
