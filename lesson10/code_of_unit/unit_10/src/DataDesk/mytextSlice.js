import { createSlice } from '@reduxjs/toolkit';

export const mytextSlice = createSlice({
  name: 'mytext',
  initialState: {
    text : 'mytext data'
  },
  reducers: {
    increment: state => {
      state.text += '!';
    },
    showConsole : state => {
      state.text = 'hello its a mytextslice';
    }
  },
});

export const { increment, showConsole } = mytextSlice.actions;

export const selectMytext = state => state.mytext.text;

export default mytextSlice.reducer;
