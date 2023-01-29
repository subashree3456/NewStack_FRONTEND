import { createSlice } from "@reduxjs/toolkit";

const answerSlice = createSlice({
  name: "answer",
  initialState: {
    currentAnswer: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    answerSuccess: (state, action) => {
      console.log(action.payload);
      state.isFetching = false;
      state.currentAnswer = action.payload;
    },
  },
});

export const { answerSuccess } = answerSlice.actions;
export default answerSlice.reducer;
