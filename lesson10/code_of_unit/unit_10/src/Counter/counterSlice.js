import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 55,
    text: 'privet3333'
  },
  reducers: {
    increment: state => {
      state.value += 15;
    },
    showConsole: state => {
      state.text = 'hello';
    }
  },
});

export const { increment, showConsole } = counterSlice.actions;

export const selectCount = state => state.counter.value;
export const selectText = state => state.counter.text;

export default counterSlice.reducer;
