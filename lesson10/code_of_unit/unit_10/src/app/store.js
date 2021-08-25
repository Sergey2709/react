import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Counter/counterSlice';
import myTextReducer from '../DataDesk/mytextSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    mytext : myTextReducer
  },
});
