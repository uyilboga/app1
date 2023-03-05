import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
