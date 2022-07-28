import { configureStore } from '@reduxjs/toolkit';
import appDataReducer from './AppdataSlice';

export const store = configureStore({
  reducer: {
    appData: appDataReducer,
  },
});
